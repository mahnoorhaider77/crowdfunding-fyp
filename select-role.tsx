'use client';

import { useRouter } from 'next/navigation';

const SelectRole = () => {
  const router = useRouter();

  const handleRoleSelect = (role: string) => {
    localStorage.setItem('userRole', role);

    if (role === 'creator') {
      router.push('/create-campaign');
    } else if (role === 'donor') {
      router.push('/explore-campaigns');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f3f4f6] px-4">
      <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Role</h1>
        <p className="text-gray-600 mb-6">Continue as a donor or project creator</p>

        <div className="flex flex-col gap-5">
          <button
            onClick={() => handleRoleSelect('creator')}
            className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300"
          >
             I’m a Project Creator
          </button>

          <button
            onClick={() => handleRoleSelect('donor')}
            className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300"
          >
             I’m an Investor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
