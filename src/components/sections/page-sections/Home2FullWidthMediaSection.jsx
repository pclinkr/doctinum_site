import MediaFrameBlock from '../../blocks/MediaFrameBlock';

export default function Home2FullWidthMediaSection({
  src = '',
  poster = '',
  type = 'image',
  alt = 'Full width media',
  sectionHeight = 480,
  overlay = 'linear-gradient(180deg,rgba(6,10,20,0.22)_0%,rgba(6,10,20,0.48)_100%)',
  openInModal,
  animationVariant = 'current',
  videoAutoplayInline = false,
  className = '',
  sectionId = '',
}) {
  return (
    <section
      id={sectionId || undefined}
      className={`overflow-hidden ${className}`.trim()}
    >
      <MediaFrameBlock
        type={type}
        src={src}
        poster={poster}
        alt={alt}
        height={sectionHeight}
        overlay={overlay}
        className="border-0"
        objectFitClassName="object-cover"
        openInModal={openInModal}
        animationVariant={animationVariant}
        videoAutoplayInline={videoAutoplayInline}
      />
    </section>
  );
}
