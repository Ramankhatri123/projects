import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

/**
 * Login page for email/password authentication.
 */
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError('Unable to login. Check credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="glass rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-white/60 mt-1">Sign in to access your academic hub.</p>
        {error && <p className="text-sm text-red-400 mt-3">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="Email"
            className="w-full rounded-xl bg-black/40 px-4 py-3"
          />
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            placeholder="Password"
            className="w-full rounded-xl bg-black/40 px-4 py-3"
          />
          <button type="submit" className="w-full rounded-xl bg-accent-500 py-3">Login</button>
        </form>
        <p className="text-sm text-white/60 mt-4">
          New here? <Link to="/signup" className="text-accent-400">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
