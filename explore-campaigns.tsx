'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Coins } from 'lucide-react';

const mockCampaigns = [
  {
    title: 'Build a Decentralized Voting App',
    description: 'Let’s create a secure and transparent voting system using Solana.',
    goal: 10,
    raised: 6,
    backers: 120,
    imageUrl: 'https://source.unsplash.com/random/800x400?blockchain',
  },
  {
    title: 'Plant Trees Using Crypto',
    description: 'Support tree planting globally through crypto donations.',
    goal: 5,
    raised: 2,
    backers: 60,
    imageUrl: 'https://source.unsplash.com/random/800x400?forest',
  },
  {
    title: 'AI-Powered Healthcare Assistant',
    description: 'Invest in AI-driven healthcare solutions for early disease detection.',
    goal: 15,
    raised: 9,
    backers: 210,
    imageUrl: 'https://source.unsplash.com/random/800x400?healthcare',
  },
];

const ExploreCampaigns = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          🌐 Explore Investment Campaigns
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover blockchain-powered startups, green tech, and AI-driven innovations
          to support and grow your crypto portfolio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCampaigns.map((campaign, index) => {
            const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);

            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg border border-white/10 
                           rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 
                           hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 h-2 rounded-full mb-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{campaign.raised} / {campaign.goal} SOL</span>
                    <span>{campaign.backers} backers</span>
                  </div>

                  <button
                    onClick={() => router.push('/investor-dashboard')}
                    className="w-full py-2 mt-2 flex items-center justify-center gap-2 
                               bg-gradient-to-r from-purple-500 to-blue-500 
                               hover:from-purple-600 hover:to-blue-600 
                               font-semibold text-white rounded-xl shadow-md transition"
                  >
                    <Coins className="w-4 h-4" /> Invest Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => router.push('/dashboard')}
            className="px-8 py-3 flex items-center gap-2 
                       bg-gradient-to-r from-purple-500 to-blue-500 
                       hover:from-purple-600 hover:to-blue-600 
                       font-semibold text-white rounded-xl shadow-lg transition"
          >
            Go to Dashboard <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCampaigns;
