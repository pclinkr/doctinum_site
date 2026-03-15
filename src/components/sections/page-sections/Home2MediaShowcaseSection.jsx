import MediaFrameBlock from '../../blocks/MediaFrameBlock';

const GRID_VARIANT_CLASSES = {
  two: 'grid-cols-1 min-[900px]:grid-cols-2',
  three: 'grid-cols-1 min-[900px]:grid-cols-3',
  wide: 'grid-cols-1 min-[900px]:grid-cols-[3fr_2fr]',
};

export default function Home2MediaShowcaseSection({
  items = [],
  gridVariant = 'two',
  sectionHeight = 380,
  className = '',
  gridClassName = '',
  backgroundClassName = 'bg-[var(--color-bg)]',
  animationVariant = 'current',
  sectionId = '',
}) {
  const gridVariantClass =
    GRID_VARIANT_CLASSES[gridVariant] || GRID_VARIANT_CLASSES.two;

  return (
    <section
      id={sectionId || undefined}
      className={`overflow-hidden ${backgroundClassName} ${className}`.trim()}
    >
      <div className={`grid ${gridVariantClass} ${gridClassName}`.trim()}>
        {(items || []).map((item, index) => (
          <MediaFrameBlock
            key={`${item.type || 'image'}-${item.src || 'placeholder'}-${index}`}
            type={item.type || 'image'}
            src={item.src || ''}
            poster={item.poster || ''}
            alt={item.alt || 'Media showcase'}
            height={item.height ?? sectionHeight}
            overlay={item.overlay}
            className={item.className || ''}
            objectFitClassName={item.objectFitClassName || 'object-cover'}
            openInModal={item.openInModal}
            animationVariant={item.animationVariant ?? animationVariant}
            videoAutoplayInline={item.videoAutoplayInline ?? false}
            videoMuted={item.videoMuted ?? true}
            videoLoop={item.videoLoop ?? true}
            playLabel={item.playLabel || 'Play video'}
          />
        ))}
      </div>
    </section>
  );
}
