'use client';

import { useState, useEffect } from "react";
import { questions } from "../../lib/questions";
import { ScoreBoard } from "../../components/ScoreBoard";
import { Strikes } from "../../components/Strikes";
import { AnswerSlot } from "../../components/AnswerSlot";
import { useAppContext } from "../../context/AppContext";
import StrikesModal from "../../components/StrikesModal";

const GamePage = () => {
  const { teamAName, teamBName, setTeamScore } = useAppContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(
    Array(questions[0].answers.length).fill(false)
  );
  const [strikes, setStrikes] = useState(0);
  const [currentTeam, setCurrentTeam] = useState<string>(teamAName);
  const [answerInput, setAnswerInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (strikes === 3) {
      setIsModalOpen(true);
    }
  }, [strikes]);

  const revealAnswer = (i: number) => {
    if (!revealed[i]) {
      setRevealed((prev) => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      });
      const points = currentQuestion.answers[i].points;
      setTeamScore(currentTeam, points)

    // } else {
    //   setStrikes((s) => Math.min(3, s + 1));
    // }
    }
  };

  const checkAnswer = () => {
    const input = answerInput.trim().toLowerCase();
    const answerIndex = currentQuestion.answers.findIndex(ans =>
      ans.answer.toLowerCase().includes(input)
    );

    if (answerIndex !== -1) {
      revealAnswer(answerIndex);
      setAnswerInput(""); // Clear input after correct answer
    } else {
      setStrikes(strikes + 1);
    }
  };

  const nextQuestion = () => {
    const nextIndex = (currentIndex + 1) % questions.length;
    setCurrentIndex(nextIndex);
    setRevealed(Array(questions[nextIndex].answers.length).fill(false));
    setStrikes(0);
  };

  const switchTeam = () => {
    setCurrentTeam(currentTeam === teamAName ? teamBName : teamAName);
    setStrikes(0);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto text-center font-outfit">
      <h1 className="text-4xl font-bold mb-6">Church Family Feud</h1>
      <ScoreBoard />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-400">
          {currentTeam}'s Turn
        </h2>
        <Strikes count={strikes} />
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">{currentQuestion.question}</h3>
        <div className="grid grid-cols-2 gap-8">
        {currentQuestion.answers.map((ans, i) => (
          <button key={i} onClick={() => revealAnswer(i)} className="col-span-1 block w-full bg-gray-200 p-2 rounded-md dark:bg-gray-800 cursor-pointer">
            <AnswerSlot answer={ans} revealed={revealed[i]} index={i} />
          </button>
        ))}
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          placeholder="Enter answer"
          className="p-2 border rounded mr-2"
        />
        <button onClick={checkAnswer} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Answer
        </button>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={switchTeam}
        >
          Switch Team
        </button>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>

      <StrikesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSwitchTeam={switchTeam}
      />
    </div>
  );
};

export default GamePage
