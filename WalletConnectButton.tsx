'use client';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const WalletConnectButton = () => {
  return (
    <div className="p-4 text-center">
      <WalletMultiButton />
    </div>
  );
};
