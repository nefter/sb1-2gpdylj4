// Base types
export interface BaseOutfitItem {
  id: number;
  name: string;
  imageUrl: string;
}

// Specific types for better type safety
export interface Hat extends BaseOutfitItem {}
export interface Shirt extends BaseOutfitItem {}
export interface Pants extends BaseOutfitItem {}

export interface OutfitState {
  selectedHat: number | null;
  selectedShirt: number | null;
  selectedPants: null;
}