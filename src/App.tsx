import React from 'react';
import { Palette, RotateCcw } from 'lucide-react';
import { OutfitSelector } from './components/OutfitSelector';
import { CombinationCounter } from './components/CombinationCounter';
import { hats, shirts, pants } from './data/outfitItems';
import { useOutfit } from './hooks/useOutfit';
import { isOutfitComplete } from './utils/combinations';

function App() {
  const { outfit, updateOutfitItem, resetOutfit } = useOutfit();

  const outfitComplete = isOutfitComplete(
    outfit.selectedHat,
    outfit.selectedShirt,
    outfit.selectedPants
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-10 h-10 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">Character Designer</h1>
          </div>
          <p className="text-lg text-gray-600">
            Mix and match outfits to create your unique style!
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <CombinationCounter
            hatsCount={hats.length}
            shirtsCount={shirts.length}
            pantsCount={pants.length}
          />
          <button
            onClick={resetOutfit}
            className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <OutfitSelector
            title="Choose a Hat"
            items={hats}
            selectedId={outfit.selectedHat}
            onSelect={(id) => updateOutfitItem('selectedHat', id)}
          />

          <OutfitSelector
            title="Select a Shirt"
            items={shirts}
            selectedId={outfit.selectedShirt}
            onSelect={(id) => updateOutfitItem('selectedShirt', id)}
          />

          <OutfitSelector
            title="Pick Pants"
            items={pants}
            selectedId={outfit.selectedPants}
            onSelect={(id) => updateOutfitItem('selectedPants', id)}
          />

          {outfitComplete && (
            <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-800 text-center">
              Great choice! Your outfit is complete!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;