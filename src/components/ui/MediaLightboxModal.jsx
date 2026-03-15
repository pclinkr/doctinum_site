import { useEffect } from 'react';

export default function MediaLightboxModal({
  isOpen = false,
  onClose,
  title = '',
  children,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;
      onClose?.();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[250] flex items-center justify-center bg-[rgba(5,10,20,0.92)] px-4 py-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Media preview'}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-[1] inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(10,16,32,0.66)] text-[var(--color-white)] transition-colors duration-200 ease-out hover:bg-[rgba(10,16,32,0.86)]"
        aria-label="Close media preview"
        onClick={onClose}
      >
        <span className="relative block h-3.5 w-3.5">
          <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
          <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
        </span>
      </button>

      <div
        className="relative flex h-full w-full max-w-[1400px] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
