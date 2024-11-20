import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';

const pressReviews = [
  {
    source: 'The New York Times',
    quote: 'Osteria Luna brings the soul of Italian fine dining to life with unparalleled authenticity and modern flair.',
    author: 'Maria Bennett',
    rating: 5,
    date: 'September 2023',
    link: '#'
  },
  {
    source: 'Michelin Guide',
    quote: 'A testament to culinary excellence, where traditional Italian craftsmanship meets contemporary innovation.',
    rating: 5,
    date: 'August 2023',
    link: '#'
  },
  {
    source: 'Food & Wine Magazine',
    quote: "The tasting menu is a journey through Italy's finest flavors, expertly curated and beautifully presented.",
    author: 'James Crawford',
    rating: 5,
    date: 'July 2023',
    link: '#'
  }
];

const awards = [
  {
    name: 'Two Michelin Stars',
    year: '2023',
    icon: '⭐⭐'
  },
  {
    name: 'James Beard Award',
    year: '2023',
    icon: '🏆'
  },
  {
    name: 'Wine Spectator Award of Excellence',
    year: '2023',
    icon: '🍷'
  },
  {
    name: "World's 50 Best Restaurants",
    year: '2023',
    icon: '🌟'
  }
];

function Press() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="press" className="section-padding bg-dark-olive">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">Press & Awards</h2>
          <p className="font-accent text-gold">Recognition of Excellence</p>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-3"
            >
              <span className="text-4xl">{award.icon}</span>
              <div>
                <h3 className="font-display text-lg text-cream">{award.name}</h3>
                <p className="font-accent text-gold text-sm">{award.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pressReviews.map((review, index) => (
            <motion.div
              key={review.source}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-rich-black/30 p-8 space-y-6"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold" />
                ))}
              </div>

              <blockquote className="text-lg italic text-cream leading-relaxed">
                "{review.quote}"
              </blockquote>

              <div>
                <p className="font-display text-gold">{review.source}</p>
                {review.author && (
                  <p className="text-cream/80 text-sm">{review.author}</p>
                )}
                <p className="text-cream/60 text-sm">{review.date}</p>
              </div>

              <a
                href={review.link}
                className="inline-block text-gold hover:text-gold/80 transition-colors text-sm font-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read full review →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Featured In */}
        <div className="text-center space-y-8">
          <h3 className="font-display text-2xl text-cream">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Replace with actual logos */}
            <div className="text-gold/50">[Food & Wine Logo]</div>
            <div className="text-gold/50">[Michelin Guide Logo]</div>
            <div className="text-gold/50">[NY Times Logo]</div>
            <div className="text-gold/50">[Bon Appétit Logo]</div>
            <div className="text-gold/50">[Eater Logo]</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Press;
