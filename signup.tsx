'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!form.email || !form.password || !form.name) {
      alert('⚠️ Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('⚠️ Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Simulate signup success
    localStorage.setItem('userEmail', form.email);
    localStorage.setItem('userName', form.name);
    router.push('/connect-wallet'); // Redirect to wallet connection
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] px-4 relative">
      {/* 🔄 Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 text-center">
            <div className="border-t-4 border-purple-500 rounded-full w-10 h-10 animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-200">Creating account...</p>
          </div>
        </div>
      )}

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400 mb-6">Sign up </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-purple-500/30 transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{' '}
          <span
            onClick={() => router.push('/login')}
            className="text-purple-400 cursor-pointer hover:underline font-medium"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
