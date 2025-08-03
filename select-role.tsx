'use client';

import { useRouter } from 'next/navigation';
import { Briefcase, Users } from 'lucide-react';

export default function SelectRole() {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0F2D] to-[#1A1F4A] px-4 py-10">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Select Your Role</h1>
        <p className="text-gray-300 mb-8">Continue as a Project Creator or an Investor</p>

        <div className="flex flex-col gap-5">
          {/* Project Creator Button */}
          <button
            onClick={() => handleRoleSelect('creator')}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 font-semibold rounded-xl
                       bg-gradient-to-r from-purple-500 to-blue-500
                       hover:from-purple-600 hover:to-blue-600
                       shadow-lg hover:shadow-purple-500/30 transition"
          >
            <Briefcase className="w-5 h-5" />
            I’m a Project Creator
          </button>

          {/* Investor Button */}
          <button
            onClick={() => handleRoleSelect('donor')}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 font-semibold rounded-xl
                       bg-gradient-to-r from-pink-500 to-purple-500
                       hover:from-pink-600 hover:to-purple-600
                       shadow-lg hover:shadow-pink-500/30 transition"
          >
            <Users className="w-5 h-5" />
            I’m an Investor
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          You can always change your role later in settings.
        </p>
      </div>
    </div>
  );
}
