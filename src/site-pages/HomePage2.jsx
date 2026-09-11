import { useCallback, useEffect, useRef, useState } from 'react';
import HomeStorySection from '../components/sections/page-sections/HomeStorySection';
import ShowcaseHowItWorksSection from '../components/sections/page-sections/ShowcaseHowItWorksSection';
import ShowcaseSolutionSection from '../components/sections/page-sections/ShowcaseSolutionSection';
import ShowcaseResultsSection from '../components/sections/page-sections/ShowcaseResultsSection';
import ShowcaseInActionSection from '../components/sections/page-sections/ShowcaseInActionSection';
import ShowcaseInviteSection from '../components/sections/page-sections/ShowcaseInviteSection';
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
    useState('aesthetic');
  const [simulationLaunchRect, setSimulationLaunchRect] = useState(null);
  const closeTimerIdRef = useRef(null);

  const clearCloseTimer = () => {
    if (!closeTimerIdRef.current) return;
    window.clearTimeout(closeTimerIdRef.current);
    closeTimerIdRef.current = null;
  };

  const handleOpenSimulation = useCallback((specialtyId, launchRect) => {
    clearCloseTimer();
    setSelectedSimulationSpecialtyId(specialtyId || 'aesthetic');
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
      {/* Le récit animé occupe le premier écran et toute la piste. Les
          sections qui suivent portent le contenu indexable classique: la piste
          épinglée garde tout son texte dans le DOM, mais une page ne peut pas
          reposer là-dessus seule. */}
      <HomeStorySection onNavigate={onNavigate} />

      {/* Passe de DESIGN: les quatre blocs reprennent la structure visuelle de
          la maquette de référence. Le contenu sera rebranché ensuite sur les
          sections existantes, qui restent en place juste en dessous, en
          attente.

          Même champ que le récit, au jeton près: les deux consomment
          `--gradient-story-field`, déclaré une seule fois dans gradients.css.
          Le nacré se poursuit donc d'une section à l'autre. */}
      <div className="bg-[image:var(--gradient-story-field)]">
        <ShowcaseHowItWorksSection />

        <ShowcaseSolutionSection />

        <ShowcaseResultsSection />

        <ShowcaseInActionSection />
      </div>

      {/* La section Démo n'est plus appelée. Son code — Home2SimulationSection
          et son overlay — reste en place, prêt à être rebranché. */}

      <ShowcaseInviteSection onNavigate={onNavigate} />

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
