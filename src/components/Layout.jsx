import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import TerminalDrawer from './TerminalDrawer.jsx';
import { useSettings } from '../hooks/useSettings.js';

/**
 * Main app layout with navigation, header, and terminal drawer.
 */
const Layout = () => {
  const { settings } = useSettings();
  const themeClass = settings.theme === 'light' ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-white';
  const fontClass = settings.font === 'monospace' ? 'font-mono' : settings.font === 'serif' ? 'font-serif' : 'font-sans';

  return (
    <div className={`min-h-screen ${themeClass} ${fontClass}`}>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-6 lg:px-10">
          <Outlet />
        </main>
      </div>
      <TerminalDrawer />
    </div>
  );
};

export default Layout;
