'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { Bell, Search, Rocket, TrendingUp, Users, BarChart3, Edit, Eye } from 'lucide-react';

const CreatorDashboard = () => {
  const { publicKey } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] text-white flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Rocket className="text-purple-400" size={32} />
          <h1 className="text-2xl font-bold">Creator Dashboard</h1>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-xl mx-6">
          <div className="flex items-center w-full bg-white/10 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-300 mr-2" />
            <input
              type="text"
              placeholder="Search my campaigns..."
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
            { title: "Total Raised", value: "2,450 SOL", icon: TrendingUp, color: "from-green-500 to-emerald-400" },
            { title: "Active Campaigns", value: "3", icon: Rocket, color: "from-purple-500 to-blue-500" },
            { title: "Total Backers", value: "120", icon: Users, color: "from-pink-500 to-purple-500" },
            { title: "Avg Progress", value: "68%", icon: BarChart3, color: "from-cyan-500 to-blue-500" }
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

        {/* My Campaigns */}
        <section>
          <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { name: "AI Startup", progress: 70, raised: "350 SOL", backers: 32 },
              { name: "Green Energy", progress: 45, raised: "360 SOL", backers: 54 },
              { name: "HealthTech App", progress: 90, raised: "270 SOL", backers: 12 }
            ].map((campaign, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
              >
                <div className="h-32 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-4"></div>
                <h3 className="text-xl font-semibold">{campaign.name}</h3>
                
                <div className="w-full bg-white/20 rounded-full h-2 my-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${campaign.progress}%` }}></div>
                </div>
                
                <p className="text-sm text-gray-300">{campaign.raised} raised · {campaign.backers} backers</p>

                <div className="flex gap-3 mt-3">
                  <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-1 text-sm transition">
                    <Eye size={14} /> View
                  </button>
                  <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center gap-1 text-sm transition">
                    <Edit size={14} /> Edit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Funding Analytics */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Funding Analytics</h2>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
          >
            <div className="h-48 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-xl flex items-center justify-center text-gray-500">
              Graph Placeholder (Funds Raised Over Time)
            </div>
          </motion.div>
        </section>

        {/* Recent Backer Activity */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Backer Activity</h2>
          <div className="space-y-4">
            {[
              "User1 backed AI Startup with 50 SOL",
              "User2 backed Green Energy with 10 SOL",
              "User3 backed HealthTech App with 30 SOL"
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

export default CreatorDashboard;
