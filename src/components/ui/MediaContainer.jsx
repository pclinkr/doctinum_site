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
  enableZoomOut = false,
  parallaxStartOffset = 0, // Point de scroll où l'effet commence (en pixels)
  parallaxStartPosition = 'center', // Position de départ de l'image: 'top', 'center', 'bottom'
  initialImageOffset = 0 // Offset initial de l'image pour éviter qu'elle soit coupée (en pixels)
}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState(0);
  const [objectPosition, setObjectPosition] = useState('center');

  useEffect(() => {
    if (!enableParallax || type !== 'image') return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcul du point de référence de l'élément selon parallaxStartPosition
      let elementReference;
      switch (parallaxStartPosition) {
        case 'top':
          elementReference = elementTop;
          break;
        case 'bottom':
          elementReference = elementTop + elementHeight;
          break;
        case 'center':
        default:
          elementReference = elementTop + elementHeight / 2;
          break;
      }
      
      // Calcul de la distance avec prise en compte du parallaxStartOffset
      const windowCenter = scrollY + windowHeight / 2;
      const adjustedScrollY = scrollY + parallaxStartOffset;
      const adjustedWindowCenter = adjustedScrollY + windowHeight / 2;
      const distance = elementReference - adjustedWindowCenter;
      
      // Effet de parallax : différent selon la classe
      const isHorizontalParallax = className?.includes('cta-parallax');
      const parallaxSpeed = isHorizontalParallax ? 0.04 : 0.06; // Plus rapide pour l'effet horizontal
      const parallaxOffset = distance * parallaxSpeed;
      
      // Direction du parallax : horizontal pour CTA, vertical pour les autres
      let transformValue;
      let objectPositionValue = 'center';
      
      if (isHorizontalParallax) {
        const baseScale = 1.05;
        let scale = baseScale;
        
        // Zoom out progressif basé sur la distance de scroll
        if (enableZoomOut) {
          const maxZoomOut = 0.1; // Zoom out maximum de 10%
          const zoomOutFactor = Math.min(Math.abs(distance) / 1000, 1) * maxZoomOut;
          scale = baseScale - zoomOutFactor;
        }
        
        // Pour le parallax horizontal, utiliser objectPosition au lieu de transform
        transformValue = `scale(${scale})`;
        
        // Calculer l'objectPosition dynamique
        const totalOffset = parallaxOffset + initialImageOffset;
        objectPositionValue = `calc(50% + ${totalOffset}px) center`;
      } else {
        // Parallax vertical : utiliser transform comme avant
        const totalOffset = parallaxOffset + initialImageOffset;
        transformValue = `translateY(${totalOffset}px) scale(1.15)`;
      }
      
      setTransform(transformValue);
      setObjectPosition(objectPositionValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax, type, className, enableZoomOut, parallaxStartOffset, parallaxStartPosition, initialImageOffset]);

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
            className="relative h-full w-full overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={alt}
              className={`absolute inset-0 ${className}`}
              style={{
                transform: enableParallax ? transform : (initialImageOffset !== 0 && isHorizontalParallax ? `scale(1.05)` : 'scale(1)'),
                willChange: enableParallax ? 'transform' : 'auto',
                // Utiliser object-fit: cover avec position absolue
                objectFit: 'cover',
                // Position dynamique du fond selon le parallax
                objectPosition: isHorizontalParallax 
                  ? (enableParallax ? objectPosition : `calc(50% + ${initialImageOffset}px) center`)
                  : 'center',
                // Étendre l'image au-delà du conteneur pour le parallax
                width: isHorizontalParallax ? '100%' : '100%',
                height: isHorizontalParallax ? '100%' : '100%',
                left: isHorizontalParallax ? '0' : '0',
                top: isHorizontalParallax ? '0' : '0'
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
