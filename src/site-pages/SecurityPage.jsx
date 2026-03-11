import { useTranslation } from 'react-i18next';
import SecurityHeroSection from '../components/sections/page-sections/SecurityHeroSection';
import SecurityGuaranteesSection from '../components/sections/page-sections/SecurityGuaranteesSection';
import SecurityPostureSection from '../components/sections/page-sections/SecurityPostureSection';
import SecuritySupervisionSection from '../components/sections/page-sections/SecuritySupervisionSection';
import SecurityRoadmapSection from '../components/sections/page-sections/SecurityRoadmapSection';

export default function SecurityPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const copy = t('pages.security', { returnObjects: true });

  if (!copy || !copy.hero) {
    return null;
  }

  return (
    <div
      id="page-security"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SecurityHeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        badges={copy.hero.badges}
      />

      <SecurityGuaranteesSection
        label={copy.guarantees.label}
        title={copy.guarantees.title}
        intro={copy.guarantees.intro}
        guarantees={copy.guarantees.items}
      />

      <SecurityPostureSection
        label={copy.posture.label}
        title={copy.posture.title}
        intro={copy.posture.intro}
        activeItems={copy.posture.activeItems}
        pendingItems={copy.posture.pendingItems}
        note={copy.posture.note}
      />

      <SecuritySupervisionSection
        label={copy.supervision.label}
        title={copy.supervision.title}
        intro={copy.supervision.intro}
        items={copy.supervision.items}
      />

      <SecurityRoadmapSection
        label={copy.roadmap.label}
        title={copy.roadmap.title}
        intro={copy.roadmap.intro}
        items={copy.roadmap.items}
      />
    </div>
  );
}
