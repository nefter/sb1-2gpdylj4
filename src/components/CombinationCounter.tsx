import React from 'react';
import { Calculator } from 'lucide-react';
import { calculateTotalCombinations } from '../utils/combinations';

interface CombinationCounterProps {
  hatsCount: number;
  shirtsCount: number;
  pantsCount: number;
}

export function CombinationCounter({
  hatsCount,
  shirtsCount,
  pantsCount,
}: CombinationCounterProps) {
  const totalCombinations = calculateTotalCombinations(
    hatsCount,
    shirtsCount,
    pantsCount
  );

  return (
    <div className="flex items-center justify-center space-x-2 bg-blue-100 p-4 rounded-lg mb-8">
      <Calculator className="w-6 h-6 text-blue-600" />
      <p className="text-lg font-medium text-blue-800">
        Total possible combinations:{' '}
        <span className="font-bold">{totalCombinations}</span>
      </p>
    </div>
  );
}