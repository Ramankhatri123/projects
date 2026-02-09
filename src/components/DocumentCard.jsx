import React from 'react';

/**
 * Document card with hover expansion and metadata.
 */
const DocumentCard = ({ doc }) => (
  <div className="glass card-hover rounded-2xl p-4 group">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold group-hover:text-accent-400 transition">{doc.title}</h3>
      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{doc.type}</span>
    </div>
    <p className="text-sm text-white/70 mt-2">Subject: {doc.subject}</p>
    <p className="text-xs text-white/50 mt-1">Uploader: {doc.uploader}</p>
    <div className="flex gap-2 mt-3 flex-wrap">
      {doc.tags.map((tag) => (
        <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-xs text-emerald-300">Rating {doc.rating}</span>
      <button type="button" className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">Share</button>
    </div>
  </div>
);

export default DocumentCard;
