import { useRef } from 'react';
import { AIBotFab, CursorSpark, GoldLine, ScrollProgress, ScrollToTop } from '@/components/ui';
import { Footer, Navbar } from '@/components/layout';
import {
  AboutSection,
  AiHuman,
  AppInTwoMinutes,
  HeroSection,
  LaunchAppSection,
  // LivePlatformsSection, // hidden for now
  OwnerTest,
  PlansSection,
  Solution,
  SolutionsSection,
} from '@/components/sections';
import { useHeroTilt } from '@/hooks/useHeroTilt';
import { useOffscreenPause } from '@/hooks/useOffscreenPause';

export default function Home() {
  const rootRef = useRef(null);
  useHeroTilt();
  useOffscreenPause(rootRef);

  return (
    // overflow-x-clip (not overflow-hidden) keeps wide glows from adding a horizontal
    // scrollbar without breaking the sticky navbar.
    <div
      ref={rootRef}
      className="w-full [background:radial-gradient(ellipse_60%_38%_at_14%_-4%,rgba(190,140,45,0.45),transparent_62%),radial-gradient(ellipse_50%_30%_at_100%_100%,rgba(190,140,45,0.22),transparent_60%),var(--color-bg)] relative overflow-x-clip z-[1]"
    >
      <ScrollProgress />
      <Navbar />
      <main>
      <AppInTwoMinutes />
      <AboutSection />
      <HeroSection />
      <Solution />
      <AiHuman />
      <GoldLine />
      <OwnerTest />
      <GoldLine />
      <SolutionsSection />
      <GoldLine />
      {/* <LivePlatformsSection /> */}
      <PlansSection />
      <LaunchAppSection />
      </main>
      <Footer />
      <AIBotFab />
      <ScrollToTop />
      <CursorSpark />
    </div>
  );
}
