# ScholarSphere

ScholarSphere is a public academic platform for uploading, sharing, and interacting with academic content. It provides AI-powered mock tests, real-time chat, friend management, and a power-user terminal for customization.

## Features
- Firebase Authentication with email/password
- Firestore collections for users, settings, documents, chats, tests, and feedback
- Duplicate detection using SHA-256 hashing
- AI mock test generation (placeholder OpenAI integration)
- Real-time chat UI (Firestore-backed)
- Knowledge map visualization with React Flow
- Terminal-style customization with live settings updates

## Tech Stack
- React + Vite + Tailwind CSS
- Firebase Auth, Firestore, Storage, Functions

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root:
   ```bash
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender
   VITE_FIREBASE_APP_ID=your_app_id
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Firebase Functions
From the `functions` folder:
```bash
npm install
firebase deploy --only functions
```

## Notes
- AI integrations are placeholders; replace with your OpenAI key in Firebase Functions.
- Security rules in `firestore.rules` and `storage.rules` restrict access to authenticated users.

## Dummy Data
The UI uses mock documents, friends, and AI questions in `src/data/mockData.js` for initial scaffolding.
