import React, { useState, useEffect } from 'react';
import { useLazyImage } from '../hooks/usePerformanceOptimization';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  onLoad = () => {},
  ...props 
}) => {
  const { ref, src: lazySrc, isLoaded } = useLazyImage(src);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    onLoad();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={ref} className={`optimized-image-container ${className}`}>
      {!lazySrc && placeholder && (
        <div className="image-placeholder">
          {placeholder}
        </div>
      )}
      
      {lazySrc && !hasError && (
        <img
          src={lazySrc}
          alt={alt}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
      
      {hasError && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
