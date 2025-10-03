import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  link = '#',
}: ProjectCardProps) {
  return (
    <article className="mb-24 md:mb-32">
      <div className="mb-6 relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
          {title}
        </h2>
        
        <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 whitespace-pre-line">
          {description}
        </div>
        
        <a
          href={link}
          className="inline-block text-sm border border-neutral-300 dark:border-neutral-700 px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
        >
          view —
        </a>
      </div>
    </article>
  );
}
