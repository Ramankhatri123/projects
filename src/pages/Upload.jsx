import React, { useState } from 'react';
import { useUpload } from '../hooks/useUpload.js';

/**
 * Document upload page with duplicate detection feedback.
 */
const Upload = () => {
  const { uploadDocument } = useUpload();
  const [file, setFile] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Uploading...');
    const result = await uploadDocument({
      file,
      typedText,
      meta: {
        title: file?.name || 'Typed Notes',
        subject: 'Physics',
        type: file ? 'PDF' : 'Typed',
        uploader: 'local-user'
      }
    });

    if (result.status === 'duplicate') {
      setStatus('Duplicate detected. Upload skipped.');
    } else {
      setStatus('Upload complete and indexed.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Upload Documents</h2>
        <p className="text-sm text-white/60">PDFs, images, and typed text with auto duplicate detection.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold">File Upload</h3>
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
            className="w-full rounded-xl bg-black/40 px-4 py-3"
          />
          <button type="submit" className="px-4 py-2 rounded-full bg-accent-500">Upload File</button>
        </div>
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold">Typed Notes</h3>
          <textarea
            value={typedText}
            onChange={(event) => setTypedText(event.target.value)}
            className="w-full h-40 rounded-xl bg-black/40 px-4 py-3"
            placeholder="Paste or type notes here..."
          />
          <button type="submit" className="px-4 py-2 rounded-full bg-accent-500">Save Notes</button>
        </div>
      </form>
      {status && (
        <div className="glass rounded-2xl p-4 text-sm text-white/70">
          {status}
        </div>
      )}
    </div>
  );
};

export default Upload;
