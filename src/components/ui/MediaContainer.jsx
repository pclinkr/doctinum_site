import React, { useEffect, useRef, useState } from 'react';

export default function MediaContainer({ 
  type = 'gradient', 
  src, 
  gradient, 
  alt = '', 
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  enableParallax = false,
  enableZoomOut = false
}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (!enableParallax || type !== 'image') return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcul du parallax basé sur la position de l'élément
      const elementCenter = elementTop + elementHeight / 2;
      const windowCenter = scrollY + windowHeight / 2;
      const distance = elementCenter - windowCenter;
      
      // Effet de parallax : différent selon la classe
      const isHorizontalParallax = className?.includes('cta-parallax');
      const parallaxSpeed = isHorizontalParallax ? 0.07 : 0.08; // Plus rapide pour l'effet horizontal
      const parallaxOffset = distance * parallaxSpeed;
      
      // Direction du parallax : horizontal pour CTA, vertical pour les autres
      let transformValue;
      
      if (isHorizontalParallax) {
        const baseScale = 1.15;
        let scale = baseScale;
        
        // Zoom out progressif basé sur la distance de scroll
        if (enableZoomOut) {
          const maxZoomOut = 0.1; // Zoom out maximum de 10%
          const zoomOutFactor = Math.min(Math.abs(distance) / 1000, 1) * maxZoomOut;
          scale = baseScale - zoomOutFactor;
        }
        
        transformValue = `translateX(${parallaxOffset}px) scale(${scale})`;
      } else {
        // Parallax vertical : pas de zoom out pour préserver les autres éléments
        transformValue = `translateY(${parallaxOffset}px) scale(1.15)`;
      }
      
      setTransform(transformValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax, type, className, enableZoomOut]);

  const renderMedia = () => {
    switch (type) {
      case 'video':
        return (
          <video
            className={`h-full w-full object-cover ${className}`}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
          >
            <source src={src} type="video/mp4" />
          </video>
        );
      
      case 'image':
        const isHorizontalParallax = className?.includes('cta-parallax');
        
        return (
          <div 
            ref={containerRef}
            className={`relative overflow-hidden rounded-[var(--r-md)] shadow-lg ${
              isHorizontalParallax ? 'h-full w-[120%] -ml-[10%]' : 'h-full w-full'
            }`}
          >
            <img
              src={src}
              alt={alt}
              className={`h-full w-full object-cover ${className}`}
              style={{
                transform: enableParallax ? transform : 'scale(1)',
                willChange: enableParallax ? 'transform' : 'auto'
              }}
            />
            {/* Overlay avec fondu vers le blanc en bas */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.3)_60%,rgba(255,255,255,0.7)_100%)]" />
          </div>
        );
      
      case 'gradient':
      default:
        return (
          <div 
            className={`h-full w-full ${className}`}
            style={{ background: gradient }}
          />
        );
    }
  };

  return renderMedia();
}
