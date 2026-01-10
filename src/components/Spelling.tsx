'use client';

import { useState, useEffect, useMemo } from 'react';
import { ICard, SubmitType } from '../models';
import * as cheerio from 'cheerio';
import { Answer } from './ExerciseRunner';

interface SpellingProps {
  card: ICard;
  answers: Record<string, Answer | undefined>;
  onAnswer: (cardId: string, answer: Answer) => void;
  onNext: () => void;
  submitType: SubmitType;
  hideNext?: boolean; // Hide next button completely (for use in ParaGame)
  isReviewMode?: boolean; // Review mode - show all answers, disable interaction
  questionNumber?: number; // Question number for review mode
}

function extractTextFromHTML(html: string): string {
  if (!html) return "";
  const $ = cheerio.load(html);
  return $('body').text() || '';
}

export default function Spelling({ card, answers, onAnswer, onNext, submitType, hideNext, isReviewMode = false, questionNumber }: SpellingProps) {
  const [showFeedback, setShowFeedback] = useState(isReviewMode); // Auto-show feedback in review mode
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [isHydrated, setIsHydrated] = useState(false);

  const childCards = useMemo(() => {
    return card.childCards?.sort((a, b) => {
      const numA = Number(extractTextFromHTML(a.question?.text)) ?? 0;
      const numB = Number(extractTextFromHTML(b.question?.text)) ?? 0;
      return numA - numB
    })
  }, [card.childCards])

  // Reset state when card changes
  useEffect(() => {
    if (isReviewMode) { 
      setInputValues(childCards?.reduce((acc, card, index) => {
        acc[`${index + 1}`] = answers[card._id!]?.answerText || "";
        return acc;
      }, {} as Record<string, string>) || {});
    } else { 
      setInputValues({});
    }
    setShowFeedback(isReviewMode); // Keep feedback shown in review mode
  }, [card._id, isReviewMode]);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Parse question text to find input placeholders and create input fields
  const parseQuestionText = (text: string) => {
    const parts: Array<{ type: 'text' | 'input'; content: string; inputIndex?: number }> = [];
    const $ = cheerio.load(text, { xmlMode: false });
    let inputCounter = 0;

    $('body').children().each((_, elem) => {
      const $elem = $(elem);
      const inputs = $elem.find('input');

      if (inputs.length === 1) {
        // ✅ TH1: Thẻ này chỉ có 1 input → lấy nguyên thẻ cha
        inputCounter++;
        parts.push({
          type: 'input',
          content: $.html($elem),
          inputIndex: inputCounter
        });
      } else if (inputs.length > 1) {
        // ⚙️ TH2: Nhiều input → xử lý từng cái
        let html = $.html($elem);
        inputs.each((_, input) => {
          const inputHtml = $.html(input);
          const split = html.split(inputHtml);

          // Thêm phần trước input
          if (split[0].trim()) {
            parts.push({ type: 'text', content: split[0] });
          }

          // Thêm input
          inputCounter++;
          parts.push({
            type: 'input',
            content: inputHtml,
            inputIndex: inputCounter
          });

          // Cập nhật phần còn lại để xử lý tiếp
          html = split.slice(1).join(inputHtml);
        });

        if (html.trim()) {
          parts.push({ type: 'text', content: html });
        }
      } else {
        // 📝 TH3: Không có input → là text bình thường
        const html = $.html($elem);
        if (html.trim()) {
          parts.push({ type: 'text', content: html });
        }
      }
    });

    return parts;
  };

  const handleInputChange = (inputIndex: number, value: string) => {
    if (isReviewMode) return; // Disable interaction in review mode

    setInputValues(prev => ({
      ...prev,
      [inputIndex]: value
    }));

    // Find corresponding child card
    const childCard = childCards?.[inputIndex - 1];
    if (childCard) {

      // Find the choice that matches the input value
      const matchingChoice = childCard.choices?.find(choice =>
        choice.content.toLowerCase() === value.toLowerCase()
      );
      const isCorrect = matchingChoice?.isCorrect || false;
      onAnswer(childCard._id!, {
        answerText: value,
        isCorrect,
      });
    }
  };

  const handleCheck = () => {
    setShowFeedback(true);
  };

  const isInputCorrect = (inputIndex: number) => {
    const childCard = childCards?.[inputIndex - 1];
    if (!childCard) return false;

    const answer = answers[childCard._id!];
    return answer?.isCorrect || false;
  };

  const getCorrectAnswer = (inputIndex: number) => {
    const childCard = childCards?.[inputIndex - 1];
    return childCard?.choices?.find(c => c.isCorrect)?.content || '';
  };

  const hasAllAnswers = () => {
    if (!childCards) return false;
    return childCards.every(childCard => !!answers[childCard._id!]);
  };

  const canShowNext = submitType === SubmitType.CHECK_ON_ANSWER ? showFeedback : hasAllAnswers();

  const questionParts = parseQuestionText(card.question.text);

  const renderQuestionWithInputs = () => {
    // Server-side: render static HTML to avoid hydration mismatch
    if (!isHydrated) {
      return (
        <div className="text-xl text-gray-900 mb-6 leading-relaxed">
          <span
            dangerouslySetInnerHTML={{ __html: card.question.text }}
            className="inline-block"
          />
        </div>
      );
    }

    // Client-side: render with interactive inputs
    return (
      <div className="text-xl text-gray-900 mb-6 leading-relaxed">
        {questionParts.map((part, index) => {
          if (part.type === 'text') {
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: part.content }}
                className="inline"
              />
            );
          } else if (part.type === 'input' && part.inputIndex) {
            const inputIndex = part.inputIndex;
            const inputValue = inputValues[inputIndex] || '';
            const isCorrect = isInputCorrect(inputIndex);
            const correctAnswer = getCorrectAnswer(inputIndex);

            // Parse the content to extract text around the input
            const $ = cheerio.load(part.content, { xmlMode: false });
            const inputElement = $('input');

            // Get all content before and after the input within the parent
            const parent = inputElement.parent();
            const beforeInput: string[] = [];
            const afterInput: string[] = [];
            let foundInput = false;

            parent.contents().each((_i, elem) => {
              if (elem.type === 'tag' && elem.name === 'input') {
                foundInput = true;
              } else {
                const content = $(elem).toString();
                if (!foundInput) {
                  beforeInput.push(content);
                } else {
                  afterInput.push(content);
                }
              }
            });

            const nextEl = questionParts[index + 1];

            return (
              // <span key={index} className={`${nextEl?.type === "input" ? "flex" : "inline-flex"} items-center mx-1 relative`}>
              <span key={index} className={`block mx-1 relative`}>
                {/* Content before input */}
                {beforeInput.length > 0 && (
                  <span
                    dangerouslySetInnerHTML={{ __html: beforeInput.join('') }}
                    className="inline mr-1"
                  />
                )}

                {/* Circular numbered badge */}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-sm mr-2 flex-shrink-0" style={{ lineHeight: 0 }}>
                  {inputIndex}
                </span>

                {/* Input field */}
                {showFeedback
                  ? <span className={`
                  px-1.5 py-0.5 bg-green-100 border-2 border-green-500 rounded text-green-700 font-bold text-base whitespace-nowrap
                  ${isCorrect
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700 line-through'}
                  `}>
                    {inputValue}
                  </span>
                  : <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputChange(inputIndex, e.target.value)}
                    disabled={showFeedback}
                    className={`px-1.5 py-0.5 text-base border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showFeedback ? "w-fit" : "w-[90px]"} ${showFeedback
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-red-500 bg-red-50 text-red-700 line-through'
                      : inputValue
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300'
                      }`}
                    placeholder=""
                  />}

                {/* Correct answer feedback */}
                {showFeedback && !isCorrect && (
                  <span className="ml-3 px-3 py-0.5 bg-green-100 border-2 border-green-500 rounded text-green-700 font-bold text-base whitespace-nowrap">
                    ✓ {correctAnswer}
                  </span>
                )}

                {/* Content after input */}
                {afterInput.length > 0 && (
                  <span
                    dangerouslySetInnerHTML={{ __html: afterInput.join('') }}
                    className="inline ml-1"
                  />
                )}
              </span>
            );
          }
          return null;
        })}
      </div>
    );
  };

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

        {renderQuestionWithInputs()}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="p-4 rounded-lg mb-6 bg-blue-50 border border-blue-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Check your answers above
              </h3>
              {card.explanation && (
                <p className="mt-1 text-sm text-blue-700">
                  {card.explanation}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons - Hidden in review mode */}
      {!isReviewMode && (
        <div className="flex justify-between">
          <div>
            {submitType === SubmitType.CHECK_ON_ANSWER && hasAllAnswers() && !showFeedback && (
              <button
                onClick={handleCheck}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Check Answer
              </button>
            )}
          </div>

          <div>
            {!hideNext && canShowNext && submitType === SubmitType.CHECK_ON_ANSWER && (
              <button
                onClick={onNext}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
