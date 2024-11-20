import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tastingMenus = [
  {
    name: "Chef's Signature",
    price: "$145",
    description: "A seven-course journey through our most celebrated dishes",
    courses: [
      "Amuse-bouche",
      "Carpaccio di Manzo",
      "Risotto ai Funghi",
      "Branzino al Limone",
      "Agnello Brasato",
      "Pre-dessert",
      "Tiramisù Moderno"
    ],
    note: "Wine pairing available (+$95)"
  },
  {
    name: "Degustazione Luna",
    price: "$195",
    description: "Our premium nine-course tasting experience",
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
    note: "Premium wine pairing available (+$145)"
  }
];

function TastingMenu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tasting-menu" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Tasting Menus</h2>
          <p className="font-accent text-gold">A Curated Culinary Journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tastingMenus.map((menu, index) => (
            <motion.div
              key={menu.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-rich-black/30 p-8 border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-display text-2xl text-cream">{menu.name}</h3>
                  <span className="font-accent text-xl text-gold">{menu.price}</span>
                </div>
                
                <p className="text-body italic">{menu.description}</p>

                <div className="space-y-3 pt-4">
                  {menu.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-cream/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body">{course}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gold/80 text-sm font-accent pt-4">
                  {menu.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-body italic mb-8">
            Our tasting menus require a minimum of two guests and must be ordered by the entire table
          </p>
          <a href="#reserve" className="btn-primary">
            Reserve Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}

export default TastingMenu;
