import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWineGlassAlt, FaLeaf, FaClock } from 'react-icons/fa';

const tastingMenus = [
  {
    name: "Chef's Signature",
    price: "$145",
    description: "A seven-course journey through our most celebrated dishes",
    duration: "2.5 hours",
    dietary: "Vegetarian option available",
    courses: [
      "Amuse-bouche",
      "Carpaccio di Manzo",
      "Risotto ai Funghi",
      "Branzino al Limone",
      "Agnello Brasato",
      "Pre-dessert",
      "Tiramisù Moderno"
    ],
    note: "Wine pairing available (+$95)",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Degustazione Luna",
    price: "$195",
    description: "Our premium nine-course tasting experience",
    duration: "3.5 hours",
    dietary: "Vegetarian option available",
    courses: [
      "Selection of Amuse-bouche",
      "Ostriche e Caviale",
      "Capesante al Tartufo",
      "Ravioli di Aragosta",
      "Risotto allo Zafferano",
      "Branzino in Crosta di Sale",
      "Filetto di Manzo Wagyu",
      "Pre-dessert",
      "Gran Dessert Luna"
    ],
    note: "Premium wine pairing available (+$145)",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

function MenuCard({ menu, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-rich-black/30 rounded-sm overflow-hidden border border-gold/20 hover:border-gold/40 transition-all hover:shadow-xl group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={menu.image}
          alt={`${menu.name} presentation`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-baseline">
          <h3 className="font-display text-2xl text-cream">{menu.name}</h3>
          <span className="font-accent text-xl text-gold">{menu.price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-6">
        <p className="text-body italic">{menu.description}</p>

        {/* Info Icons */}
        <div className="flex justify-between text-sm text-gold/80">
          <div className="flex items-center gap-2">
            <FaClock className="w-4 h-4" />
            <span>{menu.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLeaf className="w-4 h-4" />
            <span>{menu.dietary}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWineGlassAlt className="w-4 h-4" />
            <span>Wine Pairing</span>
          </div>
        </div>

        {/* Course List */}
        <div className="space-y-3 pt-4">
          {menu.courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
              className="flex items-center gap-4 text-cream/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="font-body">{course}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-gold/80 text-sm font-accent pt-4">
          {menu.note}
        </p>
      </div>
    </motion.div>
  );
}

function TastingMenu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tasting-menu" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="heading-lg">Tasting Menus</h2>
            <p className="font-accent text-gold">A Curated Culinary Journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tastingMenus.map((menu, index) => (
              <MenuCard 
                key={menu.name} 
                menu={menu} 
                index={index} 
                inView={inView} 
              />
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-body italic">
                Our tasting menus require a minimum of two guests and must be ordered by the entire table
              </p>
              <p className="text-sm text-gold/80">
                Please inform us of any dietary restrictions or allergies when making your reservation
              </p>
            </div>
            <a 
              href="#reserve" 
              className="btn-primary inline-block hover:scale-105 transition-transform"
            >
              Reserve Your Experience
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TastingMenu;
