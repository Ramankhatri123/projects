import React, { useState } from 'react';
import { mockFriends } from '../data/mockData.js';
import { useSettings } from '../hooks/useSettings.js';

/**
 * Real-time chat interface placeholder with AI document-aware features.
 */
const Chat = () => {
  const { settings } = useSettings();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'uid-241', text: 'Can you share your MST notes?', reaction: '✨' },
    { id: 2, sender: 'me', text: 'Sure! Uploading now.', reaction: '✅' }
  ]);
  const [input, setInput] = useState('');

  const bubbleMap = {
    red: 'bg-rose-500',
    green: 'bg-emerald-500',
    blue: 'bg-accent-500'
  };

  const fontMap = {
    bold: 'font-semibold',
    italic: 'italic',
    normal: 'font-normal'
  };

  const sendMessage = () => {
    if (!input) return;
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'me', text: input }]);
    setInput('');
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="glass rounded-2xl p-4 space-y-4">
        <h3 className="text-lg font-semibold">Friends</h3>
        {mockFriends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between bg-white/10 px-3 py-2 rounded-xl">
            <div>
              <p className="text-sm">{friend.name}</p>
              <p className="text-xs text-white/50">{friend.id}</p>
            </div>
            <span className={`text-xs ${friend.status === 'online' ? 'text-emerald-300' : 'text-white/40'}`}>
              {friend.status}
            </span>
          </div>
        ))}
        <button type="button" className="w-full bg-accent-500 rounded-xl py-2 text-sm">Start Group Chat</button>
      </aside>
      <div className="glass rounded-2xl p-6 flex flex-col h-[520px]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Study Lounge</h3>
            <p className="text-xs text-white/50">Pinned: Thermodynamics notes</p>
          </div>
          <button type="button" className="text-xs bg-white/10 px-3 py-1 rounded-full">Focus Mode</button>
        </div>
        <div className="flex-1 mt-4 space-y-3 overflow-y-auto pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-lg rounded-2xl px-4 py-3 ${
                message.sender === 'me'
                  ? `${bubbleMap[settings.chatBubble] || 'bg-accent-500'} ml-auto text-white`
                  : 'bg-white/10'
              }`}
            >
              <p className={`text-sm ${fontMap[settings.chatFont] || 'font-normal'}`}>{message.text}</p>
              {message.reaction && (
                <p className="text-xs mt-1 opacity-70">Reaction: {message.reaction}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Drag a document or type a message..."
            className="flex-1 rounded-xl bg-black/40 px-4 py-3"
          />
          <button type="button" onClick={sendMessage} className="bg-accent-500 px-4 rounded-xl">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
