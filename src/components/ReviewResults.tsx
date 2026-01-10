'use client';

import { ICard, SubmitType } from '../models';
import CircularScore from './CircularScore';
import { Answer } from './ExerciseRunner';
import GameRenderer from './GameRenderer';

interface ReviewResultsProps {
  cards: ICard[];
  answers: Record<string, Answer | undefined>;
  onTryAgain: () => void;
  onBackToTopic: () => void;
  score: number;
  topicName: string;
  exerciseName: string;
}

export default function ReviewResults({
  cards,
  answers,
  onTryAgain,
  onBackToTopic,
  score,
  topicName,
  exerciseName
}: ReviewResultsProps) {

  // Dummy handlers for review mode (no interaction needed)
  const handleAnswer = () => {};
  const handleNext = () => {};

  let questionCounter = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Score */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Review Results</h1>
              <p className="text-sm text-gray-600">{exerciseName}</p>
            </div>
            <div className="flex">
              <CircularScore score={score} size={50} />
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cards.map((card) => {
          questionCounter++;
          const currentQuestionNumber = questionCounter;

          return (
            <div key={card._id} className="mb-6">
              <GameRenderer
                card={card}
                answers={answers}
                onAnswer={handleAnswer}
                onNext={handleNext}
                submitType={SubmitType.CHECK_ON_ANSWER}
                isReviewMode={true}
                questionNumber={currentQuestionNumber}
              />
            </div>
          );
        })}

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg p-6 sticky bottom-4">
          <div className="flex gap-4">
            <button
              onClick={onTryAgain}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={onBackToTopic}
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to {topicName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
