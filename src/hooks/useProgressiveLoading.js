import { useEffect, useRef, useState } from 'react';
import { resourcePreloader } from '../utils/preloader';

// Hook to preload resources when user is about to see them
export const useProgressiveImageLoading = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer to detect when sections come into view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections(prev => new Set([...prev, sectionId]));
            
            // Preload resources for the next section
            switch (sectionId) {
              case 'about':
                // When about is visible, preload projects section resources
                Promise.all([
                  import('../Assets/Projects/Netflix.svg'),
                  import('../Assets/Projects/weather.png'),
                  import('../Assets/Projects/habify.jpg'),
                ]).then(modules => {
                  modules.forEach(module => {
                    resourcePreloader.prefetchImage(module.default);
                  });
                });
                break;
              case 'projects':
                // Preload resume section resources if needed
                break;
              default:
                break;
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before the section is visible
        threshold: 0.1,
      }
    );

    // Observe all main sections
    const sections = document.querySelectorAll('#home, #about, #projects, #resume, #connect');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { visibleSections };
};

// Hook for image lazy loading with preload
export const useImagePreload = (src, shouldPreload = false) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (shouldPreload && src) {
      resourcePreloader.preloadImage(src, 'high');
      setIsLoaded(true);
    }
  }, [src, shouldPreload]);

  const loadImage = () => {
    if (isLoaded || !src) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;
  };

  return { isLoaded, error, loadImage };
};
