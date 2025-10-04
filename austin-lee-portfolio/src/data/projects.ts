export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  category: 'film' | 'stills';
  images?: string[]; // Array of image URLs for the project detail page
}

const sampleImages = Array(12).fill('https://res.cloudinary.com/djpmslpgu/image/upload/v1759512465/vagabond_1_bbn8j7.jpg');

export const projects: Project[] = [
  {
    id: 'duyanh-MG7',
    title: 'Duy AnhxMG7',
    description: `A visual journey through untold stories.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597359/MG7_IMG_6375_Original_rjfvk5.jpg',
    imageAlt: 'Duy Anh MG7',
    category: 'film',
    link: '/duyanh-MG7',
    images: [
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597293/MG7_IMG_6647_Original_pmgrxi.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597300/MG7_IMG_6640_Original_czyi06.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597305/MG7_IMG_6284_Original_axj1rh.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597328/MG7_IMG_6682_Original_j5susd.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597333/MG7_IMG_6658_Original_fd8uaj.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597339/MG7_IMG_6423_Original_tc5ewr.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597344/MG7_IMG_6691_Original_fzqpgr.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597349/MG7_IMG_6686_Original_qnmfuh.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597354/MG7_IMG_6838_Original_voskeu.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597359/MG7_IMG_6375_Original_rjfvk5.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597364/MG7_IMG_6404_Original_waqzsb.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597370/MG7_IMG_4530_Original_dmrhtc.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597374/MG7_IMG_4662_Original_xsxzbv.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597378/MG7_IMG_6493_Original_ctvpd3.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597385/MG7_IMG_6767_Original_gsns6s.jpg',
      'https://res.cloudinary.com/djpmslpgu/image/upload/v1759597391/MG7_IMG_6393_Original_kwd02f.jpg'
    ]
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    description: `Cities breathe in patterns. This series listens.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Neon Nights',
    category: 'stills',
    link: '/neon-nights',
    images: sampleImages
  },
  {
    id: 'desert-light',
    title: 'Desert Light',
    description: `A cinematic exploration of time, movement, and memory.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Desert Light',
    category: 'stills',
    link: '/desert-light',
    images: sampleImages
  },
  {
    id: 'monaco-grand-prix',
    title: 'Monaco Grand Prix',
    description: `Speed, precision, and the art of racing.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Monaco Grand Prix',
    category: 'stills',
    link: '/monaco-grand-prix',
    images: sampleImages
  },
  {
    id: 'mclaren-racing',
    title: 'McLaren Racing',
    description: `Behind the scenes with a Formula 1 legend.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'McLaren Racing',
    category: 'stills',
    link: '/mclaren-racing',
    images: sampleImages
  },
  {
    id: 'cellar-stories',
    title: 'Cellar Stories',
    description: `The quiet art of winemaking.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Cellar Stories',
    category: 'stills',
    link: '/cellar-stories',
    images: sampleImages
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    description: `Chasing light across landscapes.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Golden Hour',
    category: 'stills',
    link: '/golden-hour',
    images: sampleImages
  },
  {
    id: 'stage-lights',
    title: 'Stage Lights',
    description: `Performance art in motion.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Stage Lights',
    category: 'film',
    link: '/stage-lights',
    images: sampleImages
  },
  {
    id: 'mountain-trails',
    title: 'Mountain Trails',
    description: `Finding solitude in the peaks.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Mountain Trails',
    category: 'stills',
    link: '/mountain-trails',
    images: sampleImages
  },
  {
    id: 'urban-portraits',
    title: 'Urban Portraits',
    description: `Faces of the city.`,
    imageSrc: 'https://res.cloudinary.com/djpmslpgu/image/upload/v1759512482/vagabond_2_vo8j2l.jpg',
    imageAlt: 'Urban Portraits',
    category: 'stills',
    link: '/urban-portraits',
    images: sampleImages
  }
];
