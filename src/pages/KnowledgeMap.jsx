import React from 'react';
import KnowledgeMapGraph from '../components/KnowledgeMapGraph.jsx';

/**
 * Knowledge map visualization page.
 */
const KnowledgeMapPage = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold">Knowledge Map</h2>
      <p className="text-sm text-white/60">Interactive graph of subjects, notes, and AI tests.</p>
    </div>
    <KnowledgeMapGraph />
  </div>
);

export default KnowledgeMapPage;
