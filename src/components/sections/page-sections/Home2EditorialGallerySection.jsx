import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import { useParallax } from '../../../hooks/useParallax';

const ITEM_LAYOUTS = [
  { aspect: 'aspect-[4/5]', offset: 'min-[900px]:mt-0', amplitude: 24, delay: '' },
  {
    aspect: 'aspect-[3/4]',
    offset: 'min-[900px]:mt-20',
    amplitude: 44,
    delay: 'd1',
  },
  {
    aspect: 'aspect-[4/5]',
    offset: 'min-[900px]:mt-8',
    amplitude: 32,
    delay: 'd2',
  },
];

function GalleryItem({ item, layout }) {
  const parallaxRef = useParallax(layout.amplitude);

  return (
    <figure className={`group m-0 ${layout.offset}`}>
      <div
        ref={parallaxRef}
        className={`parallax-layer rev ${layout.delay} overflow-hidden rounded-[22px] bg-[var(--color-surface)]`.trim()}
      >
        <div className={`${layout.aspect} w-full overflow-hidden`}>
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      </div>

      <figcaption className="rev d1 mt-6 flex gap-3 text-[14.5px] leading-[1.6] text-[var(--color-muted)]">
        <span
          aria-hidden="true"
          className="mt-[10px] h-px w-6 shrink-0 bg-[var(--color-accent-1)] transition-[width] duration-500 ease-out group-hover:w-10"
        />
        {item.caption}
      </figcaption>
    </figure>
  );
}

export default function Home2EditorialGallerySection() {
  const { t } = useTranslation();
  const items = t('sections.home2.gallery.items', { returnObjects: true });

  return (
    <section className="overflow-hidden bg-[var(--color-surface)] py-28">
      <Container>
        <p className="rev ds-text-label mb-12 text-[var(--color-action)]">
          {t('sections.home2.gallery.label')}
        </p>

        <div className="grid grid-cols-1 gap-12 min-[900px]:grid-cols-3 min-[900px]:gap-8">
          {(items || []).map((item, index) => (
            <GalleryItem
              key={item.src}
              item={item}
              layout={ITEM_LAYOUTS[index] || ITEM_LAYOUTS[0]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
