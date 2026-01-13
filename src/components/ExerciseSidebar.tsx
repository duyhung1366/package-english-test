'use client';
import { ITopic } from '../models';
import Link from 'next/link';
import { useState } from 'react';

interface ExerciseSidebarProps {
  siblingTopics: ITopic[];
  currentTopicId: string;
}

/**
 * Sidebar component for displaying sibling exercises/tests
 * Allows quick navigation between exercises of the same parent topic
 */
export default function ExerciseSidebar({ siblingTopics, currentTopicId }: ExerciseSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!siblingTopics || siblingTopics.length === 0) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button - Fixed position */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-20 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle exercise list"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 right-0 h-screen lg:h-auto
          w-80 lg:w-72 xl:w-80
          bg-white border-l border-gray-200 shadow-xl lg:shadow-none
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          z-1000 lg:z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 h-[50px] flex items-center px-4 lg:px-6">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">
              Other Exercises
            </h3>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-700"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4 lg:p-6 pb-32 lg:pb-3">
          <ul className="space-y-2">
            {siblingTopics.map((topic) => {
              const isCurrent = topic._id === currentTopicId;

              return (
                <li key={topic._id}>
                  <Link
                    href={`/${topic.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block p-4 rounded-lg border transition-all
                      ${isCurrent
                        ? 'bg-blue-50 border-blue-500 shadow-sm'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`
                            font-medium text-sm mb-1 truncate
                            ${isCurrent ? 'text-blue-900' : 'text-gray-900'}
                          `}
                        >
                          {topic.name}
                        </h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {topic.questionNum || 0} questions
                        </p>
                      </div>

                      {isCurrent && (
                        <span className="flex-shrink-0 mt-1">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

