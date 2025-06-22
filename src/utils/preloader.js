// Dynamic resource preloader that works with webpack's hashed filenames
export class ResourcePreloader {
  constructor() {
    this.preloadedResources = new Set();
  }

  // Preload critical images that appear above the fold
  preloadCriticalImages() {
    const criticalImages = [
      // Import these to get the actual webpack paths
      import('../Assets/Programming.svg'),
    ];

    Promise.all(criticalImages).then(modules => {
      modules.forEach(module => {
        this.preloadImage(module.default);
      });
    });
  }

  // Preload image with proper priority
  preloadImage(src, priority = 'high') {
    if (this.preloadedResources.has(src)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = priority;
    
    document.head.appendChild(link);
    this.preloadedResources.add(src);
  }
  
  // Prefetch resources for next sections
  prefetchNextSectionResources() {
    // Prefetch resources that will be needed soon but not immediately
    const nextSectionImages = [
      import('../Assets/Projects/Netflix.svg'),
      import('../Assets/Projects/weather.png'),
      // Add other project images
    ];

    Promise.all(nextSectionImages).then(modules => {
      modules.forEach(module => {
        this.prefetchImage(module.default);
      });
    });
  }

  prefetchImage(src) {
    if (this.preloadedResources.has(src)) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    
    document.head.appendChild(link);
    this.preloadedResources.add(src);
  }
}

export const resourcePreloader = new ResourcePreloader();
