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
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-cream">Make a Reservation</h3>
                <p className="text-body">
                  For the best experience, please make your reservation at least 24 hours in advance.
                </p>
              </div>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input bg-rich-black/50 border-gold/20 text-cream placeholder:text-cream/50 focus:border-gold"
                  required
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-input bg-rich-black/50 border-gold/20 text-cream placeholder:text-cream/50 focus:border-gold"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form-input bg-rich-black/50 border-gold/20 text-cream placeholder:text-cream/50 focus:border-gold"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="form-input bg-rich-black/50 border-gold/20 text-cream focus:border-gold"
                    required
                  />
                  <select
                    className="form-select bg-rich-black/50 border-gold/20 text-cream focus:border-gold"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>

                <select
                  className="form-select bg-rich-black/50 border-gold/20 text-cream focus:border-gold"
                  required
                >
                  <option value="">Number of Guests</option>
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Special Requests (Optional)"
                  rows="3"
                  className="form-textarea bg-rich-black/50 border-gold/20 text-cream placeholder:text-cream/50 focus:border-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Request Reservation
              </button>

              <p className="text-sm text-cream/60 text-center">
                By making a reservation you agree to our reservation policy
              </p>
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
