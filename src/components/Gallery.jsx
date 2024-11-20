import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200',
    alt: 'Elegant dining room with warm lighting and sophisticated decor'
  },
  {
    src: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1200',
    alt: 'Fresh pasta with shaved truffles'
  },
  {
    src: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1200',
    alt: 'Extensive wine cellar collection'
  },
  {
    src: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1200',
    alt: 'Seared scallops with seasonal vegetables'
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200',
    alt: 'Private dining room with chandelier'
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200',
    alt: 'Artisanal cocktail preparation'
  },
  {
    src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200',
    alt: 'Chocolate dessert with gold leaf'
  },
  {
    src: 'https://images.unsplash.com/photo-1515539408953-9403f070ad2e?q=80&w=1200',
    alt: 'Outdoor terrace dining area'
  }
];

function GalleryImage({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-square overflow-hidden">
      <div 
        className={`
          absolute inset-0 bg-rich-black/5
          ${!isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300
        `}
      />
      <img
        src={image.src}
        alt={image.alt}
        className={`
          w-full h-full object-cover
          transition-transform duration-500 hover:scale-110
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-display text-rich-black">
              Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={image.src}
                image={image}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
