import React, { useState } from 'react';

/**
 * Feedback panel for document ratings and comments.
 */
const FeedbackPanel = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    setSubmitted(true);
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold">Document Feedback</h3>
      <p className="text-sm text-white/60">Rate and comment on shared documents.</p>
      <div className="mt-4 flex items-center gap-3">
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          className="flex-1"
        />
        <span className="text-sm">{rating} / 5</span>
      </div>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className="mt-4 w-full rounded-xl bg-black/40 px-4 py-3"
        placeholder="Leave constructive feedback..."
      />
      <button type="button" onClick={submit} className="mt-4 px-4 py-2 rounded-full bg-accent-500">
        Submit Feedback
      </button>
      {submitted && <p className="text-xs text-emerald-300 mt-3">Feedback recorded.</p>}
    </div>
  );
};

export default FeedbackPanel;
