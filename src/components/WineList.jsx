import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const wineCategories = [
  { id: 'sparkling', name: 'Sparkling' },
  { id: 'white', name: 'White' },
  { id: 'red', name: 'Red' },
  { id: 'dessert', name: 'Dessert' },
];

const wines = {
  sparkling: [
    {
      name: 'Prosecco Superiore DOCG',
      producer: 'Col Vetoraz',
      region: 'Valdobbiadene, Italy',
      description: 'Elegant and crisp with notes of green apple and white flowers',
      glass: '18',
      bottle: '72',
    },
    {
      name: 'Franciacorta Rosé',
      producer: "Ca' del Bosco",
      region: 'Lombardy, Italy',
      description: 'Delicate pink bubbles with hints of wild berries and brioche',
      glass: '22',
      bottle: '88',
    },
  ],
  white: [
    {
      name: 'Gavi di Gavi',
      producer: 'La Scolca',
      region: 'Piedmont, Italy',
      description: 'Mineral-driven with citrus and almond notes',
      glass: '16',
      bottle: '64',
    },
    {
      name: 'Verdicchio dei Castelli di Jesi',
      producer: 'Bucci',
      region: 'Marche, Italy',
      description: 'Complex and structured with stone fruit and herbal notes',
      glass: '15',
      bottle: '60',
    },
  ],
  red: [
    {
      name: 'Barolo',
      producer: 'Vietti',
      region: 'Piedmont, Italy',
      description: 'Full-bodied with notes of tar, roses, and dark fruits',
      glass: '32',
      bottle: '128',
    },
    {
      name: 'Brunello di Montalcino',
      producer: 'Biondi-Santi',
      region: 'Tuscany, Italy',
      description: 'Elegant and complex with cherry, leather, and spice notes',
      glass: '35',
      bottle: '140',
    },
  ],
  dessert: [
    {
      name: 'Vin Santo',
      producer: 'Avignonesi',
      region: 'Tuscany, Italy',
      description: 'Sweet and intense with honey, apricot, and almond notes',
      glass: '20',
      bottle: '95',
    },
    {
      name: 'Moscato d\'Asti',
      producer: 'G.D. Vajra',
      region: 'Piedmont, Italy',
      description: 'Light and aromatic with peach and honeysuckle notes',
      glass: '14',
      bottle: '56',
    },
  ],
};

function WineList() {
  const [activeCategory, setActiveCategory] = useState('sparkling');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="wine-list" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Wine List</h2>
          <p className="font-accent text-gold">Curated Selection of Italian Wines</p>
        </div>

        {/* Wine Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {wineCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-accent text-lg tracking-wide px-6 py-2 transition-colors
                ${activeCategory === category.id
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-cream/70 hover:text-cream border-b-2 border-transparent'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Wine List */}
        <motion.div
          key={activeCategory}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 max-w-4xl mx-auto"
        >
          {wines[activeCategory].map((wine, index) => (
            <div
              key={index}
              className="border-b border-gold/20 pb-8 last:border-b-0"
            >
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <div>
                  <h3 className="font-display text-xl text-cream">{wine.name}</h3>
                  <p className="font-accent text-gold/80">{wine.producer}</p>
                </div>
                <div className="text-right">
                  <p className="font-accent text-gold">Glass ${wine.glass}</p>
                  <p className="font-accent text-gold">Bottle ${wine.bottle}</p>
                </div>
              </div>
              <p className="text-sm text-cream/70 italic mb-2">{wine.region}</p>
              <p className="text-body">{wine.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-body italic mb-8">
            Our sommelier is available to assist with pairings and recommendations
          </p>
          <a href="#reserve" className="btn-primary">
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
}

export default WineList;
