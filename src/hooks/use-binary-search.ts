import { useState, useEffect, useRef } from 'react';

export type SearchStep = {
  array: number[];
  low: number;
  mid: number;
  high: number;
  target: number;
  found: boolean;
  message: string;
};

export const useBinarySearch = (initialArray: number[] = [], initialTarget: number = 0) => {
  const [array, setArray] = useState<number[]>(initialArray.sort((a, b) => a - b));
  const [target, setTarget] = useState<number>(initialTarget);
  const [steps, setSteps] = useState<SearchStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(800); // ms per step
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate a sorted array of given size
  const generateArray = (size: number = 15) => {
    // Generate unique sorted numbers
    const newArray = Array.from(
      { length: size }, 
      () => Math.floor(Math.random() * 100) + 1
    ).sort((a, b) => a - b);
    
    // Remove duplicates
    const uniqueArray = [...new Set(newArray)];
    
    setArray(uniqueArray);
    resetSearch();
    return uniqueArray;
  };

  // Set a random valid target from the array
  const setRandomTarget = () => {
    if (array.length === 0) return;
    const randomIndex = Math.floor(Math.random() * array.length);
    setTarget(array[randomIndex]);
    resetSearch();
  };

  // Set a specific target value
  const setTargetValue = (value: number) => {
    setTarget(value);
    resetSearch();
  };

  // Reset the search state
  const resetSearch = () => {
    setSteps([]);
    setCurrentStep(-1);
    setIsPlaying(false);
    setIsComplete(false);
  };

  // Run the binary search algorithm
  const runSearch = () => {
    const searchSteps: SearchStep[] = [];
    let low = 0;
    let high = array.length - 1;
    let found = false;
    
    // Initial state
    searchSteps.push({
      array: [...array],
      low,
      high,
      mid: Math.floor((low + high) / 2),
      target,
      found: false,
      message: `Starting binary search for target ${target}. Search range: [${low}, ${high}]`
    });
    
    while (low <= high && !found) {
      const mid = Math.floor((low + high) / 2);
      
      // Check current value
      if (array[mid] === target) {
        found = true;
        searchSteps.push({
          array: [...array],
          low,
          high,
          mid,
          target,
          found: true,
          message: `Found target ${target} at index ${mid}!`
        });
      } else if (array[mid] < target) {
        // Search right half
        low = mid + 1;
        searchSteps.push({
          array: [...array],
          low,
          high,
          mid,
          target,
          found: false,
          message: `${array[mid]} < ${target}, so search right half. New range: [${low}, ${high}]`
        });
      } else {
        // Search left half
        high = mid - 1;
        searchSteps.push({
          array: [...array],
          low,
          high,
          mid,
          target,
          found: false,
          message: `${array[mid]} > ${target}, so search left half. New range: [${low}, ${high}]`
        });
      }
    }
    
    // If target not found
    if (!found) {
      searchSteps.push({
        array: [...array],
        low,
        high,
        mid: -1,
        target,
        found: false,
        message: `Target ${target} not found in the array.`
      });
    }
    
    setSteps(searchSteps);
    setCurrentStep(0);
    return searchSteps;
  };

  // Control functions
  const start = () => {
    if (steps.length === 0) {
      runSearch();
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

  const currentStepData = currentStep >= 0 ? steps[currentStep] : null;

  return {
    array,
    target,
    currentStepData,
    steps,
    currentStep,
    isPlaying,
    isComplete,
    totalSteps: steps.length,
    generateArray,
    setRandomTarget,
    setTargetValue,
    start,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
  };
};