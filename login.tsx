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
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-4 relative">
      {/* 🔄 Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="border-t-4 border-purple-500 border-solid rounded-full w-8 h-8 animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-700">Logging in, please wait...</p>
          </div>
        </div>
      )}

      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <p className="text-center text-gray-600 mb-6">Use your email and password to sign in</p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
        >
          Login with Email
        </button>

        {/* Description */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Use a valid email and password to sign in
        </p>

        {/* Sign Up Redirect */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <span
            onClick={() => router.push('/signup')}
            className="text-purple-600 cursor-pointer hover:underline font-medium"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
