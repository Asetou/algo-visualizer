import { useState, useEffect, useRef } from 'react';

export type SortingStep = {
  array: number[];
  comparing: number[] | null;
  swapping: number[] | null;
  sorted: number[];
  message: string;
};

export const useBubbleSort = (initialArray: number[] = []) => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(500); // ms per step
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate a new random array
  const generateArray = (size: number = 10) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
    resetSort();
    return newArray;
  };

  // Reset the sort state
  const resetSort = () => {
    setSteps([]);
    setCurrentStep(-1);
    setIsPlaying(false);
    setIsComplete(false);
  };

  // Run the bubble sort algorithm and generate all steps
  const runSort = () => {
    // Clone the array to avoid modifying the original
    const workingArray = [...array];
    const n = workingArray.length;
    const sortSteps: SortingStep[] = [];
    const sortedIndices: number[] = [];
    
    // Add initial state
    sortSteps.push({
      array: [...workingArray],
      comparing: null,
      swapping: null,
      sorted: [],
      message: "Starting bubble sort algorithm with unsorted array."
    });
    
    // Perform bubble sort and track each step
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      
      for (let j = 0; j < n - i - 1; j++) {
        // Comparing step
        sortSteps.push({
          array: [...workingArray],
          comparing: [j, j + 1],
          swapping: null,
          sorted: [...sortedIndices],
          message: `Comparing elements at indices ${j} and ${j+1}: ${workingArray[j]} and ${workingArray[j+1]}`
        });
        
        if (workingArray[j] > workingArray[j + 1]) {
          // Mark as swapping
          sortSteps.push({
            array: [...workingArray],
            comparing: null,
            swapping: [j, j + 1],
            sorted: [...sortedIndices],
            message: `${workingArray[j]} > ${workingArray[j+1]}, swapping elements`
          });
          
          // Perform the swap
          const temp = workingArray[j];
          workingArray[j] = workingArray[j + 1];
          workingArray[j + 1] = temp;
          swapped = true;
          
          // After swap state
          sortSteps.push({
            array: [...workingArray], // Important: use the updated array
            comparing: null,
            swapping: null,
            sorted: [...sortedIndices],
            message: `Swapped: now have ${workingArray[j]} and ${workingArray[j+1]}`
          });
        } else {
          // No swap needed
          sortSteps.push({
            array: [...workingArray],
            comparing: null,
            swapping: null,
            sorted: [...sortedIndices],
            message: `${workingArray[j]} ≤ ${workingArray[j+1]}, no swap needed`
          });
        }
      }
      
      // After each pass, the largest unsorted element bubbles to its correct position
      sortedIndices.push(n - i - 1);
      
      sortSteps.push({
        array: [...workingArray],
        comparing: null,
        swapping: null,
        sorted: [...sortedIndices],
        message: `Completed pass ${i+1}. Element ${workingArray[n-i-1]} at index ${n-i-1} is now in its correct position.`
      });
      
      // If no swaps occurred in this pass, the array is sorted
      if (!swapped) {
        // Mark all remaining elements as sorted
        for (let k = 0; k < n - i - 1; k++) {
          if (!sortedIndices.includes(k)) {
            sortedIndices.push(k);
          }
        }
        
        sortedIndices.sort((a, b) => a - b); // Sort for clarity
        
        sortSteps.push({
          array: [...workingArray],
          comparing: null,
          swapping: null,
          sorted: [...sortedIndices],
          message: "No swaps performed in this pass. The array is now sorted!"
        });
        break;
      }
    }
    
    // Ensure we mark all elements as sorted in the final state
    if (sortedIndices.length < n) {
      const allIndices = Array.from({ length: n }, (_, i) => i);
      
      sortSteps.push({
        array: [...workingArray],
        comparing: null,
        swapping: null,
        sorted: allIndices,
        message: "Bubble sort complete! The array is now fully sorted."
      });
    }
    
    setSteps(sortSteps);
    setCurrentStep(0);
    return sortSteps;
  };

  // Control functions
  const start = () => {
    if (steps.length === 0) {
      runSort();
    }
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const reset = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
    setIsComplete(false);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPlaying(false);
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        nextStep();
      }, speed);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, currentStep, speed]);

  // Get the current step data
  const currentStepData = currentStep >= 0 ? steps[currentStep] : {
    array: array,
    comparing: null,
    swapping: null,
    sorted: [],
    message: "Press start to begin the visualization."
  };

  return {
    array: currentStepData.array, // Important: return the array from the current step
    currentStepData,
    steps,
    currentStep,
    isPlaying,
    isComplete,
    totalSteps: steps.length,
    generateArray,
    start,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
  };
};