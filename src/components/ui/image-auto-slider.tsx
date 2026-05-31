'use client';

import React from 'react';

interface ImageAutoSliderProps {
  images: string[];
  speed?: number;
}

export const ImageAutoSlider = ({ images, speed = 20 }: ImageAutoSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right ${speed}s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full bg-black relative overflow-hidden py-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />
        
        {/* Scrolling images container */}
        <div className="relative z-10 w-full">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-4 md:gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Event ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </div>
    </>
  );
};
