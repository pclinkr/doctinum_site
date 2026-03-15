import { useCallback, useEffect, useRef, useState } from 'react';
import Home2HeroSection from '../components/sections/page-sections/Home2HeroSection';
import Home2TensionSection from '../components/sections/page-sections/Home2TensionSection';
import Home2ApproachSection from '../components/sections/page-sections/Home2ApproachSection';
import Home2TestimonialSection from '../components/sections/page-sections/Home2TestimonialSection';
import Home2InfrastructureSection from '../components/sections/page-sections/Home2InfrastructureSection';
import Home2UseCasesSection from '../components/sections/page-sections/Home2UseCasesSection';
import Home2SimulationSection from '../components/sections/page-sections/Home2SimulationSection';
import Home2SecurityStripSection from '../components/sections/page-sections/Home2SecurityStripSection';
import Home2FinalCtaSection from '../components/sections/page-sections/Home2FinalCtaSection';
import Home2VoiceSimulationOverlay from '../components/sections/page-sections/Home2VoiceSimulationOverlay';
import Home2MediaShowcaseSection from '../components/sections/page-sections/Home2MediaShowcaseSection';
import Home2FullWidthMediaSection from '../components/sections/page-sections/Home2FullWidthMediaSection';

const OVERLAY_EXIT_MS = 1000;
const HOME2_MEDIA_ANIMATION_VARIANT = 'current';

const HOME2_MEDIA_AFTER_TENSION = [
  {
    type: 'image',
    src: '/assets/images/consultation.png',
    alt: 'Clinical dashboard showing patient follow-up statuses',
    overlay:
      'linear-gradient(180deg,rgba(8,16,28,0.06) 0%,rgba(8,16,28,0.2) 100%)',
  },
  {
    type: 'image',
    src: '/assets/images/phone_patient.png',
    alt: 'Patient at home on a follow-up call',
    overlay:
      'linear-gradient(180deg,rgba(12,22,40,0.08) 0%,rgba(12,22,40,0.24) 100%)',
  },
];

const HOME2_MEDIA_AFTER_APPROACH = [
  {
    type: 'video',
    src: '/assets/videos/videos_cares.mp4',
    poster: '/assets/images/nurse-follow-up.png',
    alt: 'Product walkthrough: protocol setup and call flow',
    openInModal: false,
    videoAutoplayInline: true,
    videoMuted: true,
    videoLoop: true,
    overlay:
      'linear-gradient(180deg,rgba(235,240,244,0.06) 0%,rgba(8,16,28,0.06) 75%, rgba(8,16,28,0.4) 100%)',
    playLabel: 'Play product demo video',
  },
  {
    type: 'image',
    src: '/assets/images/coordination_physiotherapist.png',
    alt: 'Practitioner reviewing structured summary before consultation',
    overlay:
      'linear-gradient(180deg,rgba(235,240,244,0.06) 0%,rgba(8,16,28,0.06) 75%, rgba(8,16,28,0.4) 100%)',
  },
];

const HOME2_MEDIA_AFTER_INFRASTRUCTURE = [
  {
    type: 'image',
    src: '/assets/images/process_api_doctinum.png',
    alt: 'Protocol configuration view',
    overlay:
      'linear-gradient(180deg,rgba(15,28,48,0.06) 0%,rgba(15,28,48,0.18) 100%)',
  },
  {
    type: 'image',
    src: '/assets/images/coordination_physiotherapist.png',
    alt: 'Longitudinal trend visualization',
    overlay:
      'linear-gradient(180deg,rgba(8,18,34,0.08) 0%,rgba(8,18,34,0.22) 100%)',
  },
  {
    type: 'image',
    src: '/assets/images/mental_patient.png',
    alt: 'Realtime clinician alert view',
    overlay:
      'linear-gradient(180deg,rgba(11,20,36,0.1) 0%,rgba(11,20,36,0.28) 100%)',
  },
];

function scrollToSection(sectionId) {
  if (typeof window === 'undefined') return;

  const targetElement = document.getElementById(sectionId);
  if (!targetElement) return;

  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HomePage2({
  active,
  onNavigate,
  storyStarted,
  instantHero,
}) {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [isSimulationClosing, setIsSimulationClosing] = useState(false);
  const [selectedSimulationSpecialtyId, setSelectedSimulationSpecialtyId] =
    useState('ortho');
  const [simulationLaunchRect, setSimulationLaunchRect] = useState(null);
  const closeTimerIdRef = useRef(null);

  const clearCloseTimer = () => {
    if (!closeTimerIdRef.current) return;
    window.clearTimeout(closeTimerIdRef.current);
    closeTimerIdRef.current = null;
  };

  const handleOpenSimulation = useCallback((specialtyId, launchRect) => {
    clearCloseTimer();
    setSelectedSimulationSpecialtyId(specialtyId || 'ortho');
    setSimulationLaunchRect(launchRect || null);
    setIsSimulationClosing(false);
    setIsSimulationOpen(true);
  }, []);

  const handleRequestSimulationClose = useCallback(() => {
    if (!isSimulationOpen || isSimulationClosing) return;

    setIsSimulationClosing(true);
    clearCloseTimer();
    closeTimerIdRef.current = window.setTimeout(() => {
      setIsSimulationOpen(false);
      setIsSimulationClosing(false);
      setSimulationLaunchRect(null);
    }, OVERLAY_EXIT_MS);
  }, [isSimulationClosing, isSimulationOpen]);

  useEffect(() => {
    if (!isSimulationOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSimulationOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const handleJumpToSimulation = () => scrollToSection('simulation');

  return (
    <div id="page-home2" className={`page ${active ? 'active' : ''}`.trim()}>
      <Home2HeroSection
        onNavigate={onNavigate}
        storyStarted={storyStarted}
        instant={instantHero}
        onJumpToSimulation={handleJumpToSimulation}
      />

      <Home2TensionSection />

      <Home2MediaShowcaseSection
        gridVariant="two"
        items={HOME2_MEDIA_AFTER_TENSION}
        sectionHeight={400}
        animationVariant={HOME2_MEDIA_ANIMATION_VARIANT}
      />

      <Home2ApproachSection />

      <Home2MediaShowcaseSection
        gridVariant="wide"
        items={HOME2_MEDIA_AFTER_APPROACH}
        sectionHeight={380}
        animationVariant={HOME2_MEDIA_ANIMATION_VARIANT}
      />

      <Home2TestimonialSection />

      <Home2InfrastructureSection onNavigate={onNavigate} />

      {/* <Home2MediaShowcaseSection
        gridVariant="three"
        items={HOME2_MEDIA_AFTER_INFRASTRUCTURE}
        sectionHeight={280}
      /> */}

      <Home2UseCasesSection />
      <Home2SimulationSection onLaunchSimulation={handleOpenSimulation} />
      <Home2SecurityStripSection onNavigate={onNavigate} />

      <Home2FullWidthMediaSection
        src="/assets/images/fullwidth_care.png"
        type="image"
        alt="Warm human care scene"
        sectionHeight={480}
        animationVariant={HOME2_MEDIA_ANIMATION_VARIANT}
        overlay="linear-gradient(180deg,rgba(7,11,24,0.14) 0%,rgba(7,11,24,0.5) 100%)"
      />

      <Home2FinalCtaSection
        onNavigate={onNavigate}
        onJumpToSimulation={handleJumpToSimulation}
      />

      {isSimulationOpen ? (
        <Home2VoiceSimulationOverlay
          specialtyId={selectedSimulationSpecialtyId}
          launchOriginRect={simulationLaunchRect}
          isClosing={isSimulationClosing}
          onRequestClose={handleRequestSimulationClose}
        />
      ) : null}

      <div id="homeFooter" />
    </div>
  );
}
