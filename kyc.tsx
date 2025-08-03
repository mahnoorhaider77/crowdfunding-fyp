'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';

export default function KYCPage() {
  const router = useRouter();
  const { publicKey } = useWallet();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    walletAddress: '',
    country: '',
    phone: '',
    dob: '',
    cnic: '',
    passport: '',
    issuingCountry: '',
    address: '',
    occupation: '',
    sourceOfFunds: '',
    pep: 'no',
    taxCountry: '',
    tin: '',
    projectName: '',
    projectCategory: '',
    projectDescription: '',
    website: '',
    payoutWallet: '',
    fundingGoal: '',
    currency: '',
    socialLinks: '',
  });

  useEffect(() => {
    if (publicKey) {
      setFormData((prev) => ({
        ...prev,
        walletAddress: publicKey.toBase58(),
      }));
    }
  }, [publicKey]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, send form data to backend
    router.push('/select-role');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 w-full max-w-5xl text-white max-h-[85vh] overflow-y-auto"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-10">KYC Verification</h1>

        {/* === Personal Info === */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" name="fullName" placeholder="Full Name" className="input-style-dark" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="input-style-dark" onChange={handleChange} required />
            <input type="text" name="walletAddress" value={formData.walletAddress} readOnly className="input-style-dark" />
            <input type="text" name="country" placeholder="Country of Residence" className="input-style-dark" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" className="input-style-dark" onChange={handleChange} />
            <input type="date" name="dob" className="input-style-dark" onChange={handleChange} />
          </div>
        </section>

        {/* === Identity Verification === */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Identity Verification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" name="cnic" placeholder="CNIC / National ID Number" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="passport" placeholder="Passport Number" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="issuingCountry" placeholder="Issuing Country" className="input-style-dark" onChange={handleChange} />
          </div>
        </section>

        {/* === Address & Tax === */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Address & Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <textarea name="address" placeholder="Residential Address" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="occupation" placeholder="Occupation / Profession" className="input-style-dark" onChange={handleChange} />
            <select name="sourceOfFunds" className="input-style-dark" onChange={handleChange}>
              <option value="">Source of Funds</option>
              <option>Salary</option>
              <option>Business</option>
              <option>Investments</option>
              <option>Other</option>
            </select>
            <select name="pep" className="input-style-dark" onChange={handleChange}>
              <option value="no">Politically Exposed Person? No</option>
              <option value="yes">Yes</option>
            </select>
            <input type="text" name="taxCountry" placeholder="Tax Residency Country" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="tin" placeholder="Tax Identification Number (optional)" className="input-style-dark" onChange={handleChange} />
          </div>
        </section>

        {/* === Project Information === */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Project Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" name="projectName" placeholder="Project / Company Name" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="projectCategory" placeholder="Category (Tech, Art, etc.)" className="input-style-dark" onChange={handleChange} />
            <textarea name="projectDescription" placeholder="Project Description" className="input-style-dark" onChange={handleChange} />
            <input type="url" name="website" placeholder="Website / Demo Link" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="payoutWallet" placeholder="Crypto Wallet for Payout" className="input-style-dark" onChange={handleChange} />
            <input type="number" name="fundingGoal" placeholder="Funding Goal (e.g. 5000 USDC)" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="currency" placeholder="Preferred Currency (SOL, USDC)" className="input-style-dark" onChange={handleChange} />
            <input type="text" name="socialLinks" placeholder="Social Media Links" className="input-style-dark" onChange={handleChange} />
          </div>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="sticky bottom-4 mt-6 w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-purple-500/30 transition"
        >
          Submit for Verification
        </button>
      </form>

      <style jsx global>{`
        .input-style-dark {
          @apply w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition;
        }
      `}</style>
    </div>
  );
}
