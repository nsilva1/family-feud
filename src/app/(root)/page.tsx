'use client'

import { typography } from '../../lib/styles'
import { useAppContext } from "../../context/AppContext";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const TeamSetupPage = () => {
  const { teamAName, teamBName, setTeamName } = useAppContext();

  const [teamA, setTeamA] = useState('')
  const [teamB, setTeamB] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    if(teamA === '' || teamB === ''){
      toast.warning('Please enter team names')
      return;
    }

    setTeamName('A', teamA);
    setTeamName('B', teamB);

    // setTeamAName(teamA)
    // setTeamBName(teamB)

    console.log(teamAName)
    console.log(teamBName)

    router.push('/game')
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className={`text-center ${typography.title}`}>Welcome to Family Feud</h1>
        <h2 className={`text-center ${typography.subtitle}`}>Team Setup</h2>
        <div className='mx-auto'>
          <form className="space-y-8 font-outfit" onSubmit={handleSubmit}>
              <div className='flex gap-10'>
                <div className="flex flex-col gap-5">
                  <label htmlFor="teamAName" className=''>Team A Name:</label>
                  <input type="text" value={teamA} onChange={(e) => setTeamA(e.target.value)} className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="teamBName">Team B Name:</label>
                  <input type="text" value={teamB} onChange={(e) => setTeamB(e.target.value)} className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" />
                </div>
              </div>
              <div className='flex justify-center flex-1'>
                <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full">Start Game</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamSetupPage
