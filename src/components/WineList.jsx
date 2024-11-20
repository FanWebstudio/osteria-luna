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
    { id: 's1', name: 'Prosecco Superiore DOCG', year: 'NV', region: 'Veneto', price: '45' },
    { id: 's2', name: 'Franciacorta', year: '2019', region: 'Lombardy', price: '65' },
    { id: 's3', name: 'Ferrari Trento DOC', year: '2018', region: 'Trentino', price: '75' },
  ],
  white: [
    { id: 'w1', name: 'Verdicchio dei Castelli di Jesi', year: '2020', region: 'Marche', price: '45' },
    { id: 'w2', name: 'Gavi di Gavi', year: '2021', region: 'Piedmont', price: '55' },
    { id: 'w3', name: 'Soave Classico', year: '2020', region: 'Veneto', price: '40' },
  ],
  red: [
    { id: 'r1', name: 'Barolo DOCG', year: '2018', region: 'Piedmont', price: '95' },
    { id: 'r2', name: 'Brunello di Montalcino', year: '2017', region: 'Tuscany', price: '85' },
    { id: 'r3', name: 'Amarone della Valpolicella', year: '2016', region: 'Veneto', price: '90' },
  ],
  dessert: [
    { id: 'd1', name: 'Vin Santo', year: '2015', region: 'Tuscany', price: '60' },
    { id: 'd2', name: 'Moscato d\'Asti', year: '2020', region: 'Piedmont', price: '40' },
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
              key={wine.id}
              className="border-b border-gold/20 pb-8 last:border-b-0"
            >
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <div>
                  <h3 className="font-display text-xl text-cream">{wine.name}</h3>
                  <p className="font-accent text-gold/80">{wine.year} • {wine.region}</p>
                </div>
                <div className="text-right">
                  <p className="font-accent text-gold">Glass ${wine.price}</p>
                </div>
              </div>
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
