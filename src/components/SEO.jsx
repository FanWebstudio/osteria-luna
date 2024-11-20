import { Helmet } from 'react-helmet-async';

export function SEO({
  title = 'Osteria Luna | Fine Italian Dining',
  description = 'Experience authentic Italian cuisine in an elegant setting at Osteria Luna. Fresh pasta, seasonal ingredients, and an extensive wine list.',
  image = '/images/og-image.jpg',
  url = 'https://osterialuna.com'
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Restaurant-specific Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Osteria Luna",
          "image": [image],
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.7749,
            "longitude": -122.4194
          },
          "url": url,
          "telephone": "+1-415-555-0123",
          "servesCuisine": "Italian",
          "priceRange": "$$$",
          "openingHours": [
            "Mo-Th 17:00-22:00",
            "Fr-Sa 17:00-23:00",
            "Su 17:00-21:30"
          ],
          "menu": url + "/menu",
          "acceptsReservations": "True"
        })}
      </script>
    </Helmet>
  );
}
