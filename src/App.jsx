import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Library from './pages/Library.jsx';
import Upload from './pages/Upload.jsx';
import MockTest from './pages/MockTest.jsx';
import Chat from './pages/Chat.jsx';
import Profile from './pages/Profile.jsx';
import KnowledgeMapPage from './pages/KnowledgeMap.jsx';
import { AuthProvider } from './hooks/useAuth.js';
import { SettingsProvider } from './hooks/useSettings.js';

/**
 * Root application router and global providers.
 */
const App = () => {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const loader = useMemo(
    () => (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="glass px-6 py-4 rounded-2xl shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-accent-400">ScholarSphere</p>
          <p className="text-lg font-semibold mt-2">Loading your academic universe...</p>
        </div>
      </div>
    ),
    []
  );

  if (booting) {
    return loader;
  }

  return (
    <AuthProvider>
      <SettingsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}
            >
            <Route index element={<Library />} />
            <Route path="library" element={<Library />} />
            <Route path="upload" element={<Upload />} />
            <Route path="mock-tests" element={<MockTest />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="knowledge-map" element={<KnowledgeMapPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
