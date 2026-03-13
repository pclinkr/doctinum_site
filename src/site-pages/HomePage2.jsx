import Home2HeroSection from '../components/sections/page-sections/Home2HeroSection';
import Home2TensionSection from '../components/sections/page-sections/Home2TensionSection';
import Home2ApproachSection from '../components/sections/page-sections/Home2ApproachSection';
import Home2TestimonialSection from '../components/sections/page-sections/Home2TestimonialSection';
import Home2InfrastructureSection from '../components/sections/page-sections/Home2InfrastructureSection';
import Home2UseCasesSection from '../components/sections/page-sections/Home2UseCasesSection';
import Home2SimulationSection from '../components/sections/page-sections/Home2SimulationSection';
import Home2SecurityStripSection from '../components/sections/page-sections/Home2SecurityStripSection';
import Home2FinalCtaSection from '../components/sections/page-sections/Home2FinalCtaSection';

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
      <Home2SimulationSection onNavigate={onNavigate} />
      <Home2SecurityStripSection onNavigate={onNavigate} />
      <Home2FinalCtaSection
        onNavigate={onNavigate}
        onJumpToSimulation={handleJumpToSimulation}
      />
      <div id="homeFooter" />
    </div>
  );
}
