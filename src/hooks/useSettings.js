import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import { useAuth } from './useAuth.jsx';
import { parseTerminalCommand } from './useTerminalCommands.js';

/**
 * Settings context for realtime user preferences and terminal-command updates.
 */
const SettingsContext = createContext(null);

const defaultSettings = {
  theme: 'dark',
  accent: 'purple',
  font: 'sans',
  libraryView: 'list',
  librarySort: 'date',
  mockTimer: 45,
  mockHints: true,
  chatBubble: 'blue',
  chatFont: 'normal',
  notify: 'unmute',
  notifyChannel: 'push',
  aiHints: true,
  aiDifficulty: 'medium'
};

export const SettingsProvider = ({ children }) => {
  const { user } = useAuth();
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    if (!user) return undefined;
    const ref = doc(db, 'settings', user.uid);
    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setSettings({ ...defaultSettings, ...snap.data() });
      } else {
        setDoc(ref, defaultSettings, { merge: true });
      }
    });

    return () => unsubscribe();
  }, [user]);

  const updateSettings = async (updates) => {
    if (!user) return;
    const ref = doc(db, 'settings', user.uid);
    await setDoc(ref, updates, { merge: true });
  };

  const runCommand = async (input) => {
    const result = parseTerminalCommand(input);
    if (result?.updates) {
      await updateSettings(result.updates);
    }
    return result;
  };

  const value = useMemo(
    () => ({ settings, updateSettings, runCommand }),
    [settings]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => useContext(SettingsContext);
