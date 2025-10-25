import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Spacer */}
      <div style={{ height: '128px' }} />
      
      {/* Mobile Layout: Title -> Email -> Photo -> Description */}
      <main className="md:hidden py-8">
        {/* Title */}
        <h1 className="text-base sm:text-xl font-light tracking-widest text-center whitespace-nowrap" style={{ paddingLeft: '1rem', paddingRight: '1rem', marginBottom: '1rem' }}>
          PHOTOGRAPHER | DESIGNER | STORYTELLER
        </h1>
        
        {/* Email */}
        <a
          href="mailto:austinworks.creative@gmail.com"
          className="block text-gray-400 hover:text-white transition-colors tracking-wide text-xs sm:text-sm text-center whitespace-nowrap" style={{ paddingLeft: '1rem', paddingRight: '1rem', marginBottom: '1rem' }}
        >
          AUSTINWORKS.CREATIVE@GMAIL.COM
        </a>
        
        {/* Photo */}
        <div className="max-w-md mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem', marginBottom: '1rem' }}>
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://res.cloudinary.com/djpmslpgu/image/upload/v1761406291/aboutme_fjdgko.jpg"
              alt="Austin Lee"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Description */}
        <div className="text-gray-300 leading-relaxed text-sm text-justify" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            I&apos;m Austin, a Saigon-based photographer and designer with a background in engineering. My path began in a different field, but a deep passion for creativity led me to pursue full-time freelance work in the arts. Today, I collaborate with artists and brands to craft striking visuals and thoughtful designs that bridge fashion, lifestyle, and culture.
          </p>

          <p style={{ marginBottom: '1rem' }}>
            At the heart of my practice is a belief that the most powerful stories aren&apos;t just seen—they&apos;re experienced. Whether through a fashion editorial, a lifestyle campaign, or a brand identity project, I aim to create work that resonates with authenticity and leaves a lasting impression.
          </p>

          <p>
            My approach to every project is rooted in simplicity and intention. I aim to balance clarity with emotion, stripping away the unnecessary so the essence of each idea shines through. Each collaboration is shaped by curiosity, honesty, and a willingness to experiment, because I believe the best work often emerges when structure and play meet.
          </p>
        </div>
      </main>

      {/* Desktop Layout: Vertical design like mobile */}
      <main className="hidden md:flex min-h-[calc(100vh-128px)] items-center justify-center py-12">
        <div className="max-w-4xl">
          {/* Title */}
          <div style={{ marginBottom: '1rem' }}>
            <h1 className="text-4xl font-bold tracking-widest text-left whitespace-nowrap">
              <span className="font-bold">PHOTOGRAPHER | DESIGNER | STORYTELLER</span>
            </h1>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1rem' }}>
            <a
              href="mailto:austinworks.creative@gmail.com"
              className="block text-gray-400 hover:text-white transition-colors text-sm text-center"
            >
              AUSTINWORKS.CREATIVE@GMAIL.COM
            </a>
          </div>

           {/* Photo */}
           <div style={{ marginBottom: '1rem' }}>
             <div className="relative aspect-[3/4] w-full mx-auto">
              <Image
                src="https://res.cloudinary.com/djpmslpgu/image/upload/v1761406291/aboutme_fjdgko.jpg"
                alt="Austin Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-300 leading-relaxed text-base text-justify">
            <p style={{ marginBottom: '1rem' }}>
              I&apos;m Austin, a Saigon-based photographer and designer with a background in engineering. My path began in a different field, but a deep passion for creativity led me to pursue full-time freelance work in the arts. Today, I collaborate with artists and brands to craft striking visuals and thoughtful designs that bridge fashion, lifestyle, and culture.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              At the heart of my practice is a belief that the most powerful stories aren&apos;t just seen—they&apos;re experienced. Whether through a fashion editorial, a lifestyle campaign, or a brand identity project, I aim to create work that resonates with authenticity and leaves a lasting impression.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              My approach to every project is rooted in simplicity and intention. I aim to balance clarity with emotion, stripping away the unnecessary so the essence of each idea shines through. Each collaboration is shaped by curiosity, honesty, and a willingness to experiment, because I believe the best work often emerges when structure and play meet.
            </p>

            <p className="text-gray-400 text-center">
              Love yall :)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

