'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PhotoGrid from '@/components/PhotoGrid';
import { projects } from '@/data/projects';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Home() {
  const { restoreScrollPosition } = useScrollPosition();
  
  // Restore scroll position when returning to home page
  useEffect(() => {
    restoreScrollPosition();
  }, [restoreScrollPosition]);

  const allProjects = projects.map(p => ({
    id: p.id,
    title: p.title,
    imageSrc: p.imageSrc,
    imageAlt: p.imageAlt,
    link: p.link,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Spacer */}
      <div style={{ height: '64px' }} />
      
      {/* Photo Grid - starts right below nav */}
      <main>
        <PhotoGrid items={allProjects} />
      </main>
    </div>
  );
}
