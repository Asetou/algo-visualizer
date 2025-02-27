'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrayBars } from '@/components/visualizations/sorting/array-bars';
import { SortControls } from '@/components/visualizations/sorting/sort-controls';
import { SortExplanationPanel } from '@/components/visualizations/sorting/explanation-panel';
import { useBubbleSort } from '@/hooks/use-bubble-sort';

const INITIAL_ARRAY_SIZE = 10;

export default function BubbleSortPage() {
  const {
    array, // This now comes from currentStepData.array
    currentStepData,
    currentStep,
    totalSteps,
    isPlaying,
    isComplete,
    generateArray,
    start,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
  } = useBubbleSort([]);

  // Initialize array on component mount
  useEffect(() => {
    generateArray(INITIAL_ARRAY_SIZE);
  }, []);

  // Calculate max value for bar heights
  const maxValue = array && array.length > 0 ? Math.max(...array) : 100;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-2">Bubble Sort Algorithm</h1>
      <p className="text-gray-600 mb-6">
        Visualize how bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
      </p>

      <div className="grid gap-6">
        {currentStepData && (
          <SortExplanationPanel 
            message={currentStepData.message}
            isComplete={isComplete}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>Visualization</CardTitle>
            <CardDescription>
              Color Legend: Blue = Unsorted, Yellow = Comparing, Red = Swapping, Green = Sorted
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Optional: Debug information */}
            {currentStepData && (
              <div className="mb-4 text-xs text-gray-500 overflow-auto max-h-16 bg-gray-50 p-2 rounded">
                <strong>Current array:</strong> {JSON.stringify(array)}
              </div>
            )}
            
            <ArrayBars 
              array={array}
              comparing={currentStepData?.comparing || null}
              swapping={currentStepData?.swapping || null}
              sorted={currentStepData?.sorted || []}
              maxValue={maxValue}
            />
          </CardContent>
        </Card>
        
        <SortControls
          isPlaying={isPlaying}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onStart={start}
          onPause={pause}
          onReset={reset}
          onNextStep={nextStep}
          onPrevStep={prevStep}
          onGenerateArray={() => generateArray(INITIAL_ARRAY_SIZE)}
          onSpeedChange={setSpeed}
        />
        
        <Card>
          <CardHeader>
            <CardTitle>How Bubble Sort Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
              compares adjacent elements, and swaps them if they are in the wrong order.
              The pass through the list is repeated until the list is sorted.
            </p>
            
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Start at the beginning of the array.</li>
              <li>Compare the current element with the next element.</li>
              <li>If the current element is greater than the next element, swap them.</li>
              <li>Move to the next element and repeat steps 2-3 until the end of the array.</li>
              <li>After one complete pass, the largest element will be at the end of the array.</li>
              <li>Repeat steps 1-5, but each time reduce the array length by 1 (as the end is already sorted).</li>
              <li>Continue until no more swaps are needed.</li>
            </ol>
            
            <h3 className="font-bold mt-4">Complexity</h3>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Time Complexity:</strong> O(n²) in worst and average cases</li>
              <li><strong>Space Complexity:</strong> O(1) - only requires a constant amount of additional memory space</li>
              <li><strong>Best Case:</strong> O(n) when the array is already sorted</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}