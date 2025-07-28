'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectWalletPage() {
  const { publicKey } = useWallet();
  const [walletAddress, setWalletAddress] = useState('');
  const [redirected, setRedirected] = useState(false);
  const router = useRouter();

  // ✅ When wallet connects, save it and redirect to /kyc
  useEffect(() => {
    if (publicKey && !redirected) {
      const address = publicKey.toBase58();
      setWalletAddress(address);
      localStorage.setItem('walletAddress', address);
      setRedirected(true);
      router.push('/kyc');
    }
  }, [publicKey, redirected, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white/40 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect Your Wallet</h2>
        <p className="text-gray-600 mb-6">
          You can connect your Phantom wallet now or skip this step.
        </p>

        <div className="mb-4">
          <WalletMultiButton className="w-full !justify-center !rounded-xl !bg-purple-600 hover:!bg-purple-700 !text-white !font-semibold" />
        </div>

        {walletAddress && (
          <p className="text-sm text-gray-700 mt-2">
            Connected wallet: <span className="font-mono">{walletAddress}</span>
          </p>
        )}

        <button
          onClick={() => router.push('/kyc')}
          className="mt-6 w-full py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-md transition"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}
