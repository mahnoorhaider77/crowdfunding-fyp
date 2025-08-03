'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    if (!validateEmail(email)) {
      alert('⚠️ Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
    if (!password) {
      alert('⚠️ Password is required.');
      setIsLoading(false);
      return;
    }

    localStorage.setItem('userEmail', email);
    router.push('/investor-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] p-4 relative">
      {/* 🔄 Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 text-center">
            <div className="border-t-4 border-purple-500 rounded-full w-10 h-10 animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-200">Logging in, please wait...</p>
          </div>
        </div>
      )}

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-6">Login to your account</p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
        >
          Login with Email
        </button>

        {/* Sign Up Redirect */}
        <p className="text-sm text-center text-gray-400 mt-4">
          Don’t have an account?{' '}
          <span
            onClick={() => router.push('/signup')}
            className="text-purple-400 cursor-pointer hover:underline font-medium"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
