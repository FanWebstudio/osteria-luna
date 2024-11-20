import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'reservations@osterialuna.com',
  address: '123 Culinary Avenue, San Francisco, CA 94110',
  hours: {
    'Monday - Thursday': '5:00 PM - 10:00 PM',
    'Friday - Saturday': '5:00 PM - 11:00 PM',
    'Sunday': '5:00 PM - 9:30 PM'
  }
};

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-rich-black">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Contact & Reservations</h2>
          <p className="font-accent text-gold">Join Us for an Unforgettable Evening</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-display text-2xl text-cream">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
                >
                  <FaPhone className="text-gold" />
                  <span>{contactInfo.phone}</span>
                </a>
                
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
                >
                  <FaEnvelope className="text-gold" />
                  <span>{contactInfo.email}</span>
                </a>
                
                <div className="flex items-start gap-4 text-cream">
                  <FaMapMarkerAlt className="text-gold flex-shrink-0 mt-1" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaClock className="text-gold" />
                <h3 className="font-display text-xl text-cream">Hours</h3>
              </div>
              
              <div className="space-y-3">
                {Object.entries(contactInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-cream/80">
                    <span className="font-accent">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-body">
                For parties of 8 or more, please contact us directly for reservations.
              </p>
              <p className="text-body">
                For private events and special occasions, our events team will be happy to assist you.
              </p>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-rich-black/30 p-8"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cream/5 border-cream/10 text-cream shadow-sm focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cream/5 border-cream/10 text-cream shadow-sm focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cream">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-cream/5 border-cream/10 text-cream shadow-sm focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cream">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cream/5 border-cream/10 text-cream shadow-sm focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gold hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm">Failed to send message. Please try again.</div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="aspect-w-16 aspect-h-9 bg-warm-gray/20">
            {/* Replace with actual map integration */}
            <div className="w-full h-full flex items-center justify-center text-gold/50">
              [Google Maps Integration]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
