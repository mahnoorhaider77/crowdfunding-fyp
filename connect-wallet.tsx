'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectWalletPage() {
  const { publicKey } = useWallet();
  const [walletAddress, setWalletAddress] = useState('');
  const [redirected, setRedirected] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // ✅ For hydration fix
  const router = useRouter();

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Redirect if wallet connects
  useEffect(() => {
    if (publicKey && !redirected) {
      const address = publicKey.toBase58();
      setWalletAddress(address);
      localStorage.setItem('walletAddress', address);
      setRedirected(true);
      router.push('/kyc');
    }
  }, [publicKey, redirected, router]);

  // ❗ Render nothing until mounted to avoid SSR mismatch
  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Connect Your Wallet</h2>
        <p className="text-gray-400 mb-6">
          Connect your Phantom wallet to start investing, or skip for now.
        </p>

        {/* Wallet Connect Button */}
        <div className="mb-4 flex justify-center">
          <WalletMultiButton className="!rounded-xl !px-6 !py-3 !bg-gradient-to-r !from-purple-500 !to-blue-500 !text-white !font-semibold hover:!from-purple-600 hover:!to-blue-600 transition !shadow-lg !hover:shadow-purple-500/30" />
        </div>

        {/* Show connected wallet */}
        {walletAddress && (
          <p className="text-sm text-purple-300 mt-3 font-mono break-all">
            Connected wallet: {walletAddress}
          </p>
        )}

        {/* Skip Button */}
        <button
          onClick={() => router.push('/kyc')}
          className="mt-6 w-full py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-purple-500/30 transition"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}
