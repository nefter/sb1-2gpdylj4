import React from 'react';
import type { BaseOutfitItem } from '../types/outfit';
import { OUTFIT_CONFIG } from '../constants/config';

interface OutfitSelectorProps {
  items: BaseOutfitItem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  title: string;
}

export function OutfitSelector({ items, selectedId, onSelect, title }: OutfitSelectorProps) {
  const { columns, gap } = OUTFIT_CONFIG.gridLayout;
  const { width, height } = OUTFIT_CONFIG.imageSize;
  const { scale } = OUTFIT_CONFIG.animation;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className={`grid grid-cols-${columns} gap-${gap}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-${scale} ${
              selectedId === item.id ? 'ring-4 ring-blue-500' : ''
            }`}
            onClick={() => onSelect(item.id)}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-40 object-cover"
              width={width}
              height={height}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm text-center">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}