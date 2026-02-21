import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import PageHero from '../components/sections/PageHero';
import BlogGridSection from '../components/sections/page-sections/BlogGridSection';
import BlogPostContentSection from '../components/sections/page-sections/BlogPostContentSection';
import { getBlogCards } from '../constants/content';
import { getCtaSubtitleShort } from '../constants/site';

export function BlogPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const blogCards = getBlogCards(t);
  const ctaSubtitleShort = getCtaSubtitleShort(t);

  return (
    <div id="page-blog" className={`page ${active ? 'active' : ''}`.trim()}>
      <PageHero badge={t('pages.blog.badge')} title={t('pages.blog.title')} description={t('pages.blog.description')} />
      <BlogGridSection cards={blogCards} onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleShort} />
    </div>
  );
}

export function BlogPostPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleShort = getCtaSubtitleShort(t);

  return (
    <div id="page-blog-post" className={`page ${active ? 'active' : ''}`.trim()}>
      <BlogPostContentSection />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleShort} />
    </div>
  );
}
