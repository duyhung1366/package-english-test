import { ICard } from '../models';

// Shuffle array utility
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Exercise utilities
export const exerciseUtils = {
  // Count total questions including parent and child cards
  getTotalQuestionCount: (cards: ICard[]): number => {
    let total = 0;
    cards.forEach(card => {
      total += 1; // Parent card
      if (card.childCards && card.childCards.length > 0) {
        total += card.childCards.length;
      }
    });
    return total;
  },

  // Get parent cards only
  getParentCards: (cards: ICard[]): ICard[] => {
    return cards.filter(card => !card.parentId);
  },

  // Shuffle parent cards but keep child order stable
  shuffleParentCards: (cards: ICard[]): ICard[] => {
    const parentCards = exerciseUtils.getParentCards(cards);
    const shuffledParents = shuffleArray(parentCards);

    // Maintain child cards with their parents
    return shuffledParents.map(parent => ({
      ...parent,
      childCards: parent.childCards || []
    }));
  },
};

