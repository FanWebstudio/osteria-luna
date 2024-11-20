import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const eventSpaces = [
  {
    name: 'La Terrazza',
    capacity: '20-40 guests',
    description: 'An elegant rooftop terrace with panoramic views, perfect for intimate gatherings and cocktail receptions.',
    features: [
      'Retractable roof',
      'Private bar',
      'Outdoor heating',
      'Sound system',
      'Ambient lighting'
    ],
    imageUrl: '/images/placeholder-terrace.jpg'
  },
  {
    name: 'Sala Privata',
    capacity: '10-16 guests',
    description: 'Our intimate private dining room, ideal for business dinners and family celebrations.',
    features: [
      'Private entrance',
      'Dedicated service staff',
      'Wine display',
      'AV equipment',
      'Adjustable lighting'
    ],
    imageUrl: '/images/placeholder-private-room.jpg'
  },
  {
    name: 'Il Giardino',
    capacity: '30-60 guests',
    description: 'A charming garden space surrounded by olive trees and herbs, perfect for al fresco celebrations.',
    features: [
      'Garden lighting',
      'Covered areas',
      'Outdoor kitchen',
      'Herb garden',
      'Fountain feature'
    ],
    imageUrl: '/images/placeholder-garden.jpg'
  }
];

function PrivateEvents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="private-events" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Private Events</h2>
          <p className="font-accent text-gold">Memorable Occasions in Extraordinary Spaces</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventSpaces.map((space, index) => (
            <motion.div
              key={space.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-rich-black/30 rounded-lg overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <div className="w-full h-full bg-warm-gray/20 group-hover:scale-105 transition-transform duration-500">
                  {/* Image placeholder - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center text-gold/50">
                    [Image: {space.name}]
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl text-cream mb-1">{space.name}</h3>
                  <p className="font-accent text-gold">{space.capacity}</p>
                </div>

                <p className="text-body">{space.description}</p>

                <div className="space-y-2">
                  <p className="font-accent text-gold/80 text-sm">Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {space.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-cream/80">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-cream">Customized Event Planning</h3>
            <p className="text-body">
              Our dedicated events team will work with you to create a bespoke experience, 
              from menu customization to decor and entertainment arrangements.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-body italic">
              For inquiries about private events and custom experiences, please contact our events team
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Contact Events Team
              </a>
              <a href="/events-brochure.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Download Events Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivateEvents;
