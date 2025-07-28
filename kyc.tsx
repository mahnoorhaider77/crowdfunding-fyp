'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';

const KYCPage = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, send form data to backend here
    router.push('/select-role');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-4xl overflow-y-auto"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">KYC Verification</h1>

        {/* Personal Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700">Full Name</label>
              <input type="text" name="fullName" className="input-style" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Email</label>
              <input type="email" name="email" className="input-style" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Wallet Address</label>
              <input type="text" name="walletAddress" value={formData.walletAddress} readOnly className="input-style" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Country of Residence</label>
              <input type="text" name="country" className="input-style" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Phone Number</label>
              <input type="tel" name="phone" className="input-style" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Date of Birth</label>
              <input type="date" name="dob" className="input-style" onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* Identity Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Identity Verification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="cnic" placeholder="CNIC/National ID Number" className="input-style" onChange={handleChange} />
            <input type="text" name="passport" placeholder="Passport Number" className="input-style" onChange={handleChange} />
            <input type="text" name="issuingCountry" placeholder="Issuing Country" className="input-style" onChange={handleChange} />
          </div>
        </section>

        {/* Address Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Address & Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea name="address" placeholder="Residential Address" className="input-style" onChange={handleChange} />
            <input type="text" name="occupation" placeholder="Occupation / Profession" className="input-style" onChange={handleChange} />
            <select name="sourceOfFunds" className="input-style" onChange={handleChange}>
              <option value="">Source of Funds</option>
              <option>Salary</option>
              <option>Business</option>
              <option>Investments</option>
              <option>Other</option>
            </select>
            <select name="pep" className="input-style" onChange={handleChange}>
              <option value="no">Politically Exposed Person? No</option>
              <option value="yes">Yes</option>
            </select>
            <input type="text" name="taxCountry" placeholder="Tax Residency Country" className="input-style" onChange={handleChange} />
            <input type="text" name="tin" placeholder="Tax Identification Number (optional)" className="input-style" onChange={handleChange} />
          </div>
        </section>

        {/* Project Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="projectName" placeholder="Project / Company Name" className="input-style" onChange={handleChange} />
            <input type="text" name="projectCategory" placeholder="Category (Tech, Art, etc.)" className="input-style" onChange={handleChange} />
            <textarea name="projectDescription" placeholder="Project Description" className="input-style" onChange={handleChange} />
            <input type="url" name="website" placeholder="Website / Demo Link" className="input-style" onChange={handleChange} />
            <input type="text" name="payoutWallet" placeholder="Crypto Wallet for Payout" className="input-style" onChange={handleChange} />
            <input type="number" name="fundingGoal" placeholder="Funding Goal (e.g. 5000 USDC)" className="input-style" onChange={handleChange} />
            <input type="text" name="currency" placeholder="Preferred Currency (SOL, USDC)" className="input-style" onChange={handleChange} />
            <input type="text" name="socialLinks" placeholder="Social Media Links" className="input-style" onChange={handleChange} />
          </div>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default KYCPage;
