import { useEffect, useState, useCallback } from 'react';

// Custom hook for performance optimization
export const usePerformanceOptimization = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowDevice, setIsSlowDevice] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Check device performance
    const checkDevicePerformance = () => {
      // Use device memory and hardware concurrency as performance indicators
      const deviceMemory = navigator.deviceMemory || 4; // Default to 4GB
      const hardwareConcurrency = navigator.hardwareConcurrency || 2; // Default to 2 cores
      
      // Consider device slow if less than 4GB RAM or less than 4 cores
      setIsSlowDevice(deviceMemory < 4 || hardwareConcurrency < 4);
    };

    checkDevicePerformance();

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Throttle function for performance-heavy operations
  const throttle = useCallback((func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Debounce function for input handling
  const debounce = useCallback((func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }, []);

  // Request animation frame optimization
  const rafThrottle = useCallback((func) => {
    let rafId;
    return function (...args) {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        func.apply(this, args);
        rafId = null;
      });
    };
  }, []);

  return {
    isReducedMotion,
    isSlowDevice,
    throttle,
    debounce,
    rafThrottle
  };
};

// Hook for intersection observer optimization
export const useIntersectionObserver = (callback, options = {}) => {
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, callback, options]);

  return setElementRef;
};

// Hook for lazy loading images
export const useLazyImage = (src) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const setRef = useIntersectionObserver(
    () => {
      if (src && !imageSrc) {
        setImageSrc(src);
      }
    },
    { threshold: 0.1 }
  );

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = imageSrc;
    }
  }, [imageSrc]);

  return { ref: setRef, src: imageSrc, isLoaded };
};
