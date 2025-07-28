'use client';

import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-white/40 backdrop-blur-md w-full md:w-64 p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600">📊 Overview</a>
          <a href="#" className="hover:text-purple-600">💼 My Campaigns</a>
          <a href="#" className="hover:text-purple-600">💸 Contributions</a>
          <a href="#" className="hover:text-purple-600">⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back 👋</h1>
          <p className="text-gray-600">Here’s a quick summary of your activity:</p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h3 className="text-gray-700 font-semibold">Active Campaigns</h3>
              <p className="text-2xl font-bold text-purple-600">3</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h3 className="text-gray-700 font-semibold">Total Raised</h3>
              <p className="text-2xl font-bold text-green-600">120 SOL</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <h3 className="text-gray-700 font-semibold">Contributions Made</h3>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
