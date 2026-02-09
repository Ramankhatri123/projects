import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase.js';

/**
 * Document upload hook with client-side hashing and duplicate prevention.
 */
export const useUpload = () => {
  const hashFile = async (file) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  };

  const uploadDocument = async ({ file, meta, typedText }) => {
    const hash = file ? await hashFile(file) : await hashFile(new Blob([typedText]));
    const q = query(collection(db, 'documents'), where('hash', '==', hash));
    const existing = await getDocs(q);
    if (!existing.empty) {
      return { status: 'duplicate', hash };
    }

    let storagePath = null;
    if (file) {
      storagePath = `documents/${hash}-${file.name}`;
      const storageRef = ref(storage, storagePath);
      await uploadBytes(storageRef, file);
    }

    await addDoc(collection(db, 'documents'), {
      ...meta,
      hash,
      storagePath,
      typedText: typedText || null,
      createdAt: new Date().toISOString()
    });

    return { status: 'uploaded', hash };
  };

  return { uploadDocument };
};
