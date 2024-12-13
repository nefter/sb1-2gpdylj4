export function calculateTotalCombinations(
  hatsCount: number,
  shirtsCount: number,
  pantsCount: number
): number {
  return hatsCount * shirtsCount * pantsCount;
}

export function isOutfitComplete(
  selectedHat: number | null,
  selectedShirt: number | null,
  selectedPants: number | null
): boolean {
  return selectedHat !== null && selectedShirt !== null && selectedPants !== null;
}