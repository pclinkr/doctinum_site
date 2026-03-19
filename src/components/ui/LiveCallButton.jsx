import { Phone } from 'lucide-react';

export default function LiveCallButton({ onClick, label = 'Essai live' }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[13px] font-[var(--w500)] uppercase tracking-[0.08em] text-white/90">
        {label}
      </span>
      <button
        onClick={onClick}
        className="group relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-color-success shadow-[0_8px_32px_rgba(35,172,126,0.4),0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(35,172,126,0.5),0_4px_12px_rgba(0,0,0,0.15)] active:scale-95"
        aria-label={label}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="live-call-shadow-pulse" />
        
        <Phone
          className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-12"
          size={32}
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
}
