import React from 'react';

interface MoodSelectionProps {
  onSelectMood: (mood: string) => void;
}

const MoodSelection: React.FC<MoodSelectionProps> = ({ onSelectMood }) => {
  const moods: string[] = ['Heureux', 'Triste', 'En colère', 'Stressé', 'Fatigué']; // Exemple de différentes options d'humeur

  return (
    <div className="flex justify-center items-center">
      {moods.map((mood, index) => (
        <button
          key={index}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
          onClick={() => onSelectMood(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelection;
