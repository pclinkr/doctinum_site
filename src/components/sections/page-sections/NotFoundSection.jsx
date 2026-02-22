import Button from '../../ui/Button';

export default function NotFoundSection({ onNavigate }) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"><div className="rev mb-4 text-[clamp(100px,20vw,200px)] font-[var(--w500)] leading-none tracking-[-0.08em] text-[var(--color-primary)] max-[809px]:text-[clamp(80px,18vw,160px)]">404</div><p className="rev mb-8 text-[clamp(18px,2.5vw,24px)] font-[var(--w500)] tracking-[-0.04em]">Whoops, that page doesn't exist</p><Button className="rev" size="lg" onClick={() => onNavigate('home')}>Go home</Button></div>
  );
}
