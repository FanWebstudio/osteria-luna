import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/osterialuna',
    icon: FaInstagram
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/osterialuna',
    icon: FaFacebookF
  },
  {
    name: 'TripAdvisor',
    href: 'https://tripadvisor.com/osterialuna',
    icon: FaTripadvisor
  }
];

const contactInfo = [
  {
    text: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    icon: HiOutlinePhone
  },
  {
    text: 'reservations@osterialuna.com',
    href: 'mailto:reservations@osterialuna.com',
    icon: HiOutlineMail
  },
  {
    text: '123 Vineyard Lane, Napa Valley, CA',
    href: 'https://maps.google.com/?q=123+Vineyard+Lane+Napa+Valley+CA',
    icon: HiOutlineLocationMarker
  }
];

const hours = [
  { day: 'Tuesday - Thursday', time: '5:00 PM - 10:00 PM' },
  { day: 'Friday - Saturday', time: '5:00 PM - 11:00 PM' },
  { day: 'Sunday', time: '4:00 PM - 9:00 PM' },
  { day: 'Monday', time: 'Closed' }
];

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <footer className="bg-rich-black text-cream">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Logo & Description */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-gold">Osteria Luna</h3>
            <p className="text-cream/80 max-w-sm">
              Experience the essence of Italian fine dining in the heart of Napa Valley. 
              Crafting memorable moments through exceptional cuisine and ambiance.
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-accent text-lg text-gold">Hours</h4>
            <ul className="space-y-3">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between items-center text-sm">
                  <span className="text-cream/80">{day}</span>
                  <span className="text-cream">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-accent text-lg text-gold">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ text, href, icon: Icon }) => (
                <li key={text}>
                  <a 
                    href={href}
                    className="flex items-center space-x-3 text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gold/90" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-accent text-lg text-gold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full border border-gold/20
                    flex items-center justify-center
                    text-gold hover:text-cream hover:border-gold
                    transition-colors duration-300
                  "
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
            <div className="pt-4 mt-6 border-t border-cream/10">
              <p className="text-sm text-cream/60">
                © {new Date().getFullYear()} Osteria Luna. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
