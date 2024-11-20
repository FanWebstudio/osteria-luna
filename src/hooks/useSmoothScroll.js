import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Account for fixed header
          const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
}
