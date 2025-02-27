import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SortExplanationPanelProps {
  message: string;
  isComplete: boolean;
  currentStep: number;
  totalSteps: number;
}

export function SortExplanationPanel({ message, isComplete, currentStep }: SortExplanationPanelProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          {isComplete ? (
            <span className="text-green-600">Sorting Complete!</span>
          ) : (
            <span>Bubble Sort: Step {currentStep + 1}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{message}</p>
      </CardContent>
    </Card>
  );
}