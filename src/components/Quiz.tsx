import { ICard, SubmitType } from '../models';
import QuizContent from './server/QuizContent';
import QuizInteraction from './client/QuizInteraction';
import { Answer } from './ExerciseRunner';

interface QuizProps {
  card: ICard;
  answer: Answer | undefined;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  submitType: SubmitType;
  showNext?: boolean;
  hideNext?: boolean; // Hide next button completely (for use in ParaGame)
  isReviewMode?: boolean; // Review mode - show all answers, disable interaction
  questionNumber?: number; // Question number for review mode
}

/**
 * Quiz Component - Hybrid Server/Client Component
 * Combines server-rendered content (QuizContent) with client-side interactions (QuizInteraction)
 * This ensures SEO-friendly content while maintaining rich interactivity
 */
export default function Quiz({ card, answer, onAnswer, onNext, submitType, showNext, hideNext, isReviewMode = false, questionNumber }: QuizProps) {
  return (
    <QuizInteraction
      card={card}
      answer={answer}
      onAnswer={onAnswer}
      onNext={onNext}
      submitType={submitType}
      showNext={showNext}
      hideNext={hideNext}
      isReviewMode={isReviewMode}
    >
      {({ selectedAnswer, showFeedback, handleChoiceSelect }) => (
        <QuizContent
          card={card}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback || isReviewMode}
          onChoiceSelect={handleChoiceSelect}
          onKeyDown={(e: React.KeyboardEvent, choiceId: number) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              if (!showFeedback && !isReviewMode) handleChoiceSelect(choiceId);
            }
          }}
          isReviewMode={isReviewMode}
          questionNumber={questionNumber}
        />
      )}
    </QuizInteraction>
  );
}
