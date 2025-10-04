'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PhotoGridItem {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

interface PhotoGridProps {
  items: PhotoGridItem[];
}

export default function PhotoGrid({ items }: PhotoGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link || '#'}
          className="relative aspect-square overflow-hidden group"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Bottom Gradient on Mobile, Full Overlay on Desktop */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 flex items-end md:items-center justify-center opacity-100 bg-gradient-to-t from-black/70 to-transparent md:from-transparent md:to-transparent ${
              hoveredId === item.id ? 'md:bg-black/60 md:opacity-100' : 'md:opacity-0'
            }`}
          >
            <div className="text-center w-full pb-4 md:pb-0">
              <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm tracking-widest text-gray-300 hidden md:block">
                — view —
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

