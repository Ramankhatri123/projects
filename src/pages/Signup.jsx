import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

/**
 * Signup page to register new users.
 */
const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const credential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(db, 'users', credential.user.uid), {
        name: form.name,
        email: form.email,
        createdAt: new Date().toISOString()
      });
      navigate('/');
    } catch (err) {
      setError('Unable to create account.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="glass rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <p className="text-sm text-white/60 mt-1">Join the academic community.</p>
        {error && <p className="text-sm text-red-400 mt-3">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Full Name"
            className="w-full rounded-xl bg-black/40 px-4 py-3"
          />
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
          <button type="submit" className="w-full rounded-xl bg-accent-500 py-3">Sign Up</button>
        </form>
        <p className="text-sm text-white/60 mt-4">
          Already have an account? <Link to="/login" className="text-accent-400">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
