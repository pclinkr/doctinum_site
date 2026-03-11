import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import PatientSupportHeroSection from '../components/sections/page-sections/PatientSupportHeroSection';
import PatientSupportChallengeSection from '../components/sections/page-sections/PatientSupportChallengeSection';
import ProtocolApplicationSection from '../components/sections/page-sections/ProtocolApplicationSection';
import PatientSupportCaseRow from '../components/sections/page-sections/PatientSupportCaseRow';
import PatientSupportUseCasesSection from '../components/sections/page-sections/PatientSupportUseCasesSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import { getCtaSubtitleFull } from '../constants/site';

export default function PatientSupportProgramsPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const copy = t('pages.solutions.patientSupport', { returnObjects: true });

  if (!copy || !copy.hero) {
    return null;
  }

  return (
    <div
      id="page-patient-support"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <PatientSupportHeroSection
        onNavigate={onNavigate}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        ctaButtons={[
          {
            text: copy.hero.cta1,
            variant: 'primary',
            onClick: () => onNavigate('contact'),
          },
          {
            text: copy.hero.cta2,
            variant: 'secondary',
            onClick: () => onNavigate('contact'),
          },
        ]}
      />
      
      <PatientSupportChallengeSection
        title={copy.challenge.title}
        items={copy.challenge.items}
      />
      
      <ProtocolApplicationSection
        title={copy.protocol.title}
        subtitle={copy.protocol.subtitle}
        items={copy.protocol.items}
        footer={copy.protocol.footer}
      />
      
      <PatientSupportCaseRow
        sectionTitle={copy.engagement.sectionTitle}
        imagePosition="right"
        imageUrl="/assets/images/patient_phone_call.png"
        title={copy.engagement.title}
        description={copy.engagement.description}
        items={copy.engagement.items}
        description2={copy.engagement.description2}
        items2={copy.engagement.items2}
        description3={copy.engagement.description3}
        items3={copy.engagement.items3}
        description4={copy.engagement.description4}
        items4={copy.engagement.items4}
      />
      
      <PatientSupportCaseRow
        imagePosition="left"
        imageUrl="/assets/images/patient_data_structure.png"
        title={copy.structuredReturns.title}
        description={copy.structuredReturns.description}
        items={copy.structuredReturns.items}
        description2={copy.structuredReturns.description2}
        items2={copy.structuredReturns.items2}
      />
      
      <PatientSupportUseCasesSection
        title={copy.useCases.title}
        cards={copy.useCases.cards}
      />
      
      <PatientSupportCaseRow
        sectionTitle={copy.teams.sectionTitle}
        imagePosition="left"
        imageUrl="/assets/images/team_collaboration.png"
        title={copy.teams.title}
        description={copy.teams.description}
        description2={copy.teams.description2}
        items={copy.teams.items}
        description3={copy.teams.description3}
        items2={copy.teams.items2}
        footer={copy.teams.footer}
      />
      
      <PatientSupportCaseRow
        sectionTitle={copy.platforms.sectionTitle}
        imagePosition="right"
        imageUrl="/assets/images/platform_integration.png"
        title={copy.platforms.title}
        description={copy.platforms.description}
        items={copy.platforms.items}
        description2={copy.platforms.description2}
        items2={copy.platforms.items2}
      />
      
      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
