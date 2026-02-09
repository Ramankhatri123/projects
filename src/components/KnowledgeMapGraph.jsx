import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

/**
 * Knowledge map visualization for subjects, topics, notes, and tests.
 */
const KnowledgeMapGraph = () => {
  const nodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Physics' }, type: 'input' },
    { id: '2', position: { x: 200, y: 80 }, data: { label: 'Thermo Notes' } },
    { id: '3', position: { x: -200, y: 80 }, data: { label: 'Optics Notes' } },
    { id: '4', position: { x: 200, y: 180 }, data: { label: 'AI Mock Test' } }
  ];
  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e2-4', source: '2', target: '4' }
  ];

  return (
    <div className="h-[420px] rounded-2xl overflow-hidden border border-white/10">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background color="#2B2E3B" />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default KnowledgeMapGraph;
