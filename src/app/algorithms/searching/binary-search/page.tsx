'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrayDisplay } from '@/components/visualizations/searching/array-display';
import { SearchControls } from '@/components/visualizations/searching/search-controls';
import { ExplanationPanel } from '@/components/visualizations/searching/explanation-panel';
import { useBinarySearch } from '@/hooks/use-binary-search';

const INITIAL_ARRAY_SIZE = 15;

export default function BinarySearchPage() {
  const {
    array,
    target,
    currentStepData,
    currentStep,
    totalSteps,
    isPlaying,
    generateArray,
    setRandomTarget,
    setTargetValue,
    start,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
  } = useBinarySearch([]);

  useEffect(() => {
    generateArray(INITIAL_ARRAY_SIZE);
  }, []);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-2">Binary Search Algorithm</h1>
      <p className="text-gray-600 mb-6">
        Visualize how binary search efficiently finds elements in a sorted array.
      </p>

      <div className="grid gap-6">
        {currentStepData && (
          <ExplanationPanel 
            message={currentStepData.message}
            found={currentStepData.found}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>Visualization</CardTitle>
            <CardDescription>
              Binary search works by repeatedly dividing the search interval in half.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ArrayDisplay 
              array={array}
              low={currentStepData?.low || -1}
              mid={currentStepData?.mid || -1}
              high={currentStepData?.high || -1}
              found={currentStepData?.found || false}
            />
          </CardContent>
        </Card>
        
        <SearchControls
          isPlaying={isPlaying}
          currentStep={currentStep}
          totalSteps={totalSteps}
          array={array}
          target={target}
          onStart={start}
          onPause={pause}
          onReset={reset}
          onNextStep={nextStep}
          onPrevStep={prevStep}
          onGenerateArray={() => generateArray(INITIAL_ARRAY_SIZE)}
          onSetRandomTarget={setRandomTarget}
          onSetTarget={setTargetValue}
          onSpeedChange={setSpeed}
        />
        
        <Card>
          <CardHeader>
            <CardTitle>How Binary Search Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Binary search is an efficient algorithm for finding an item in a sorted array
              with a time complexity of O(log n). It works like this:
            </p>
            
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Start with the middle element of the sorted array.</li>
              <li>If the target value equals the middle element, the search is complete.</li>
              <li>If the target value is less than the middle element, continue the search on the left half.</li>
              <li>If the target value is greater than the middle element, continue the search on the right half.</li>
              <li>Repeat steps 1-4 until the value is found or the search space is empty.</li>
            </ol>
            
            <h3 className="font-bold mt-4">Complexity</h3>
            <ul className="list-disc list-inside pl-4">
              <li><strong>Time Complexity:</strong> O(log n)</li>
              <li><strong>Space Complexity:</strong> O(1) for iterative implementation</li>
            </ul>
            
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <h3 className="font-bold mb-2">Prerequisites</h3>
              <p>Binary search requires the array to be sorted before searching.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}