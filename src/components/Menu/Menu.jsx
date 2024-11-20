import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MenuItem } from './MenuItem';

const menuCategories = [
  { id: 'antipasti', name: 'Antipasti' },
  { id: 'primi', name: 'Primi' },
  { id: 'secondi', name: 'Secondi' },
  { id: 'dolci', name: 'Dolci' },
];

const menuItems = {
  antipasti: [
    {
      name: 'Burrata con Prosciutto',
      description: 'Creamy burrata cheese, aged prosciutto, fresh basil, extra virgin olive oil',
      price: '$24',
    },
    {
      name: 'Carpaccio di Manzo',
      description: 'Thinly sliced beef tenderloin, arugula, shaved parmesan, truffle oil',
      price: '$26',
    },
    {
      name: 'Calamari Fritti',
      description: 'Crispy fried calamari, zucchini, lemon-herb aioli',
      price: '$22',
    },
  ],
  primi: [
    {
      name: 'Tagliatelle al Tartufo',
      description: 'House-made tagliatelle, black truffle, parmesan cream sauce',
      price: '$38',
    },
    {
      name: 'Risotto ai Funghi',
      description: 'Carnaroli rice, wild mushrooms, aged parmesan, fresh herbs',
      price: '$34',
    },
    {
      name: 'Ravioli di Zucca',
      description: 'Butternut squash ravioli, brown butter sage sauce, amaretti crumbs',
      price: '$32',
    },
  ],
  secondi: [
    {
      name: 'Branzino al Forno',
      description: 'Whole roasted Mediterranean sea bass, herbs, lemon, olive oil',
      price: '$48',
    },
    {
      name: 'Bistecca Fiorentina',
      description: '32oz T-bone steak, rosemary, garlic, seasonal vegetables',
      price: '$125',
    },
    {
      name: 'Osso Buco',
      description: 'Braised veal shank, saffron risotto, gremolata',
      price: '$52',
    },
  ],
  dolci: [
    {
      name: 'Tiramisù',
      description: 'Classic tiramisu, mascarpone cream, coffee-soaked ladyfingers',
      price: '$16',
    },
    {
      name: 'Panna Cotta',
      description: 'Vanilla bean panna cotta, seasonal berries, aged balsamic',
      price: '$15',
    },
    {
      name: 'Cannoli',
      description: 'Sicilian cannoli, ricotta cream, pistachios, chocolate',
      price: '$14',
    },
  ],
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  return (
    <section id="menu" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Menu</h2>
          <p className="font-accent text-gold">Seasonal Selection</p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {menuCategories.map((category) => (
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

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 max-w-3xl mx-auto"
        >
          {menuItems[activeCategory].map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-body italic mb-8">
            Menu items and prices are subject to change based on seasonality and availability
          </p>
          <a href="#reserve" className="btn-primary">
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
