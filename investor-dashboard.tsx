'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { Wallet, Bell, Search, LineChart, Rocket, TrendingUp, Briefcase, Clock } from 'lucide-react';

const Dashboard = () => {
  const { publicKey } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] text-white flex flex-col">
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Rocket className="text-purple-400" size={32} />
          <h1 className="text-2xl font-bold">Investor Dashboard</h1>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-xl mx-6">
          <div className="flex items-center w-full bg-white/10 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-300 mr-2" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
            <Bell size={20} />
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition">
            {publicKey ? `${publicKey.toBase58().slice(0,4)}...${publicKey.toBase58().slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Invested", value: "1,245 SOL", icon: LineChart, color: "from-purple-500 to-blue-500" },
            { title: "Active Campaigns", value: "12", icon: Rocket, color: "from-blue-500 to-cyan-400" },
            { title: "Portfolio Value", value: "3,540 SOL", icon: TrendingUp, color: "from-green-500 to-emerald-400" },
            { title: "Backed Startups", value: "8", icon: Briefcase, color: "from-pink-500 to-purple-500" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${stat.color} backdrop-blur-md cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-3">
                <stat.icon size={28} />
                <h3 className="text-lg font-semibold">{stat.title}</h3>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Campaign Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { name: "AI Startup", category: "AI/ML", progress: 70, goal: "500 SOL", backers: 32, time: "10d left" },
              { name: "Green Energy", category: "Green Tech", progress: 45, goal: "800 SOL", backers: 54, time: "22d left" },
              { name: "Fintech App", category: "Fintech", progress: 90, goal: "300 SOL", backers: 12, time: "3d left" }
            ].map((campaign, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
              >
                <div className="h-32 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-4"></div>
                <h3 className="text-xl font-semibold">{campaign.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{campaign.category}</p>
                
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${campaign.progress}%` }}></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{campaign.goal}</span>
                  <span>{campaign.backers} backers</span>
                </div>
                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                  <Clock size={12} /> {campaign.time}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Portfolio Overview</h2>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
          >
            <div className="h-48 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-xl flex items-center justify-center text-gray-500">
              Graph Placeholder (Portfolio Performance)
            </div>
          </motion.div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              "Invested 50 SOL in AI Startup",
              "Received 2 SOL dividend from Green Energy",
              "Backed Fintech App with 30 SOL"
            ].map((activity, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10"
              >
                {activity}
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
