'use client';
import { exerciseUtils } from '../lib/utils';
import { CardGame, ICard, ISeo, ITopic, SubmitType } from '../models';
// import Link from 'next/link';
import { useState } from 'react';
import GameRenderer from './GameRenderer';
import ReviewResults from './ReviewResults';
import _ from 'lodash';

export type ShowType = 'all' | 'one-by-one';
interface ExerciseRunnerProps {
  topic: ITopic;
  exercise: ITopic;
  cards: ICard[];
  seo: ISeo | null;
  breadcrumbItems?: ITopic[];
  siblingTopics?: ITopic[];
  showType?: ShowType;
  // Optional config
  shouldShowReviewResults?: boolean;
  // Optional sidebar element
  sidebarElement?: React.ReactNode;
}

export type Answer = {
  choiceId?: number;
  answerText?: string;
  isCorrect: boolean;
};

export default function ExerciseRunner({
  topic,
  exercise,
  cards,
  seo,
  breadcrumbItems,
  siblingTopics,
  showType = 'one-by-one',
  shouldShowReviewResults: shouldShowReviewResultsProp = true,
  sidebarElement
}: ExerciseRunnerProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<ICard[]>(cards);
  const [answers, setAnswers] = useState<Record<string, { choiceId?: number, answerText?: string, isCorrect: boolean } | undefined>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // const totalQuestions = exerciseUtils.getTotalQuestionCount(shuffledCards);

  const handleAnswer = (cardId: string, answer: Answer) => {
    setAnswers(prev => ({
      ...prev,
      [cardId]: answer
    }));
  };

  const handleNext = () => {
    if (showType === 'all') return
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Calculate score and show results
      calculateScore();
      setShowResults(true);
    }
    // scroll to top 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTotalAnswers = (cards: ICard[]): number => {
    return cards.reduce((total, card) => {
      if (card.cardGame === CardGame.QUIZ) {
        return total + 1;
      } else if (card.cardGame === CardGame.SPELLING && card.childCards) {
        return total + (card.childCards.length || 0);
      } else if (card.cardGame === CardGame.PARA && !!card.childCards?.length) {
        return total + getTotalAnswers(card.childCards);
      }
      return total;
    }, 0);
  }

  const calculateScore = () => {
    let correctAnswers = Object.values(answers).reduce((total, answer) => {
      if (answer?.isCorrect) {
        return total + 1;
      }
      return total;
    }, 0);
    let totalAnswers = getTotalAnswers(shuffledCards);

    setScore(Math.round((correctAnswers / totalAnswers) * 100));
  };

  const handleShowResults = () => {
    calculateScore();
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTryAgain = () => {
    // Shuffle cards again
    const shuffled = exerciseUtils.shuffleParentCards(cards);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600">Loading exercise...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No questions available</h3>
          <p className="text-gray-600 mb-6">
            This exercise doesn't have any questions yet. Please check back later.
          </p>
          <a
            href={`/${topic.slug}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to {topic.name}
          </a>
        </div>
      </div>
    );
  }

  if (showResults) {
    // Check app config to determine if we should show detailed review
    if (shouldShowReviewResultsProp) {
      return (
        <ReviewResults
          cards={shuffledCards}
          answers={answers}
          onTryAgain={handleTryAgain}
          onBackToTopic={() => window.location.href = `/${topic.slug}`}
          score={score}
          topicName={topic.name}
          exerciseName={exercise.name}
        />
      );
    }

    // Otherwise, show simple score screen (for CHECK_ON_ANSWER)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${score >= 80 ? 'bg-green-100 text-green-600' :
              score >= 60 ? 'bg-yellow-100 text-yellow-600' :
                'bg-red-100 text-red-600'
              }`}>
              <span className="text-2xl font-bold">{score}%</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {score >= 80 ? 'Excellent!' : score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
            </h2>
            <p className="text-gray-600">
              You scored {score}% on {exercise.name}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleTryAgain}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Try Again
            </button>
            <a
              href={`/${topic.slug}`}
              className="block w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to {topic.name}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentCardIndex + 1) / shuffledCards.length) * 100;

  if (showType === 'all') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Main Layout with Sidebar */}
        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="bg-white shadow-sm">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{seo?.titleH1 || exercise.name}</h1>
                    <p className="text-sm text-gray-600">{seo?.description || topic.name}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    Total: {shuffledCards.length} questions
                  </div>
                </div>
              </div>
            </div>

            {/* Question Content - Show all */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
              {shuffledCards.map((card, index) => (
                <div
                  key={`card-${card._id}-${index}`}
                  className="mb-8"
                  data-card-index={index}
                  data-card-id={card._id}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Question {index + 1}
                    </span>
                  </div>
                  {/* {renderGame(card)} */}
                  <GameRenderer
                    card={card}
                    answers={answers}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    submitType={exercise.submitType || SubmitType.CHECK_ON_ANSWER}
                  />
                </div>
              ))}
            </div>

            {/* Fixed Show Results Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <button
                  onClick={handleShowResults}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Show Results
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          {sidebarElement}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{seo?.titleH1 || exercise.name}</h1>
                  <p className="text-sm text-gray-600">{seo?.description || topic.name}</p>
                </div>
                <div className="text-sm text-gray-600">
                  Question {currentCardIndex + 1} of {shuffledCards.length}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Render all cards for SEO - hidden cards will be display: none */}
            {shuffledCards.map((card, index) => {
              const isCurrentCard = index === currentCardIndex;

              return (
                <div
                  key={`card-${card._id}-${index}`}
                  className={isCurrentCard ? 'block' : 'hidden'}
                  data-card-index={index}
                  data-card-id={card._id}
                >
                  <GameRenderer
                    card={card}
                    answers={answers}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    submitType={exercise.submitType || SubmitType.CHECK_ON_ANSWER}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        {sidebarElement}
      </div>
    </div>
  );
}
