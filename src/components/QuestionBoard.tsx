import { AnswerSlot } from "./AnswerSlot";

export const QuestionBoard = ({
  question,
  revealedAnswers,
  revealAnswer,
}: {
  question: {
    question: string;
    answers: { answer: string; points: number }[];
  };
  revealedAnswers: boolean[];
  revealAnswer: (index: number) => void;
}) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
    <div className="space-y-2">
      {revealedAnswers.map((revealed, i) => (
        <button key={i} onClick={() => revealAnswer(i)}>
          <AnswerSlot
            answer={{ answer: question.answers[i].answer, points: question.answers[i].points }}
            revealed={revealed}
            index={i}
          />
        </button>
      ))}
    </div>
  </div>
);
