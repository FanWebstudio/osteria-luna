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

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <header 
      role="banner"
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-rich-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav 
        role="navigation" 
        aria-label="Main navigation"
        className="container-custom py-4"
      >
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="font-accent text-2xl text-cream"
            aria-label="Osteria Luna Home"
          >
            Osteria Luna
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link text-cream hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reserve"
                className="btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleMenuToggle}
            className="md:hidden text-cream p-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-rich-black/95 backdrop-blur-sm"
              role="menu"
            >
              <ul className="container-custom py-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name} role="none">
                    <a
                      href={link.href}
                      className="block nav-link text-cream hover:text-gold transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.body.style.overflow = 'unset';
                      }}
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li role="none">
                  <a
                    href="#reserve"
                    className="block btn-primary text-center mt-4"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.body.style.overflow = 'unset';
                    }}
                    role="menuitem"
                  >
                    Reserve
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
