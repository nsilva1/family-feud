'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    teamAName: string;
    teamBName: string;
    setTeamAName: (name: string) => void;
    setTeamBName: (name: string) => void;
    teamAScore: number;
    teamBScore: number;
    setTeamAScore: (score: number) => void;
    setTeamBScore: (score: number) => void;
    setTeamScore: (team: string, score: number) => void;
    setTeamName: (team: string, value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [teamAName, setTeamAName] = useState('');
    const [teamBName, setTeamBName] = useState('');
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const setTeamScore = (team: string, score: number) => {
        if (team === teamAName) {
          setTeamAScore(prevScore => prevScore + score);
        } else {
          setTeamBScore(prevScore => prevScore + score);
        }
    };

    const setTeamName = (team:string, value:string) => {
        if (team === 'A') {
          setTeamAName(prev => value);
        } else {
          setTeamBName(prev => value);
        }
    }

  return (
    <AppContext.Provider value={{ teamAName, teamBName, setTeamAName, setTeamBName, teamAScore, teamBScore, setTeamAScore, setTeamBScore, setTeamScore, setTeamName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
