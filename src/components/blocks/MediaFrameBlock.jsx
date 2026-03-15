import { useMemo, useState } from 'react';
import MediaLightboxModal from '../ui/MediaLightboxModal';

function resolveHeight(value, fallback = '360px') {
  if (typeof value === 'number') return `${value}px`;
  if (typeof value === 'string' && value.trim()) return value;
  return fallback;
}

export default function MediaFrameBlock({
  type = 'image',
  src = '',
  poster = '',
  alt = 'Media',
  height = '360px',
  overlay = undefined,
  className = '',
  objectFitClassName = 'object-cover',
  openInModal,
  animationVariant = 'current',
  videoAutoplayInline = false,
  videoMuted = true,
  videoLoop = true,
  playLabel = 'Play video',
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardHeight = useMemo(() => resolveHeight(height, '360px'), [height]);
  const isVideo = type === 'video';
  const shouldOpenModal = isVideo
    ? openInModal !== false
    : Boolean(openInModal);
  const showPlayOverlay = isVideo && !videoAutoplayInline && shouldOpenModal;
  const shouldRenderInlineVideo =
    isVideo && videoAutoplayInline && Boolean(src);
  const mediaCursorClass = shouldOpenModal
    ? 'cursor-pointer'
    : 'cursor-default';
  const revealClassName =
    animationVariant === 'cinematic' ? 'rev rev-cinematic d1' : 'rev d1';

  const handleOpenModal = () => {
    if (!shouldOpenModal) return;
    setIsModalOpen(true);
  };

  const handleCardKeyDown = (event) => {
    if (!shouldOpenModal) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    handleOpenModal();
  };

  return (
    <>
      <article
        className={`${revealClassName} relative isolate overflow-hidden bg-[var(--color-surface)] ${mediaCursorClass} ${className}`.trim()}
        style={{ minHeight: cardHeight }}
        onClick={handleOpenModal}
        onKeyDown={handleCardKeyDown}
        role={shouldOpenModal ? 'button' : undefined}
        tabIndex={shouldOpenModal ? 0 : undefined}
        aria-label={shouldOpenModal ? alt : undefined}
      >
        {shouldRenderInlineVideo ? (
          <video
            src={src}
            poster={poster || undefined}
            autoPlay
            playsInline
            muted={videoMuted}
            loop={videoLoop}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : isVideo ? (
          poster ? (
            <img
              src={poster}
              alt={alt}
              className={`absolute inset-0 h-full w-full ${objectFitClassName}`.trim()}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(140deg,#f6f8fc_0%,#edf2f8_100%)]" />
          )
        ) : src ? (
          <img
            src={src}
            alt={alt}
            className={`absolute inset-0 h-full w-full ${objectFitClassName}`.trim()}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(140deg,#f6f8fc_0%,#edf2f8_100%)]" />
        )}

        {overlay ? (
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: overlay }}
          />
        ) : null}

        {showPlayOverlay ? (
          <button
            type="button"
            aria-label={playLabel}
            className="absolute inset-0 z-[1] flex items-center justify-center"
            onClick={(event) => {
              event.stopPropagation();
              handleOpenModal();
            }}
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.46)] bg-[rgba(7,12,24,0.46)] text-[var(--color-white)] shadow-[0_12px_36px_rgba(5,11,22,0.3)] transition-transform duration-300 ease-out hover:scale-[1.04]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-5 w-5"
                aria-hidden="true"
              >
                <path d="M8.5 6.8a1 1 0 0 1 1.52-.85l8.2 5.2a1 1 0 0 1 0 1.7l-8.2 5.2a1 1 0 0 1-1.52-.85V6.8Z" />
              </svg>
            </span>
          </button>
        ) : null}
      </article>

      {shouldOpenModal ? (
        <MediaLightboxModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={alt}
        >
          {isVideo ? (
            <video
              src={src}
              poster={poster || undefined}
              controls
              autoPlay
              playsInline
              className="max-h-full w-full max-w-[1280px] rounded-[12px] bg-black object-contain"
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className="max-h-full w-full max-w-[1280px] rounded-[12px] object-contain"
            />
          )}
        </MediaLightboxModal>
      ) : null}
    </>
  );
}
