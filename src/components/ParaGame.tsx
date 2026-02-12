'use client';

import { ICard, CardGame, SubmitType } from "../models";
import { ShowType } from "./ExerciseRunner";

interface ParaGameProps {
    card: ICard;
    renderChildCard: (card: ICard, subQuestionNumber?: number) => React.ReactNode;
    answers?: Record<string, any>;
    onNext?: () => void;
    isReviewMode?: boolean;
    questionNumber?: number;
    showType: ShowType;
    submitType: SubmitType;
    isLastCard?: boolean;
}

const ParaGame = ({
    card,
    renderChildCard,
    answers = {},
    onNext,
    isReviewMode = false,
    questionNumber,
    showType,
    submitType,
    isLastCard = false
}: ParaGameProps) => {

    // Check if all child cards have been answered
    // const hasAllAnswers = () => {
    //     if (!card.childCards) return false;

    //     return card.childCards.every(childCard => {
    //         if (childCard.cardGame === CardGame.QUIZ) {
    //             return answers[childCard._id!] !== undefined;
    //         } else if (childCard.cardGame === CardGame.SPELLING && childCard.childCards) {
    //             return childCard.childCards.every(nestedChild =>
    //                 answers[nestedChild._id!] !== undefined
    //             );
    //         }
    //         return false;
    //     });
    // };

    // // For PARA game, we show next when all child cards are answered
    // // No need for separate check button since child games handle their own feedback
    // const canShowNext = hasAllAnswers();

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Question Number (for review mode) */}
            {isReviewMode && questionNumber !== undefined && (
                <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">
                        Paragraph {questionNumber}
                    </span>
                </div>
            )}

            {/* Main paragraph content */}
            <div className="text-xl text-gray-900 mb-8 leading-relaxed">
                {/* Audio Player */}
                {card.question.audio && (
                    <div className="mb-6">
                        <audio controls className="w-full">
                            <source src={card.question.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}

                <span
                    dangerouslySetInnerHTML={{ __html: card.question.text }}
                    className="inline-block"
                />

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

            {/* Child cards (questions or sub-paragraphs) */}
            <div className="space-y-6 mb-8">
                {/* Sort child cards by _id */}
                {card.childCards?.sort((a, b) => { return a._id!.localeCompare(b._id!);  }).map((childCard, index) => (
                    <div key={childCard._id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        {!isReviewMode && (
                            <div className="mb-4">
                                <span className="text-sm font-medium text-gray-500">
                                    Question {index + 1}
                                </span>
                            </div>
                        )}
                        {renderChildCard(childCard, index + 1)}
                    </div>
                ))}
            </div>

            {/* Transcription when has audio in question */}
            {isReviewMode && (card.question.audio && card.explanation) && (
                <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: card.explanation }} />
                </div>
            )}

            {/* Sticky Action Buttons - Hidden in review mode */}
            {(!isReviewMode && submitType === SubmitType.CHECK_ON_ANSWER) || (showType === "one-by-one" && submitType === SubmitType.CHECK_ON_SUBMIT && !isReviewMode) && onNext && (
                <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg -mx-8 -mb-8 px-8 py-4">
                    <div className="flex justify-end">
                        <button
                            onClick={onNext}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
                        >
                            {isLastCard ? "Show Results" : "Next Question"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ParaGame;