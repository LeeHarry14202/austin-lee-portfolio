'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

export default function ProjectDetail({ params }: { params: Promise<{ projectId: string }> }) {
  const resolvedParams = use(params);
  const currentIndex = projects.findIndex(p => p.id === resolvedParams.projectId);
  const project = projects[currentIndex];

  if (!project || !project.images || !Array.isArray(project.images) || project.images.length === 0) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
  
  if (!prevProject || !nextProject) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Spacer */}
      <div style={{ height: '128px' }} />
      
      {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
      <div className="md:flex px-6 md:px-16 py-8 md:gap-12">
        {/* Text Content - Top on mobile, Left sidebar (sticky) on desktop */}
        <div className="md:w-72 md:flex-shrink-0 md:pr-8 mb-8 md:mb-0">
          <div className="md:sticky md:top-40">
            {/* Title with navigation arrows on mobile */}
            <div className="relative flex items-center justify-center mb-6 md:mb-8">
              {/* Left Arrow - Mobile only */}
              <Link
                href={`/${prevProject.id}`}
                className="absolute left-0 md:hidden w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity z-40"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-light text-center">
                {project.title}
              </h1>
              
              {/* Right Arrow - Mobile only */}
              <Link
                href={`/${nextProject.id}`}
                className="absolute right-0 md:hidden w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity z-40"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed text-gray-300 mb-6 md:mb-8">
              <p>
              </p>
              
              <p>
              </p>
              
              <p className="italic">

              </p>
              
              <p>
              </p>
              
              <p>
              </p>
              
              <p>
              </p>
              
              <p>
              </p>
            </div>
            
            <button className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity mb-8 md:mb-0">
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black">
                  <path d="M8 3L3 8M3 3h5v5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Photo Grid - Below text on mobile, Right side on desktop */}
        <div className="flex-1 max-w-5xl">
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 50vw, 600px"
                  loading={index < 4 ? "eager" : "lazy"}
                  priority={index < 2}
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop only */}
      {/* Left Arrow */}
      <Link
        href={`/${prevProject.id}`}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-16 w-16 h-16 items-center justify-center hover:opacity-60 transition-opacity z-40"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
      
      {/* Right Arrow */}
      <Link
        href={`/${nextProject.id}`}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-16 w-16 h-16 items-center justify-center hover:opacity-60 transition-opacity z-40"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Link>
    </div>
  );
}