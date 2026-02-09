import React from 'react';
import { mockFriends } from '../data/mockData.js';

/**
 * User profile page with friends, achievements, and settings snapshot.
 */
const Profile = () => (
  <div className="space-y-6">
    <div className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold">Student Profile</h2>
        <p className="text-sm text-white/60">Unique ID: uid-241</p>
        <p className="text-sm text-white/60 mt-2">XP: 1,280 · Streak: 6 days</p>
      </div>
      <button type="button" className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-accent-500">Share Profile</button>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Friends & Requests</h3>
        <div className="mt-4 space-y-3">
          {mockFriends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between bg-white/10 px-3 py-2 rounded-xl">
              <div>
                <p className="text-sm">{friend.name}</p>
                <p className="text-xs text-white/50">{friend.id}</p>
              </div>
              <button type="button" className="text-xs bg-white/10 px-3 py-1 rounded-full">Message</button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 rounded-xl bg-black/40 px-3 py-2"
            placeholder="Search user ID"
          />
          <button type="button" className="px-3 py-2 rounded-xl bg-accent-500 text-sm">Send Request</button>
        </div>
      </div>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Badges</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {['AI Navigator', 'Weekly Streak', 'Top Contributor', 'Mock Test Master'].map((badge) => (
            <div key={badge} className="bg-white/10 rounded-xl px-4 py-3">
              <p className="text-sm">{badge}</p>
              <p className="text-xs text-white/50">Unlocked</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
