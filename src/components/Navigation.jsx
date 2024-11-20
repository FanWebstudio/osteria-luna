import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Wine List', href: '#wine' },
  { name: 'Private Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Press', href: '#press' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rich-black/95 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <a href="#" className="font-accent text-2xl text-cream hover:text-gold transition-colors">
              Osteria Luna
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
              <a href="#reserve" className="btn-primary">
                Reserve
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-rich-black/95 md:hidden"
          >
            <div className="container-custom h-full flex flex-col">
              <div className="flex justify-between items-center py-6">
                <span className="font-accent text-2xl text-cream">Osteria Luna</span>
                <button
                  className="text-cream hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-6 mt-8"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link text-xl text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#reserve"
                  className="btn-primary text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reserve
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
