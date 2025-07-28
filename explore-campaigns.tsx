'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const mockCampaigns = [
  {
    title: 'Build a Decentralized Voting App',
    description: 'Let’s create a secure and transparent voting system using Solana.',
    goal: '10',
    imageUrl: 'https://source.unsplash.com/random/800x400?blockchain',
  },
  {
    title: 'Plant Trees Using Crypto',
    description: 'Support tree planting globally through crypto donations.',
    goal: '5',
    imageUrl: 'https://source.unsplash.com/random/800x400?forest',
  },
];

const ExploreCampaigns = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] to-[#f3f4f6] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Explore Campaigns</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCampaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 duration-300"
            >
              <img src={campaign.imageUrl} alt={campaign.title} className="w-full h-56 object-cover rounded-t-2xl" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{campaign.title}</h2>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                <p className="text-indigo-600 font-semibold"> Goal: {campaign.goal} SOL</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCampaigns;
