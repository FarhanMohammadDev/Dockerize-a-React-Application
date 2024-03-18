import React, { useState } from 'react';
import MoodSelection from './components/MoodSelection ';
import ConfirmationMessage from './components/ConfirmationMessage';


const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSelectMood = (mood: string) => {
    setSelectedMood(mood);
    setShowConfirmation(true);

  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Daily Mood Tracker</h1>
      <MoodSelection onSelectMood={handleSelectMood} />
      {showConfirmation && (
        <ConfirmationMessage message={`Votre humeur (${selectedMood}) a été enregistrée avec succès!`} />
      )}
    </div>
  );
};

export default App;
