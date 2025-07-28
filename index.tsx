'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-6">
      <div className="text-center max-w-lg space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Decentralized Crowdfunding Platform
        </h1>
        <p className="text-lg text-gray-300">
          Connect your wallet and begin your journey as an Investor, Creator, or Admin.
        </p>
        <div className="flex justify-center">
          <WalletMultiButton className="bg-indigo-600 hover:bg-indigo-700 transition rounded-lg px-6 py-3 text-white font-medium" />
        </div>
      </div>
    </div>
  );
}
