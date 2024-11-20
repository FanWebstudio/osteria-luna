import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaWineGlass, FaAward, FaHeart } from 'react-icons/fa';
import Awards from './Awards';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, seasonal produce"
    },
    {
      icon: <FaWineGlass className="w-6 h-6" />,
      title: "Curated Wines",
      description: "Extensive Italian wine selection"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Michelin Experience",
      description: "Award-winning culinary team"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Family Heritage",
      description: "Three generations of passion"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Main About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3"
                  alt="Chef preparing food"
                  className="object-cover rounded-sm shadow-xl"
                  loading="eager"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-sm" 
                style={{ zIndex: 1 }}
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <h2 className="heading-lg">Our Story</h2>
                  <p className="font-accent text-lg text-gold">Est. 2024 in Silicon Valley</p>
                </motion.div>
              </div>

              <div className="space-y-6 text-body">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  Nestled in the heart of Silicon Valley, Osteria Luna brings the authentic flavors 
                  and warmth of Italian cuisine to your table. Our journey began with a simple 
                  vision: to create an intimate dining experience that honors traditional 
                  Italian craftsmanship while embracing modern culinary innovation.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  Under the guidance of our Executive Chef Alessandro Romano, each dish 
                  tells a story of carefully sourced ingredients, time-honored techniques, 
                  and passionate artistry. Our seasonal menus celebrate the finest local 
                  produce alongside imported Italian delicacies, creating an unforgettable 
                  dining experience that bridges tradition and contemporary creativity.
                </motion.p>
              </div>

              <motion.div 
                className="grid grid-cols-2 gap-8 pt-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div>
                  <p className="font-accent text-gold text-lg mb-2">Location</p>
                  <p className="text-body">123 Innovation Drive</p>
                  <p className="text-body">Palo Alto, CA 94301</p>
                </div>
                <div>
                  <p className="font-accent text-gold text-lg mb-2">Hours</p>
                  <p className="text-body">Dinner: Tue-Sun</p>
                  <p className="text-body">5:30 PM - 10:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.1 }}
                className="bg-rich-black/10 p-6 rounded-sm backdrop-blur-sm hover:bg-rich-black/20 transition-colors"
              >
                <div className="text-gold mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-accent text-gold text-lg mb-2">{feature.title}</h3>
                <p className="text-body text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Awards and Recognition */}
          <motion.div 
            className="text-center space-y-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <p className="font-accent text-gold text-2xl">Recognition & Awards</p>
            <Awards />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
