import { useState, useCallback } from 'react';
import type { OutfitState } from '../types/outfit';

export function useOutfit() {
  const [outfit, setOutfit] = useState<OutfitState>({
    selectedHat: null,
    selectedShirt: null,
    selectedPants: null,
  });

  const updateOutfitItem = useCallback((category: keyof OutfitState, id: number) => {
    setOutfit(prev => ({
      ...prev,
      [category]: id,
    }));
  }, []);

  const resetOutfit = useCallback(() => {
    setOutfit({
      selectedHat: null,
      selectedShirt: null,
      selectedPants: null,
    });
  }, []);

  return {
    outfit,
    updateOutfitItem,
    resetOutfit,
  };
}