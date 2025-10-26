'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { use, useState, useEffect } from 'react';

// Image Skeleton Component
function ImageSkeleton() {
  return (
    <div className="w-full h-48 bg-gray-700 animate-pulse rounded-lg"></div>
  );
}

// Optimized Image Component with Loading State
function OptimizedImage({
  src,
  alt,
  index
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Smart loading strategy based on image position - ưu tiên load ảnh đầu trong mosaic
  const getLoadingStrategy = () => {
    if (index < 8) return "eager"; // Load first 8 images eagerly for mosaic view
    return "lazy";
  };

  const getPriority = () => {
    return index < 6; // High priority for first 6 images in mosaic
  };

  // Preload ảnh đầu tiên ngay lập tức
  useEffect(() => {
    if (index === 0) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
    }
  }, [index, src]);

  return (
    <>
      {isLoading && <ImageSkeleton />}
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className={`w-full h-auto object-contain transition-all duration-300 hover:scale-105 rounded-lg cursor-pointer ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1536px) 33vw, 25vw"
          loading={getLoadingStrategy()}
          priority={getPriority()}
          quality={85}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
        />
      ) : (
        <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500 text-sm rounded-lg">
          Failed to load image
        </div>
      )}
    </>
  );
}

export default function ProjectDetail({ params }: { params: Promise<{ projectId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const currentIndex = projects.findIndex(p => p.id === resolvedParams.projectId);
  const project = projects[currentIndex];

  // State for mobile navigation visibility
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  if (!project || !project.images || !Array.isArray(project.images) || project.images.length === 0) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  if (!prevProject || !nextProject) {
    notFound();
  }

  // Reset scroll position to top immediately on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [resolvedParams.projectId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        router.push(`/${prevProject.id}`);
      } else if (event.key === 'ArrowRight') {
        router.push(`/${nextProject.id}`);
      } else if (event.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevProject.id, nextProject.id, router]);

  // Mobile navigation hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show buttons when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsNavVisible(true);
      }
      // Hide buttons when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Preload ảnh đầu tiên để tối ưu loading */}
      <link
        rel="preload"
        as="image"
        href={project.images![0]}
        fetchPriority="high"
      />
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Spacer */}
        <div style={{ height: '64px' }} />
      
      {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
      <div className="md:flex md:px-16 py-8 md:gap-12">
        {/* Text Content - Top on mobile, Left sidebar (sticky) on desktop */}
        <div className="md:w-72 md:flex-shrink-0 md:pr-8 mb-8 md:mb-0">
          <div className="md:sticky md:top-40">
            {/* Title with navigation arrows on mobile */}
            <div className="relative flex items-center justify-center mb-6 md:mb-8">
              {/* Left Arrow - Mobile only */}
              <Link
                href={`/${prevProject.id}`}
                className={`fixed left-4 top-1/2 -translate-y-1/2 md:hidden w-12 h-12 bg-white/1 backdrop-blur-xl rounded-full flex items-center justify-center hover:opacity-60 transition-all duration-300 z-40 ${
                  isNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                }`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-light text-center md:hidden" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                {project.title}
              </h1>
              <h1 className="hidden md:block text-3xl md:text-4xl font-light text-center">
                {project.title}
              </h1>
              
              {/* Right Arrow - Mobile only */}
              <Link
                href={`/${nextProject.id}`}
                className={`fixed right-4 top-1/2 -translate-y-1/2 md:hidden w-12 h-12 bg-white/1 backdrop-blur-xl rounded-full flex items-center justify-center hover:opacity-60 transition-all duration-300 z-40 ${
                  isNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed text-gray-300 mb-6 md:mb-8 md:hidden">
              <div className="text-white font-medium text-base mb-4 whitespace-pre-line" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                {project.description}
              </div>
            </div>
            <div className="hidden md:block space-y-4 text-sm leading-relaxed text-gray-300 mb-6 md:mb-8">
              <div className="text-white font-medium text-base mb-4 whitespace-pre-line">
                {project.description}
              </div>
            </div>
            
          </div>
        </div>

        {/* Masonry View - Below text on mobile, Right side on desktop */}
        <div className="flex-1 max-w-6xl md:hidden" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden break-inside-avoid bg-gray-900 rounded-lg group"
                style={{ marginTop: '24px', marginBottom: '24px' }}
              >
                <OptimizedImage
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-1 max-w-6xl">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden break-inside-avoid bg-gray-900 rounded-lg group"
                style={{ marginTop: '24px', marginBottom: '24px' }}
              >
                <OptimizedImage
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop only */}
      {/* Left Arrow - Hidden */}
      {/*
      <Link
        href={`/${prevProject.id}`}
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-16 w-16 h-16 items-center justify-center hover:opacity-60 transition-opacity z-40"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
      */}
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
    </>
  );
}