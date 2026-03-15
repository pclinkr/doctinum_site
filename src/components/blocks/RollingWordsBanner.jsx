export default function RollingWordsBanner({ words, className = '', bgColor = 'var(--color-bg)', fadeStart = '100px' }) {
  // Dupliquer les éléments suffisamment de fois pour remplir l'espace
  // On duplique au moins 4 fois pour garantir une boucle continue même avec peu d'éléments
  const duplicatedWords = [...words, ...words, ...words, ...words];
  
  return (
    <div className={`relative overflow-hidden py-[17px] isolate ${className}`} style={{
      '--marquee-edge-fade': 'clamp(140px, 22vw, 340px)',
      backgroundImage: 'var(--gradient-marquee-rail), var(--gradient-marquee-rail)',
      backgroundPosition: '0 0, 100% 0',
      backgroundSize: 'var(--marquee-edge-fade) 100%, var(--marquee-edge-fade) 100%',
      backgroundRepeat: 'no-repeat',
      backgroundColor: bgColor
    }}>
      {/* Effet de fondu gauche */}
      <div className="absolute top-0 bottom-0 left-0 w-[var(--marquee-edge-fade)] pointer-events-none z-[3]" style={{
        background: `linear-gradient(to right, ${bgColor} 0%, ${bgColor} ${fadeStart}, transparent calc(${fadeStart} + 100px), transparent 100%)`
      }} />
      
      {/* Effet de fondu droit */}
      <div className="absolute top-0 bottom-0 right-0 w-[var(--marquee-edge-fade)] pointer-events-none z-[3]" style={{
        background: `linear-gradient(to left, ${bgColor} 0%, ${bgColor} ${fadeStart}, transparent calc(${fadeStart} + 100px), transparent 100%)`
      }} />
      
      <div 
        className="flex gap-14 w-max animate-marquee" 
        style={{
          animationDuration: '40s', // Animation plus lente
          animationPlayState: 'running'
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {duplicatedWords.map((word, index) => (
          <span key={index} className="text-[15px] font-[var(--w500)] tracking-[var(--track-tight)] text-[var(--subtle)] whitespace-nowrap flex items-center gap-5">
            {word}
            <span className="text-[9px] text-[var(--border-mid)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
