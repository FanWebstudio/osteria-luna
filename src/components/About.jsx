import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5">
              <img
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3"
                alt="Chef preparing food"
                className="object-cover rounded-sm"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 -z-10 rounded-sm" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="heading-lg">Our Story</h2>
              <p className="font-accent text-lg text-gold">Est. 2024</p>
            </div>

            <div className="space-y-4 text-body">
              <p>
                Nestled in the heart of the city, Osteria Luna brings the authentic flavors 
                and warmth of Italian cuisine to your table. Our journey began with a simple 
                vision: to create an intimate dining experience that honors traditional 
                Italian craftsmanship while embracing modern culinary innovation.
              </p>
              <p>
                Under the guidance of our Executive Chef Alessandro Romano, each dish 
                tells a story of carefully sourced ingredients, time-honored techniques, 
                and passionate artistry. Our seasonal menus celebrate the finest local 
                produce alongside imported Italian delicacies, creating an unforgettable 
                dining experience that bridges tradition and contemporary creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="font-accent text-gold text-lg mb-2">Location</p>
                <p className="text-body">123 Culinary Avenue</p>
                <p className="text-body">Metropolitan City, MC 12345</p>
              </div>
              <div>
                <p className="font-accent text-gold text-lg mb-2">Hours</p>
                <p className="text-body">Dinner: Tue-Sun</p>
                <p className="text-body">5:30 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
