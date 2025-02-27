import React from 'react';

interface ArrayDisplayProps {
  array: number[];
  low?: number;
  mid?: number;
  high?: number;
  found?: boolean;
}

export function ArrayDisplay({ array, low = -1, mid = -1, high = -1, found = false }: ArrayDisplayProps) {
  return (
    <div className="flex items-center justify-center w-full overflow-x-auto py-6">
      <div className="flex gap-1">
        {array.map((value, index) => {
          let bgColor = "bg-gray-100";
          let textColor = "text-gray-700";
          
          // Outside search range
          if (low > -1 && high > -1 && (index < low || index > high)) {
            bgColor = "bg-gray-200 opacity-50";
          }
          
          // Current search range
          if (index >= low && index <= high) {
            bgColor = "bg-blue-100";
            textColor = "text-blue-700";
          }
          
          // Middle element
          if (index === mid) {
            bgColor = found ? "bg-green-200" : "bg-yellow-200";
            textColor = found ? "text-green-700" : "text-yellow-700";
          }
          
          return (
            <div 
              key={index}
              className={`flex flex-col items-center min-w-12 transition-all duration-300 ease-in-out`}
            >
              <div 
                className={`${bgColor} ${textColor} w-12 h-12 flex items-center justify-center 
                rounded-md font-mono border border-gray-300 shadow-sm`}
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{index}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}