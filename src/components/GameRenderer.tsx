'use client';

import { ICard, CardGame, SubmitType } from '../models';
import Quiz from './Quiz';
import Spelling from './Spelling';
import ParaGame from './ParaGame';
import { Answer, ShowType } from './ExerciseRunner';

interface GameRendererProps {
  card: ICard;
  answers?: Record<string, Answer | undefined>;
  onAnswer: (cardId: string, answer: Answer) => void;
  onNext: () => void;
  submitType: SubmitType;
  isChildOfPara?: boolean;
  isReviewMode?: boolean; // New prop for review mode
  questionNumber?: number; // Question number for review mode
  showType?: ShowType;
}

/**
 * GameRenderer Component
 * Renders different game types (Quiz, Spelling, Para) based on card.cardGame
 * Extracted from ExerciseRunner for better code organization
 */
export default function GameRenderer({
  card,
  answers,
  onAnswer,
  onNext,
  submitType,
  isChildOfPara = false,
  isReviewMode = false,
  questionNumber,
  showType = "one-by-one"
}: GameRendererProps) {

  // Recursive render function for nested cards (used in ParaGame)
  const renderChildCard = (childCard: ICard, subQuestionNumber?: number) => {
    return (
      <GameRenderer
        card={childCard}
        answers={answers}
        onAnswer={onAnswer}
        onNext={onNext}
        submitType={submitType}
        isChildOfPara={true}
        isReviewMode={isReviewMode}
        questionNumber={subQuestionNumber}
      />
    );
  };

  if (card.cardGame === CardGame.QUIZ) {
    const cardAnswer = answers?.[card._id!];

    return (
      <Quiz
        card={card}
        answer={cardAnswer}
        onAnswer={(answer) => onAnswer(card._id!, answer)}
        onNext={onNext}
        submitType={submitType}
        showNext={showType === "one-by-one" && !isChildOfPara}
        isReviewMode={isReviewMode}
        questionNumber={questionNumber}
      />
    );
  }
  
  if (card.cardGame === CardGame.SPELLING) {
    return (
      <Spelling
        card={card}
        answers={answers}
        onAnswer={onAnswer}
        onNext={onNext}
        submitType={submitType}
        showNext={!isChildOfPara && showType === "one-by-one"}
        isReviewMode={isReviewMode}
        questionNumber={questionNumber}
      />
    );
  }
  
  if (card.cardGame === CardGame.PARA) {
    /**
     * Game paragraph, includes:
     * 1. Main paragraph (from parent card)
     * 2. Child paragraphs (childCards): can be questions or sub-paragraphs
     * 3. Questions are either multiple choice (quiz) or fill-in-the-blank (spelling)
     */
    return (
      <ParaGame
        card={card}
        renderChildCard={renderChildCard}
        answers={answers}
        onNext={onNext}
        isReviewMode={isReviewMode}
        questionNumber={questionNumber}
        submitType={submitType}
      />
    );
  }

  return null;
}

