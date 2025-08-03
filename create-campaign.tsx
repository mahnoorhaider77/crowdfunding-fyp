'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Rocket, ImagePlus, Coins } from 'lucide-react';

const CreateCampaign = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
    goal: '',
    imageUrl: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign Data:', form);
    router.push('/creator-dashboard'); // Redirect to dashboard after creation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] px-4 py-12">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-white">
        <div className="flex items-center justify-center mb-6 gap-2">
          <Rocket className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold">Create a New Campaign</h1>
        </div>
        <p className="text-gray-400 text-center mb-8">
          Launch your project and start raising funds on Solana
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campaign Title */}
          <input
            type="text"
            name="title"
            placeholder="Campaign Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 
                       border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50
                       outline-none transition"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 
                       border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50
                       outline-none transition"
            required
          />

          {/* Goal */}
          <div className="flex items-center gap-3">
            <Coins className="w-5 h-5 text-yellow-400" />
            <input
              type="number"
              name="goal"
              placeholder="Funding Goal (SOL)"
              value={form.goal}
              onChange={handleChange}
              className="flex-1 p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 
                         border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50
                         outline-none transition"
              required
            />
          </div>

          {/* Image URL */}
          <div className="flex items-center gap-3">
            <ImagePlus className="w-5 h-5 text-pink-400" />
            <input
              type="url"
              name="imageUrl"
              placeholder="Campaign Image URL (Optional)"
              value={form.imageUrl}
              onChange={handleChange}
              className="flex-1 p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 
                         border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50
                         outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-xl 
                       bg-gradient-to-r from-purple-500 to-blue-500
                       hover:from-purple-600 hover:to-blue-600
                       shadow-lg hover:shadow-purple-500/30 transition"
          >
            🚀 Launch Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
