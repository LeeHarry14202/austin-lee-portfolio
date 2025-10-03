export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  category: 'film' | 'stills';
}

export const projects: Project[] = [
  {
    id: 'blink-twice',
    title: 'Blink Twice',
    description: `A visual journey through untold stories.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Blink Twice',
    category: 'film',
    link: '#'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    description: `Cities breathe in patterns. This series listens.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Neon Nights',
    category: 'stills',
    link: '#'
  },
  {
    id: 'desert-light',
    title: 'Desert Light',
    description: `A cinematic exploration of time, movement, and memory.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Desert Light',
    category: 'stills',
    link: '#'
  },
  {
    id: 'monaco-grand-prix',
    title: 'Monaco Grand Prix',
    description: `Speed, precision, and the art of racing.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Monaco Grand Prix',
    category: 'stills',
    link: '#'
  },
  {
    id: 'mclaren-racing',
    title: 'McLaren Racing',
    description: `Behind the scenes with a Formula 1 legend.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'McLaren Racing',
    category: 'stills',
    link: '#'
  },
  {
    id: 'cellar-stories',
    title: 'Cellar Stories',
    description: `The quiet art of winemaking.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Cellar Stories',
    category: 'stills',
    link: '#'
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    description: `Chasing light across landscapes.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Golden Hour',
    category: 'stills',
    link: '#'
  },
  {
    id: 'stage-lights',
    title: 'Stage Lights',
    description: `Performance art in motion.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Stage Lights',
    category: 'film',
    link: '#'
  },
  {
    id: 'mountain-trails',
    title: 'Mountain Trails',
    description: `Finding solitude in the peaks.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Mountain Trails',
    category: 'stills',
    link: '#'
  },
  {
    id: 'urban-portraits',
    title: 'Urban Portraits',
    description: `Faces of the city.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Urban Portraits',
    category: 'stills',
    link: '#'
  }
];
