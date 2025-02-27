import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { 
  Play, Pause, SkipForward, SkipBack, RefreshCw, Shuffle
} from 'lucide-react';

interface SortControlsProps {
  isPlaying: boolean;
  currentStep: number;
  totalSteps: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onGenerateArray: () => void;
  onSpeedChange: (value: number) => void;
}

export function SortControls({
  isPlaying,
  currentStep,
  totalSteps,
  onStart,
  onPause,
  onReset,
  onNextStep,
  onPrevStep,
  onGenerateArray,
  onSpeedChange,
}: SortControlsProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-x-2">
              <Button variant="outline" size="icon" onClick={onPrevStep} disabled={currentStep <= 0}>
                <SkipBack className="w-4 h-4" />
              </Button>
              
              {isPlaying ? (
                <Button variant="outline" size="icon" onClick={onPause}>
                  <Pause className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="outline" size="icon" onClick={onStart}>
                  <Play className="w-4 h-4" />
                </Button>
              )}
              
              <Button variant="outline" size="icon" onClick={onNextStep} 
                disabled={currentStep >= totalSteps - 1}>
                <SkipForward className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="icon" onClick={onReset}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            
            <Button onClick={onGenerateArray} size="sm" variant="outline">
              <Shuffle className="w-4 h-4 mr-1" />
              New Array
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-gray-500">
              Animation Speed
            </div>
            <Slider
              defaultValue={[500]}
              max={1000}
              min={100}
              step={100}
              onValueChange={(value) => onSpeedChange(1000 - value[0])}
            />
          </div>
          
          <div className="text-sm text-gray-500">
            Step: {currentStep + 1} / {totalSteps || 0}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}