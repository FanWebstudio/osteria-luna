import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { focusManagement } from '../utils/a11y';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Wine', href: '#wine' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Press', href: '#press' },
  { name: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Use focus trap when menu is open
  useFocusTrap(menuRef, isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    if (!isOpen) {
      focusManagement.save();
    } else {
      focusManagement.restore();
    }
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
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
            href="/" 
            className="text-2xl font-italiana text-cream"
            aria-label="Osteria Luna Home"
          >
            Osteria Luna
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-cream hover:text-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleMenuToggle}
            className="md:hidden text-cream p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
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
                      className="block text-cream hover:text-gold transition-colors"
                      onClick={() => {
                        handleMenuToggle();
                      }}
                      role="menuitem"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
