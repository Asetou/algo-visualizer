import React from 'react';

interface ArrayBarsProps {
  array: number[];
  comparing: number[] | null;
  swapping: number[] | null;
  sorted: number[];
  maxValue?: number;
}

export function ArrayBars({ array, comparing, swapping, sorted, maxValue = 100 }: ArrayBarsProps) {
  // Calculate the real maxValue based on the actual array
  const realMaxValue = array.length > 0 ? Math.max(...array, maxValue) : maxValue;
  
  const getBarColor = (index: number) => {
    if (comparing && comparing.includes(index)) return 'bg-yellow-500';
    if (swapping && swapping.includes(index)) return 'bg-red-500';
    if (sorted && sorted.includes(index)) return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="flex items-end justify-center h-64 gap-1 p-4">
      {array.map((value, index) => (
        <div
          key={index}
          className="flex flex-col items-center transition-all duration-300"
        >
          <div
            className={`w-8 ${getBarColor(index)} rounded-t transition-all duration-300 flex items-end justify-center`}
            style={{ height: `${(value / realMaxValue) * 100}%` }}
          >
            <span className="text-xs font-semibold text-white p-1">{value}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">{index}</div>
        </div>
      ))}
    </div>
  );
}