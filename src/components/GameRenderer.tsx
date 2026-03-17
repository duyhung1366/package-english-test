'use client';

import { ICard, CardGame, SubmitType } from '../models';
import Quiz from './Quiz';
import Spelling from './Spelling';
import ParaGame from './ParaGame';
import { Answer, ShowType } from './ExerciseRunner';
import { useExerciseRunner } from './ExerciseRunnerContext';

interface GameRendererProps {
  card: ICard;
  answers?: Record<string, Answer | undefined>;
  /** Snapshot of answers from studyData at mount time — used to detect pre-answered cards */
  preAnswers?: Record<string, Answer | undefined>;
  onAnswer: (cardId: string, answer: Answer, cardGame: CardGame) => void;
  onNext: () => void;
  submitType: SubmitType;
  isChildOfPara?: boolean;
  isReviewMode?: boolean; // New prop for review mode
  questionNumber?: number; // Question number for review mode
  showType?: ShowType;
  isLastCard?: boolean;
  /** When true, pre-answered cards show their previous answers (and feedback for CHECK_ON_ANSWER) */
  isInProgressMode?: boolean;
}

/**
 * GameRenderer Component
 * Renders different game types (Quiz, Spelling, Para) based on card.cardGame
 * Extracted from ExerciseRunner for better code organization
 */
export default function GameRenderer({
  card,
  answers,
  preAnswers,
  onAnswer,
  onNext,
  submitType,
  isChildOfPara = false,
  isReviewMode = false,
  questionNumber,
  showType = "one-by-one",
  isLastCard = false,
  isInProgressMode = false,
}: GameRendererProps) {
  const { renderAds } = useExerciseRunner();

  // Recursive render function for nested cards (used in ParaGame)
  const renderChildCard = (childCard: ICard, subQuestionNumber?: number) => {
    return (
      <GameRenderer
        card={childCard}
        answers={answers}
        preAnswers={preAnswers}
        onAnswer={onAnswer}
        onNext={onNext}
        submitType={submitType}
        isChildOfPara={true}
        isReviewMode={isReviewMode}
        questionNumber={subQuestionNumber}
        showType={showType}
        isLastCard={isLastCard}
        isInProgressMode={isInProgressMode}
      />
    );
  };

  if (card.cardGame === CardGame.QUIZ) {
    // Use preAnswers (studyData snapshot) — not live answers — so that cards the user
    // answers during this session don't immediately flip into review mode, which would
    // hide the Next button.
    const cardAnswer = answers?.[card._id!];
    const preCardAnswer = preAnswers?.[card._id!];
    const effectiveReviewMode =
      isReviewMode ||
      (isInProgressMode && submitType === SubmitType.CHECK_ON_ANSWER && !!preCardAnswer);

    return (
      <>
        <Quiz
          card={card}
          answer={cardAnswer}
          onAnswer={(answer) => onAnswer(card._id!, answer, CardGame.QUIZ)}
          onNext={onNext}
          submitType={submitType}
          showNext={showType === "one-by-one" && !isChildOfPara}
          isReviewMode={effectiveReviewMode}
          questionNumber={questionNumber}
          hideActionButton={!!isReviewMode}
        />
        {renderAds({ height: 90, style: { marginTop: '12px' } })}
      </>
    );
  }

  if (card.cardGame === CardGame.SPELLING) {
    // Use preAnswers so that child cards answered live don't flip into review mode.
    const hasPreChildAnswers = card.childCards?.some(c => !!preAnswers?.[c._id!]) ?? false;
    const effectiveReviewMode =
      isReviewMode ||
      (isInProgressMode && submitType === SubmitType.CHECK_ON_ANSWER && hasPreChildAnswers);

    return (
      <>
        <Spelling
          card={card}
          answers={answers ?? {}}
          onAnswer={onAnswer}
          onNext={onNext}
          submitType={submitType}
          showNext={!isChildOfPara && showType === "one-by-one"}
          isReviewMode={effectiveReviewMode}
          questionNumber={questionNumber}
          isInProgressMode={isInProgressMode}
          hideActionButton={!!isReviewMode}
        />
        {renderAds({ height: 90, style: { marginTop: '12px' } })}
      </>
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
        showType={showType}
        isLastCard={isLastCard}
      />
    );
  }

  return null;
}

