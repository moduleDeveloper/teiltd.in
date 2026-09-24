import {
  AIBotFab,
  CursorSpark,
  GoldLine,
  Footer,
  Navbar,
  AiHuman,
  AppInTwoMinutes,
  HeroSection,
  LaunchAppSection,
  LivePlatformsSection,
  OwnerTest,
  PlansSection,
  Solution,
  SolutionsSection,
} from '@/components/ui';
import { useHeroTilt } from '@/hooks/useHeroTilt';

export default function Home() {
  useHeroTilt();

  return (
    <div
      className="site"
      style={{
        width: '100%',
        background:
          'radial-gradient(ellipse 60% 38% at 14% -4%,rgba(190,140,45,0.45),transparent 62%),radial-gradient(ellipse 50% 30% at 100% 100%,rgba(190,140,45,0.22),transparent 60%),var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <Navbar />
      <main>
      <AppInTwoMinutes />
      <HeroSection />
      <Solution />
      <AiHuman />
      <GoldLine />
      <OwnerTest />
      <GoldLine />
      <SolutionsSection />
      <GoldLine />
      <LivePlatformsSection />
      <PlansSection />
      <LaunchAppSection />
      </main>
      <Footer />
      <AIBotFab />
      <CursorSpark />
    </div>
  );
}
