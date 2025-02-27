import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExplanationPanelProps {
  message: string;
  found: boolean;
  currentStep: number;
  totalSteps: number;
}

export function ExplanationPanel({ message, found, currentStep, totalSteps }: ExplanationPanelProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          {found ? (
            <span className="text-green-600">Target Found!</span>
          ) : currentStep === totalSteps - 1 ? (
            <span className="text-red-600">Target Not Found</span>
          ) : (
            <span>Binary Search: Step {currentStep + 1}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{message}</p>
      </CardContent>
    </Card>
  );
}