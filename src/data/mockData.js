export const mockDocuments = [
  {
    id: 'doc-1',
    title: 'Thermodynamics Notes',
    subject: 'Physics',
    type: 'Notes',
    uploader: 'uid-241',
    rating: 4.6,
    tags: ['entropy', 'systems']
  },
  {
    id: 'doc-2',
    title: 'MST Sample Paper 2023',
    subject: 'Mathematics',
    type: 'MST',
    uploader: 'uid-512',
    rating: 4.2,
    tags: ['calculus', 'algebra']
  },
  {
    id: 'doc-3',
    title: 'PYQ - Data Structures',
    subject: 'Computer Science',
    type: 'PYQ',
    uploader: 'uid-874',
    rating: 4.9,
    tags: ['trees', 'graphs']
  }
];

export const mockFriends = [
  { id: 'uid-241', name: 'Aarav', status: 'online' },
  { id: 'uid-512', name: 'Mira', status: 'offline' },
  { id: 'uid-874', name: 'Chen', status: 'online' }
];

export const mockQuestions = [
  'Explain the second law of thermodynamics with an example.',
  'Solve the integral \u222b x^2 e^x dx.',
  'Describe the differences between BFS and DFS.'
];
