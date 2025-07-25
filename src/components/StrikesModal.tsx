import React from 'react';

interface StrikesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchTeam: () => void;
}

const StrikesModal = ({ isOpen, onClose, onSwitchTeam }: StrikesModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center">
        <h2 className="text-xl font-bold mb-4">Maximum Strikes Reached!</h2>
        <p className="mb-4">The maximum number of strikes (3) has been reached for the current team.</p>
        <button
          onClick={() => {
            onSwitchTeam();
            onClose();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Switch Team
        </button>
      </div>
    </div>
  );
};

export default StrikesModal;