'use client';

import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { notFound, useRouter } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

export default function ProjectDetail({ params }: { params: Promise<{ projectId: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const currentIndex = projects.findIndex(p => p.id === resolvedParams.projectId);
  const project = projects[currentIndex];

  if (!project || !project.images) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Spacer */}
      <div style={{ height: '128px' }} />
      
      <div className="flex px-16 py-8 gap-12">
        {/* Left Sidebar - Text Content (Sticky) */}
        <div className="w-72 flex-shrink-0 pr-8">
          <div className="sticky top-40">
            <h1 className="text-4xl font-light mb-8">
              {project.title}
            </h1>
            
            <div className="space-y-4 text-sm leading-relaxed text-gray-300 mb-8">
              <p>
                Formula 1 is more than thunderous speed. More than the spectacle. Blink twice, and you miss the part that matters.
              </p>
              
              <p>
                This project was made possible by <strong className="text-white">Essess Magazine</strong> and their collaborative efforts to bring it to life. For their <em>Issue 3</em>, I wanted to capture a slow study—a visual essay of:
              </p>
              
              <p className="italic">
                Stillness before the storm<br/>
                Blur that follows<br/>
                Terrain that absorbs
              </p>
              
              <p>
                A range of medium-format film photographs were displayed as part of the issue. The video linked here holds the moving images I captured during that same quest—the visual thread that ran alongside the stills.
              </p>
              
              <p>
                Over four days at Spa, the work didn't chase the cars—it watched what they passed by. It saw what was left behind. The quiet moments. The pressure before release. The humans beneath the helmets.
              </p>
              
              <p>
                Spa revealed itself as a paradox: a circuit of violence surrounded by whispering trees. The fastest sport in the world, framed in stillness.
              </p>
              
              <p>
                This became a study of those contradictions. This was <strong className="text-white">Blink Twice</strong>.
              </p>
            </div>
            
            <button className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity">
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black">
                  <path d="M8 3L3 8M3 3h5v5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              Share
            </button>
          </div>
        </div>

        {/* Right Side - Photo Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed top-32 right-16 flex gap-4 z-40">
        <Link
          href={`/${prevProject.id}`}
          className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <Link
          href={`/${nextProject.id}`}
          className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}