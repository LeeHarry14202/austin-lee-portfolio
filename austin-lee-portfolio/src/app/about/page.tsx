import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Spacer */}
      <div style={{ height: '128px' }} />
      
      {/* About Content - Grid Layout */}
      <main className="h-[calc(100vh-128px)] px-16">
        <div className="h-full flex items-center gap-12 max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg"
                alt="Austin Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-3">
                DIRECTOR | WRITER | CINEMATOGRAPHER
              </h1>
              <a 
                href="mailto:austin.lee@hotmail.com" 
                className="text-gray-400 hover:text-white transition-colors tracking-wide text-sm"
              >
                AUSTIN.LEE@HOTMAIL.COM
              </a>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
              <p>
                <strong className="text-white">I&apos;m a director drawn to real stories—told through film, commercials, and documentaries.</strong> My work is grounded in authenticity, often shaped by the high-stakes world of sport, where I&apos;ve spent years capturing people under intense pressure. I&apos;ve collaborated with elite athletes and teams, working across Formula 1 and with brands like McLaren, Ferrari, Koenigsegg, and Disney.
              </p>
              
              <p>
                At the core of my approach is a simple belief: the best stories aren&apos;t just watched—they&apos;re felt. Whether it&apos;s a cinematic brand campaign or a docuseries, I strive to create work that resonates on a deeply human level.
              </p>
              
              <p>
                That&apos;s why sport continues to inspire me. Like great storytelling, it&apos;s driven by stakes—something to lose, something to fight for. But the most powerful stories aren&apos;t about the final score. They&apos;re about transformation. About change.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

