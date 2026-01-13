'use client';

import { useState, useEffect, useMemo, useRef, memo, useCallback } from 'react';
import { ICard, SubmitType } from '../models';
import * as cheerio from 'cheerio';
import { Answer } from './ExerciseRunner';

interface SpellingProps {
  card: ICard;
  answers: Record<string, Answer | undefined>;
  onAnswer: (cardId: string, answer: Answer) => void;
  onNext: () => void;
  submitType: SubmitType;
  isReviewMode?: boolean; // Review mode - show all answers, disable interaction
  questionNumber?: number; // Question number for review mode
  showNext?: boolean;
}

function extractTextFromHTML(html: string): string {
  if (!html) return "";
  const $ = cheerio.load(html);
  return $('body').text() || '';
}

// Separate component for question rendering to avoid re-renders
interface QuestionContainerProps {
  questionText: string;
  cardId: string;
  inputValuesRef: { current: Record<string, { value: string, isCorrect: boolean }> };
  showFeedback: boolean;
  childCards: ICard[] | undefined;
  onInputChange: (inputIndex: number, value: string, inputElement: HTMLInputElement) => void;
  getCorrectAnswer: (inputIndex: number) => string;
}

const QuestionContainer = memo(({
  questionText,
  cardId,
  inputValuesRef,
  showFeedback,
  childCards,
  onInputChange,
  getCorrectAnswer
}: QuestionContainerProps) => {
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Track which props changed
  const prevPropsRef = useRef<QuestionContainerProps | null>(null);

  useEffect(() => {
    if (prevPropsRef.current) {
      const prev = prevPropsRef.current;
      const changes: string[] = [];

      if (prev.questionText !== questionText) changes.push('questionText');
      if (prev.cardId !== cardId) changes.push('cardId');
      if (prev.inputValuesRef !== inputValuesRef) changes.push('inputValuesRef');
      if (prev.showFeedback !== showFeedback) changes.push('showFeedback');
      if (prev.childCards !== childCards) changes.push('childCards');
      if (prev.onInputChange !== onInputChange) changes.push('onInputChange');
      if (prev.getCorrectAnswer !== getCorrectAnswer) changes.push('getCorrectAnswer');

      if (changes.length > 0) {
        console.log('QuestionContainer re-render caused by:', changes.join(', '));
      }
    }

    prevPropsRef.current = {
      questionText,
      cardId,
      inputValuesRef,
      showFeedback,
      childCards,
      onInputChange,
      getCorrectAnswer
    };
  });

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Use effect to manipulate DOM after render - find and replace input elements
  useEffect(() => {
    console.log("re render useEffect - replace input");

    if (!isHydrated || !questionContainerRef.current) return;

    const container = questionContainerRef.current;

    // Use querySelectorAll to get all input elements in the container
    const inputElements = container.querySelectorAll('input[type="text"]');

    // If no inputs found, it means they're already replaced, skip
    if (inputElements.length === 0) return;

    // Iterate through each input element
    inputElements.forEach((inputEl, index) => {
      const inputIndex = index + 1;

      // Create wrapper span
      const wrapper = document.createElement('span');
      wrapper.className = 'inline-flex items-center mx-1 relative';
      wrapper.setAttribute('data-input-index', inputIndex.toString());

      // Create numbered badge
      const badge = document.createElement('span');
      badge.className = 'inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-sm mr-2 flex-shrink-0';
      badge.textContent = inputIndex.toString();
      wrapper.appendChild(badge);

      // Create new input element
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = inputValuesRef.current[inputIndex]?.value || '';
      newInput.disabled = !!showFeedback;
      newInput.className = 'spelling-input px-1.5 py-0.5 text-base border-2 rounded w-[90px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300';
      newInput.placeholder = '';
      newInput.setAttribute('autocomplete', 'off');
      newInput.setAttribute('data-input-index', inputIndex.toString());

      // Add onChange event listener
      newInput.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const idx = parseInt(target.getAttribute('data-input-index') || '0');
        onInputChange(idx, target.value, target);
      });

      wrapper.appendChild(newInput);

      // Replace original input with wrapper
      inputEl.parentNode?.replaceChild(wrapper, inputEl);
    });

    if (showFeedback) { 
      console.log("re render useEffect - update feedback");
      const spanElements = container.querySelectorAll('span[data-input-index]');
      spanElements.forEach((wrapper) => {
        const inputIndex = parseInt(wrapper.getAttribute('data-input-index') || '0');
        const inputValue = inputValuesRef.current[inputIndex]?.value || '';
        const isCorrect = inputValuesRef.current[inputIndex]?.isCorrect || false;
        const correctAnswer = getCorrectAnswer(inputIndex);
  
        // Replace input with feedback
        const existingInput = wrapper.querySelector('.spelling-input');
        if (existingInput) {
          // Create feedback span
          const feedbackSpan = document.createElement('span');
          feedbackSpan.className = `px-1.5 py-0.5 border-2 rounded font-bold text-base whitespace-nowrap ${isCorrect
            ? 'border-green-500 bg-green-50 text-green-700'
            : 'border-red-500 bg-red-50 text-red-700 line-through'
            }`;
          feedbackSpan.textContent = inputValue;
  
          // Replace input with feedback
          existingInput.replaceWith(feedbackSpan);
  
          // Add correct answer if wrong
          if (!isCorrect) {
            const correctSpan = document.createElement('span');
            correctSpan.className = 'ml-3 px-3 py-0.5 bg-green-100 border-2 border-green-500 rounded text-green-700 font-bold text-base whitespace-nowrap';
            correctSpan.textContent = `✓ ${correctAnswer}`;
            wrapper.appendChild(correctSpan);
          }
        }
      });
    }
  }, [isHydrated, cardId, showFeedback]);

  // Update feedback when showFeedback changes
  useEffect(() => {
    
  }, [showFeedback]);

  return (
    <div
      ref={questionContainerRef}
      className="text-xl text-gray-900 mb-6 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: questionText }}
    />
  );
});

QuestionContainer.displayName = 'QuestionContainer';

export default function Spelling({ card, answers, onAnswer, onNext, submitType, isReviewMode = false, questionNumber, showNext }: SpellingProps) {
  const [showFeedback, setShowFeedback] = useState(isReviewMode); // Auto-show feedback in review mode
  const inputValuesRef = useRef<Record<string, { value: string, isCorrect: boolean }>>({});
  // const [inputValuesForFeedback, setInputValuesForFeedback] = useState<Record<string, { value: string, isCorrect: boolean }>>({});
  const [hasAllInputsFilled, setHasAllInputsFilled] = useState(false);

  // Track which props changed for Spelling component
  const prevSpellingPropsRef = useRef<SpellingProps | null>(null);

  useEffect(() => {
    if (prevSpellingPropsRef.current) {
      const prev = prevSpellingPropsRef.current;
      const changes: string[] = [];

      if (prev.card !== card) changes.push('card');
      if (prev.answers !== answers) changes.push('answers');
      if (prev.onAnswer !== onAnswer) changes.push('onAnswer');
      if (prev.onNext !== onNext) changes.push('onNext');
      if (prev.submitType !== submitType) changes.push('submitType');
      if (prev.showNext !== showNext) changes.push('showNext');
      if (prev.isReviewMode !== isReviewMode) changes.push('isReviewMode');
      if (prev.questionNumber !== questionNumber) changes.push('questionNumber');

      if (changes.length > 0) {
        console.log('Spelling component re-render caused by:', changes.join(', '));
      }
    }

    prevSpellingPropsRef.current = {
      card,
      answers,
      onAnswer,
      onNext,
      submitType,
      showNext,
      isReviewMode,
      questionNumber
    };
  });

  const childCards = useMemo(() => {
    return card.childCards?.sort((a, b) => {
      const numA = Number(extractTextFromHTML(a.question?.text)) ?? 0;
      const numB = Number(extractTextFromHTML(b.question?.text)) ?? 0;
      return numA - numB
    })
  }, [card.childCards])

  // Reset state when card changes
  useEffect(() => {
    const initialValues = isReviewMode
      ? childCards?.reduce((acc, card, index) => {
        const data = answers[card._id!] ?? {} as Answer;
        acc[`${index + 1}`] = {
          value: data?.answerText || "",
          isCorrect: data?.isCorrect || false
        };
        return acc;
      }, {} as Record<string, { value: string, isCorrect: boolean }>) || {}
      : {};

    inputValuesRef.current = initialValues;
    setShowFeedback(isReviewMode); // Keep feedback shown in review mode

    // Check if all inputs are filled initially (for review mode)
    if (isReviewMode) {
      const totalInputs = childCards?.length || 0;
      const filledInputs = Object.keys(initialValues).filter(
        key => initialValues[key]?.value?.trim() !== ''
      ).length;
      setHasAllInputsFilled(true);
    } else {
      setHasAllInputsFilled(false);
    }
  }, [card._id, isReviewMode, childCards, answers]);

  const handleInputChange = useCallback((inputIndex: number, value: string, inputElement: HTMLInputElement) => {
    if (isReviewMode) return; // Disable interaction in review mode

    // Find corresponding child card
    const childCard = childCards?.[inputIndex - 1];
    let isCorrect = false;

    if (childCard) {
      // Find the choice that matches the input value
      const matchingChoice = childCard.choices?.find(choice =>
        choice.content.toLowerCase() === value.toLowerCase()
      );
      isCorrect = matchingChoice?.isCorrect || false;

      onAnswer(childCard?._id!, {
        answerText: value,
        isCorrect
      });
    }

    // Update ref (no re-render) - store as object with value and isCorrect
    inputValuesRef.current = {
      ...inputValuesRef.current,
      [inputIndex]: {
        value,
        isCorrect
      }
    };
    // Check if all inputs are filled
    const totalInputs = childCards?.length || 0;
    const filledInputs = Object.keys(inputValuesRef.current).filter(
      key => inputValuesRef.current[key]?.value?.trim() !== ''
    ).length;

    setHasAllInputsFilled(filledInputs === totalInputs);

    // Update input CSS directly without re-render
    inputElement.className = `spelling-input px-1.5 py-0.5 text-base border-2 rounded w-[90px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${value ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`;
  }, [isReviewMode, childCards]);

  const handleCheck = () => {
    // handleUpdateDataToAnswer();
    // Copy current values from ref to state for feedback display
    // setInputValuesForFeedback({ ...inputValuesRef.current });
    setShowFeedback(true);
  };

  const getCorrectAnswer = useCallback((inputIndex: number) => {
    const childCard = childCards?.[inputIndex - 1];
    return childCard?.choices?.find(c => c.isCorrect)?.content || '';
  }, [childCards]);

  const canShowNext = submitType === SubmitType.CHECK_ON_ANSWER ? showFeedback : hasAllInputsFilled;

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

        <QuestionContainer
          key={`game-spelling-question-container-${card._id}-${showFeedback}`}
          questionText={card.question.text}
          cardId={card._id!}
          inputValuesRef={inputValuesRef}
          showFeedback={showFeedback}
          childCards={childCards}
          onInputChange={handleInputChange}
          getCorrectAnswer={getCorrectAnswer}
        />
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
            {submitType === SubmitType.CHECK_ON_ANSWER && !showFeedback && (
              <button
                onClick={handleCheck}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Check Answer
              </button>
            )}
          </div>

          <div>
            {showNext && canShowNext && (
              <button
                onClick={() => {
                  // handleUpdateDataToAnswer();
                  onNext();
                  // setTimeout(() => { onNext() }, 1000);
                }}
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
