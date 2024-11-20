import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const galleryImages = [
  {
    src: '/images/placeholder-interior.jpg',
    alt: 'Restaurant interior with warm lighting and elegant table settings',
    category: 'Interior'
  },
  {
    src: '/images/placeholder-dish1.jpg',
    alt: 'Signature pasta dish with fresh truffles',
    category: 'Cuisine'
  },
  {
    src: '/images/placeholder-wine.jpg',
    alt: 'Wine cellar featuring rare Italian vintages',
    category: 'Wine Cellar'
  },
  {
    src: '/images/placeholder-terrace.jpg',
    alt: 'Rooftop terrace with city views',
    category: 'Spaces'
  },
  {
    src: '/images/placeholder-dish2.jpg',
    alt: 'Seasonal seafood creation',
    category: 'Cuisine'
  },
  {
    src: '/images/placeholder-bar.jpg',
    alt: 'Elegant bar with craft cocktails',
    category: 'Bar'
  },
  {
    src: '/images/placeholder-private.jpg',
    alt: 'Private dining room setup',
    category: 'Private Events'
  },
  {
    src: '/images/placeholder-dessert.jpg',
    alt: 'Artisanal dessert presentation',
    category: 'Cuisine'
  },
  {
    src: '/images/placeholder-garden.jpg',
    alt: 'Outdoor garden dining area',
    category: 'Spaces'
  }
];

function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Gallery</h2>
          <p className="font-accent text-gold">A Visual Journey Through Osteria Luna</p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden bg-warm-gray/20">
                <Zoom>
                  {/* Replace div with actual img when images are available */}
                  <div className="w-full h-full flex items-center justify-center text-gold/50 group-hover:scale-105 transition-transform duration-500">
                    [Image: {image.alt}]
                  </div>
                </Zoom>
              </div>
              <div className="mt-4 space-y-1">
                <p className="font-accent text-gold/80 text-sm">{image.category}</p>
                <p className="text-cream/80 text-sm italic">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-body italic mb-8">
            Follow us on Instagram <a href="https://instagram.com/osterialuna" className="text-gold hover:text-gold/80 transition-colors">@osterialuna</a> for daily visual updates
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
