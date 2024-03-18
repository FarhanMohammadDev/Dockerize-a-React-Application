import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import de l'extension de jest-dom
import App from './App';

test('Affiche le titre et sélectionne une humeur', () => {
  const { getByText, queryByText } = render(<App />);

  // Vérifie que le titre est affiché
  expect(getByText('Daily Mood Tracker')).toBeInTheDocument();

  // Vérifie que le message de confirmation n'est pas affiché initialement
  expect(queryByText(/Votre humeur/i)).toBeNull();

  // Simule la sélection d'une humeur
  fireEvent.click(getByText('Heureux'));

  // Vérifie que le message de confirmation est affiché après la sélection d'une humeur
  expect(getByText(/Votre humeur \(Heureux\) a été enregistrée avec succès!/i)).toBeInTheDocument();
});
