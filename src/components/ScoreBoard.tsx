'use client'

import { useAppContext } from "../context/AppContext";

export const ScoreBoard = () => {
    const { teamAName, teamBName, teamAScore, teamBScore } = useAppContext();

    return (
        <div className="flex justify-around text-2xl my-4">
          <div className="text-blue-700">{teamAName}: {teamAScore}</div>
          <div className="text-green-700">{teamBName}: {teamBScore}</div>
        </div>
      );
  }
  