import { motion } from "framer-motion";

export const AnswerSlot = ({ answer, revealed, index }: {
  answer: { answer: string; points: number };
  revealed: boolean;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-blue-100 p-4 rounded-md text-lg text-center my-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ delay: 0.2 * index }}
    >
      {revealed ? `${answer.answer} - ${answer.points}` : "--------"}
    </motion.div>
  );
};
