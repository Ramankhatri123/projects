import { useState } from 'react';
import { mockQuestions } from '../data/mockData.js';

/**
 * Mock test hook with placeholder AI generation.
 */
export const useMockTest = () => {
  const [questions, setQuestions] = useState(mockQuestions);
  const [report, setReport] = useState(null);

  const generate = async () => {
    setQuestions(mockQuestions);
    return mockQuestions;
  };

  const finish = () => {
    setReport({
      strengths: ['Thermodynamics', 'Graphs'],
      weaknesses: ['Integration speed', 'Memory-based formulas']
    });
  };

  return { questions, report, generate, finish };
};
