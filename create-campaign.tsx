'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateCampaign = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
    goal: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campaign Data:', form);
    router.push('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f3f4f6] px-4 py-12">
      <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Create a New Campaign</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Campaign Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
            required
          />
          <input
            type="number"
            name="goal"
            placeholder="Goal (SOL)"
            value={form.goal}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL (optional)"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300"
          >
            Submit Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
