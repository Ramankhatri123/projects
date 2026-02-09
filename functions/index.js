const functions = require('firebase-functions');
const admin = require('firebase-admin');
const OpenAI = require('openai');

/**
 * Firebase Functions entry with duplicate detection and AI mock test generation.
 */
admin.initializeApp();

const db = admin.firestore();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'placeholder-key' });

exports.detectDuplicate = functions.https.onCall(async (data) => {
  const { hash } = data;
  const snapshot = await db.collection('documents').where('hash', '==', hash).get();
  return { duplicate: !snapshot.empty };
});

exports.generateMockTest = functions.https.onCall(async (data) => {
  const { syllabus, documents } = data;
  const prompt = `Generate 5 mock test questions based on syllabus ${syllabus} and docs ${documents}.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }]
    });
    return { questions: response.choices[0].message.content };
  } catch (error) {
    return { questions: 'Placeholder: Unable to generate AI test.' };
  }
});

exports.onFriendRequest = functions.firestore
  .document('friendRequests/{requestId}')
  .onCreate(async (snap) => {
    const request = snap.data();
    await db.collection('notifications').add({
      userId: request.targetId,
      message: 'New friend request',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });
