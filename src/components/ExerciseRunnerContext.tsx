'use client';
import { createContext, useContext } from 'react';

export type RenderAdsFn = (args: { adSlot?: string, width?: number, height?: number; style?: React.CSSProperties }) => React.ReactNode;

interface ExerciseRunnerContextValue {
  /** Render an ad unit by slot ID and dimensions */
  renderAds?: RenderAdsFn;
}

export const ExerciseRunnerContext = createContext<ExerciseRunnerContextValue>({});

export function useExerciseRunner() {
  return useContext(ExerciseRunnerContext);
}
