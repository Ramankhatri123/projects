import React, { useEffect, useState } from 'react';
import MockTimer from '../components/MockTimer.jsx';
import { useMockTest } from '../hooks/useMockTest.js';
import { useSettings } from '../hooks/useSettings.js';

/**
 * AI mock test generator page with timer and report.
 */
const MockTest = () => {
  const { settings } = useSettings();
  const { questions, report, generate, finish } = useMockTest();
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(settings.mockTimer);

  useEffect(() => {
    setRemaining(settings.mockTimer);
  }, [settings.mockTimer]);

  useEffect(() => {
    if (!running) return undefined;
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setRunning(false);
          finish();
          return 0;
        }
        return prev - 1;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [running, finish]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">AI Mock Tests</h2>
          <p className="text-sm text-white/60">Generate timed tests from your uploaded notes and syllabus.</p>
        </div>
        <button
          type="button"
          onClick={generate}
          className="px-4 py-2 rounded-full bg-accent-500 shadow-glow"
        >
          Generate Test
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="glass rounded-2xl p-6 flex flex-col items-center gap-4">
          <MockTimer remaining={remaining} total={settings.mockTimer} running={running} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRunning(true)}
              className="px-4 py-2 rounded-full bg-white/10"
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => setRunning(false)}
              className="px-4 py-2 rounded-full bg-white/10"
            >
              Stop
            </button>
          </div>
          <div className="text-xs text-white/60 text-center">
            Questions are visible only while the timer is running.
          </div>
          <div className="text-xs text-white/50">
            AI hints: {settings.aiHints ? 'Enabled' : 'Disabled'} · Difficulty: {settings.aiDifficulty}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Questions</h3>
          {running ? (
            <ol className="mt-4 space-y-3 text-sm">
              {questions.map((question, index) => (
                <li key={question} className="glass rounded-xl p-3">
                  <p className="text-white/80">{index + 1}. {question}</p>
                  <button type="button" className="text-xs mt-2 text-accent-400">Give Feedback</button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-white/60 mt-4">Start the timer to view your AI questions.</p>
          )}
        </div>
      </div>

      {report && (
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">AI Performance Report</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm uppercase text-emerald-300">Strengths</p>
              <ul className="mt-2 text-sm text-white/70 list-disc list-inside">
                {report.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase text-rose-300">Weaknesses</p>
              <ul className="mt-2 text-sm text-white/70 list-disc list-inside">
                {report.weaknesses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MockTest;
