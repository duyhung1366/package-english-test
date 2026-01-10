import { ICard } from '../../models';

interface QuizContentProps {
  card: ICard;
  selectedAnswer?: number;
  showFeedback?: boolean;
  onChoiceSelect?: (choiceId: number) => void;
  onKeyDown?: (e: React.KeyboardEvent, choiceId: number) => void;
  isReviewMode?: boolean;
  questionNumber?: number;
}

/**
 * Server Component - Renders static content for Quiz
 * This component renders question text, choices, audio, and images on the server
 * for better SEO and faster initial page load
 */
export default function QuizContent({
  card,
  selectedAnswer,
  showFeedback,
  onChoiceSelect,
  onKeyDown,
  isReviewMode = false,
  questionNumber
}: QuizContentProps) {
  const correctChoice = card.choices?.find(c => c.isCorrect);
  const isCorrect = selectedAnswer === correctChoice?.id;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Question Number (for review mode) */}
      {isReviewMode && questionNumber !== undefined && (
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber}
          </span>
        </div>
      )}

      {/* Question */}
      <div className="mb-8">
        <h2
          id="question-text"
          className="text-2xl font-bold text-gray-900 mb-4"
          dangerouslySetInnerHTML={{ __html: card.question.text }}
        />

        {/* Audio Player */}
        {card.question.audio && (
          <div className="mb-6">
            <audio controls className="w-full">
              <source src={card.question.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {/* Image */}
        {card.question.image && (
          <div className="mb-6">
            <img
              src={card.question.image}
              alt="Question image"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Choices */}
      <div className="space-y-3 mb-8" role="radiogroup" aria-labelledby="question-text">
        {card.choices?.map((choice, index) => {
          let choiceClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ";

          if (showFeedback) {
            if (choice.isCorrect) {
              choiceClass += "border-green-500 bg-green-50 text-green-800";
            } else if (selectedAnswer === choice.id && !choice.isCorrect) {
              choiceClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              choiceClass += "border-gray-200 bg-gray-50 text-gray-600";
            }
          } else {
            if (selectedAnswer === choice.id) {
              choiceClass += "border-blue-500 bg-blue-50 text-blue-800";
            } else {
              choiceClass += "border-gray-300 hover:border-blue-300 hover:bg-blue-50";
            }
          }

          return (
            <button
              key={choice.id}
              onClick={() => onChoiceSelect && !showFeedback && onChoiceSelect(choice.id)}
              onKeyDown={(e) => onKeyDown && onKeyDown(e, choice.id)}
              disabled={showFeedback}
              className={choiceClass}
              role="radio"
              aria-checked={selectedAnswer === choice.id}
              aria-describedby={showFeedback ? `feedback-${choice.id}` : undefined}
              tabIndex={index}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                  showFeedback && choice.isCorrect
                    ? 'border-green-500 bg-green-500'
                    : showFeedback && selectedAnswer === choice.id && !choice.isCorrect
                    ? 'border-red-500 bg-red-500'
                    : selectedAnswer === choice.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-400'
                }`}>
                  {showFeedback && choice.isCorrect && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {showFeedback && selectedAnswer === choice.id && !choice.isCorrect && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {!showFeedback && selectedAnswer === choice.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium">
                  <span className="font-bold mr-2">{choice.textId}.</span>
                  {choice.content}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`p-4 rounded-lg mb-6 ${
          isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-start">
            <div className={`flex-shrink-0 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </h3>
              {card.explanation && (
                <p className={`mt-1 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {card.explanation}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
