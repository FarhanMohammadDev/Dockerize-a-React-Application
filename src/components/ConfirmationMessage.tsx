import React from 'react';

interface ConfirmationMessageProps {
  message: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ message }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Merci!</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );
};

export default ConfirmationMessage;
