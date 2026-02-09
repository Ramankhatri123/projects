import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar navigation for primary app sections.
 */
const Sidebar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      isActive ? 'bg-accent-500 text-white shadow-glow' : 'hover:bg-white/10'
    }`;

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-[calc(100vh-72px)] border-r border-white/10 px-4 py-6 gap-2">
      <NavLink to="/library" className={navClass}>Library</NavLink>
      <NavLink to="/upload" className={navClass}>Upload</NavLink>
      <NavLink to="/mock-tests" className={navClass}>AI Mock Tests</NavLink>
      <NavLink to="/chat" className={navClass}>Chat</NavLink>
      <NavLink to="/knowledge-map" className={navClass}>Knowledge Map</NavLink>
      <NavLink to="/profile" className={navClass}>Profile</NavLink>
    </aside>
  );
};

export default Sidebar;
