import React from 'react';
import { PhotoItem } from '../types';
import { X, Camera, MapPin, Sparkles } from 'lucide-react';

interface PhotoLightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  onClose
}) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#101419] border border-[#d4af37]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-6 bg-[#181c21] flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#0a0e13] border border-[#f2ca50]/30 text-[#f2ca50] font-label-caps text-[10px] uppercase">
                {photo.category}
              </span>
              <span className="text-xs text-[#d0c5af] flex items-center gap-1 font-meta-numeric">
                <MapPin className="w-3.5 h-3.5 text-[#f2ca50]" />
                {photo.location}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#99907c]">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{photo.gear}</span>
              <span className="text-[#ffe088] font-mono">({photo.resolution})</span>
            </div>
          </div>

          <h3 className="font-headline-md text-xl sm:text-2xl text-[#e0e2ea] font-serif mt-1">
            {photo.title}
          </h3>

          <p className="font-body-sm text-sm text-[#d0c5af]">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
