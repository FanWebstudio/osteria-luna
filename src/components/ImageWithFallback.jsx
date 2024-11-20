import { useState } from 'react';

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholder.jpg',
  alt,
  className,
  ...props
}) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
}
