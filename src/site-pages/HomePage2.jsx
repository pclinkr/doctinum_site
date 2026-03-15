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

const OVERLAY_EXIT_MS = 1000;

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
      <Home2ApproachSection />
      <Home2TestimonialSection />
      <Home2InfrastructureSection onNavigate={onNavigate} />
      <Home2UseCasesSection />
      <Home2SimulationSection onLaunchSimulation={handleOpenSimulation} />
      <Home2SecurityStripSection onNavigate={onNavigate} />
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
