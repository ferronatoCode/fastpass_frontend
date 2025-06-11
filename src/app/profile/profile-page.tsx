'use client';

import { useEffect, useState } from 'react';
import { Avatar } from '@/components/ui/avatar';

type Profile = {
  balance: number;
  code: string;
};

export function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/profile', { credentials: 'include' })
      .then(res => res.json())
      .then(setProfile)
      .catch(() => setError('Erro ao carregar perfil'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Carregando...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 bg-black text-white">
      <div className="w-full max-w-sm bg-gray-900 rounded-xl border border-white p-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center">
            <Avatar className="w-24 h-24" />
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-300">SALDO</p>
          <p className="text-xl font-bold">{profile.balance} COINS</p>
        </div>

        <p className="italic text-gray-400">{`"${profile.code}"`}</p>

        <div className="mt-6 border-t pt-4 text-left">
          <h2 className="text-sm uppercase text-gray-400">Histórico</h2>
          <p className="text-sm text-gray-500">Em construção...</p>
        </div>
      </div>

      <div className="w-full max-w-sm flex justify-between mt-6">
        <button className="bg-white text-black rounded-full w-10 h-10 text-xl font-bold">{'<'}</button>
        <button className="bg-white text-black rounded-full w-10 h-10 text-xl font-bold">$</button>
      </div>
    </div>
  );
}