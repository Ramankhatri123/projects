import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

/**
 * Top header with quick actions and profile snapshot.
 */
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-accent-500 shadow-glow" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400">ScholarSphere</p>
            <p className="text-sm">Academic Knowledge Hub</p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm">{user ? `UID: ${user.uid.slice(0, 6)}...` : 'Guest Mode'}</span>
          </div>
          {user ? (
            <button
              type="button"
              onClick={logout}
              className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
