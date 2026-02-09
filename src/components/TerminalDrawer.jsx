import React, { useState } from 'react';
import { useSettings } from '../hooks/useSettings.js';

/**
 * Terminal drawer for live command parsing and settings updates.
 */
const TerminalDrawer = () => {
  const { runCommand } = useSettings();
  const [open, setOpen] = useState(false);
  const [output, setOutput] = useState('Welcome to ScholarSphere Terminal. Type help.');
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await runCommand(input);
    if (result?.message) {
      setOutput(result.message);
    } else {
      setOutput(`Applied: ${input}`);
    }
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="glass w-[320px] rounded-2xl p-4 shadow-glow">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold">Power Terminal</p>
            <button type="button" onClick={() => setOpen(false)} className="text-sm text-white/70">Close</button>
          </div>
          <div className="text-xs text-white/70 bg-black/30 p-3 rounded-xl h-32 overflow-y-auto whitespace-pre-line">
            {output}
          </div>
          <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="e.g. theme accent purple"
              className="flex-1 bg-black/40 rounded-lg px-3 py-2 text-sm"
            />
            <button type="submit" className="bg-accent-500 px-4 py-2 rounded-lg text-sm">Run</button>
          </form>
        </div>
      )}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-accent-500 px-4 py-3 shadow-glow text-sm"
        >
          Terminal
        </button>
      )}
    </div>
  );
};

export default TerminalDrawer;
