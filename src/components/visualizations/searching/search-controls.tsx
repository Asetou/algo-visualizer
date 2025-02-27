import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { 
  Play, Pause, SkipForward, SkipBack, RefreshCw, Search, Shuffle
} from 'lucide-react';

interface SearchControlsProps {
  isPlaying: boolean;
  currentStep: number;
  totalSteps: number;
  array: number[];
  target: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onGenerateArray: () => void;
  onSetRandomTarget: () => void;
  onSetTarget: (value: number) => void;
  onSpeedChange: (value: number) => void;
}

export function SearchControls({
  isPlaying,
  currentStep,
  totalSteps,
  target,
  onStart,
  onPause,
  onReset,
  onNextStep,
  onPrevStep,
  onGenerateArray,
  onSetRandomTarget,
  onSetTarget,
  onSpeedChange,
}: SearchControlsProps) {
  const [targetInput, setTargetInput] = useState(target.toString());

  const handleTargetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numValue = parseInt(targetInput);
    if (!isNaN(numValue)) {
      onSetTarget(numValue);
    }
  };

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
            
            <div className="flex gap-2 flex-wrap">
              <form onSubmit={handleTargetSubmit} className="flex items-center gap-2">
                <Input
                  type="number"
                  value={targetInput}
                  onChange={(e) => setTargetInput(e.target.value)}
                  className="w-20"
                  placeholder="Target"
                />
                <Button type="submit" size="sm" variant="secondary">
                  <Search className="w-4 h-4 mr-1" />
                  Set
                </Button>
              </form>
              
              <Button onClick={onSetRandomTarget} size="sm" variant="secondary">
                <Shuffle className="w-4 h-4 mr-1" />
                Random Target
              </Button>
              
              <Button onClick={onGenerateArray} size="sm" variant="outline">
                New Array
              </Button>
            </div>
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
          
          <div className="text-sm">
            <div className="font-medium">
              Searching for: <span className="text-blue-600">{target}</span>
            </div>
            <div className="text-gray-500">
              Step: {currentStep + 1} / {totalSteps || 0}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}