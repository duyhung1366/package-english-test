'use client';

import { useState, useEffect, useCallback } from 'react';
import { ICard, SubmitType } from '../../models';
import { Answer } from '../ExerciseRunner';

interface QuizInteractionProps {
  card: ICard;
  answer: Answer | undefined;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  submitType: SubmitType;
  showNext?: boolean;
  hideNext?: boolean; // Hide next button completely
  isReviewMode?: boolean; // Review mode - disable interaction
  children: (props: {
    selectedAnswer: number | undefined;
    showFeedback: boolean;
    handleChoiceSelect: (choiceId: number) => void;
    handleCheck: () => void;
  }) => React.ReactNode;
}

/**
 * Client Component - Handles Quiz interactions using render props pattern
 * This component manages state and provides interaction handlers to its children
 */
export default function QuizInteraction({
  card,
  answer,
  onAnswer,
  onNext,
  submitType,
  showNext,
  hideNext,
  isReviewMode = false,
  children
}: QuizInteractionProps) {
  const [showFeedback, setShowFeedback] = useState(isReviewMode); // Auto-show feedback in review mode
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(answer?.choiceId);

  // Update selected answer when prop changes
  useEffect(() => {
    setSelectedAnswer(answer?.choiceId);
  }, [answer?.choiceId]);

  const handleChoiceSelect = useCallback((choiceId: number) => {
    if (isReviewMode) return; // Disable interaction in review mode

    setSelectedAnswer(choiceId);
    onAnswer({
      choiceId,
      isCorrect: card.choices?.find(c => c.id === choiceId)?.isCorrect || false
    });

    if (submitType === SubmitType.CHECK_ON_ANSWER) {
      setShowFeedback(true);
    }
  }, [onAnswer, submitType, isReviewMode]);

  const handleCheck = useCallback(() => {
    if (selectedAnswer !== undefined) {
      setShowFeedback(true);
    }
  }, [selectedAnswer]);

  // const correctChoice = card.choices?.find(c => c.isCorrect);
  // const isCorrect = selectedAnswer === correctChoice?.id;

  return (
    <>
      {children({
        selectedAnswer,
        showFeedback,
        handleChoiceSelect,
        handleCheck
      })}

      {/* Action Buttons - Hidden in review mode */}
      {!isReviewMode && (
        <div className="flex justify-end">
          {/* Check Answer Button (if needed) */}
          {/* {submitType === SubmitType.CHECK_ON_SUBMIT && selectedAnswer !== undefined && !showFeedback && (
            <button
              onClick={handleCheck}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors mr-4"
            >
              Check Answer
            </button>
          )} */}

          {/* Next Button */}
          {!hideNext && ((showNext && showFeedback) || (!!selectedAnswer)) && submitType === SubmitType.CHECK_ON_ANSWER && (
            <button
              onClick={onNext}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{
                marginTop: 24
              }}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </>
  );
}
