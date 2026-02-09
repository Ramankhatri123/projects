import React, { useMemo, useState } from 'react';
import DocumentCard from '../components/DocumentCard.jsx';
import FeedbackPanel from '../components/FeedbackPanel.jsx';
import KnowledgeMapGraph from '../components/KnowledgeMapGraph.jsx';
import { mockDocuments } from '../data/mockData.js';
import { useSettings } from '../hooks/useSettings.js';

/**
 * Library page with filters, view modes, and document list.
 */
const Library = () => {
  const { settings } = useSettings();
  const [filters, setFilters] = useState({ subject: 'All', type: 'All', uploader: 'All' });

  const filteredDocs = useMemo(() => {
    return mockDocuments.filter((doc) => {
      const subjectMatch = filters.subject === 'All' || doc.subject === filters.subject;
      const typeMatch = filters.type === 'All' || doc.type === filters.type;
      const uploaderMatch = filters.uploader === 'All' || doc.uploader === filters.uploader;
      return subjectMatch && typeMatch && uploaderMatch;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Document Library</h2>
          <p className="text-sm text-white/60">Filter by subject, type, or uploader. Hover for AI previews.</p>
        </div>
        <div className="flex gap-3">
          {['All', 'Physics', 'Mathematics', 'Computer Science'].map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => setFilters((prev) => ({ ...prev, subject }))}
              className={`text-xs px-3 py-2 rounded-full ${
                filters.subject === subject ? 'bg-accent-500' : 'bg-white/10'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <p className="text-sm uppercase text-white/60">AI Insights</p>
          <p className="text-lg font-semibold">Knowledge Map & Smart Filters</p>
          <p className="text-sm text-white/60 mt-2">
            AI hover previews, duplicate detection, and instant sharing with your study group.
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="px-4 py-2 rounded-full bg-white/10">Upload</button>
          <button type="button" className="px-4 py-2 rounded-full bg-accent-500">Generate Test</button>
        </div>
      </div>

      {settings.libraryView === 'map' ? (
        <KnowledgeMapGraph />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredDocs.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}

      <FeedbackPanel />
    </div>
  );
};

export default Library;
