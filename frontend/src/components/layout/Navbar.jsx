import { useState } from 'react';
import { AppButton } from '@/components/ui';
import { NavItem } from '@/components/ui';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { NAV_ITEMS } from '@/lib/config/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollState } from '@/hooks/useScrollState';
import { cn } from '@/lib/styles';

const SECTION_IDS = NAV_ITEMS.map((item) => item.sectionId).filter(Boolean);

// Nav links: gold underline grows in from the left on hover.
const navLink =
  "relative cursor-pointer [transition:color_0.25s] text-inherit whitespace-nowrap hover:text-gold-2 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[1px] after:bg-gold after:[transform:scaleX(0)] after:origin-[left] after:[transition:transform_0.3s] hover:after:[transform:scaleX(1)]";
// The section currently on screen: white text and a full underline.
const navLinkActive = 'text-ink hover:text-ink after:[transform:scaleX(1)]';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  // On mobile the links and buttons are hidden behind the burger; `open` shows them
  // as full-width rows under the logo.
  const actionOpen = open && 'mobile:flex-1 mobile:justify-center';
  const activeId = useActiveSection(SECTION_IDS);
  const { scrolled } = useScrollState();

  return (
    // 60px sides up to a 1440px screen; beyond that the bar stays full width but its
    // content stays within the same 1320px it had inside the old 1440px wrapper.
    // Sticky: always visible while scrolling down or up; once scrolled it gets a blurred dark backing.
    <header
      className={cn(
        'sticky top-0 z-[40] [transition:transform_0.35s_cubic-bezier(0.2,0.7,0.2,1),background-color_0.35s,box-shadow_0.35s] motion-reduce:[transition:none]',
        scrolled && 'bg-[rgba(7,6,3,0.82)] [backdrop-filter:blur(14px)] [box-shadow:0_10px_30px_rgba(0,0,0,0.45)]',
        "flex items-center justify-between gap-[20px] py-[12px] px-[max(60px,calc((100%_-_1320px)_/_2))] border-b border-b-line tablet:px-[40px]! mobile:py-[14px]! mobile:px-[20px]! mobile:flex-wrap"
      )}
    >
      <div className="flex items-center gap-[14px]">
        <img
          className="animate-logo-glow motion-reduce:animate-none! [transition:transform_0.5s] hover:[transform:rotate(-4deg)_scale(1.06)] mobile:w-[64px]! mobile:h-[64px]! w-[92px] h-[92px] rounded-[14px] object-contain bg-[#000] p-[4px] border border-line-2 shrink-0"
          src="/setu-logo.webp"
          alt="SETU"
          width={92}
          height={92}
          fetchPriority="high"
        />
        <div className="flex flex-col leading-[1.1]">
          <span className="[font-family:'Playfair_Display',serif] font-bold text-[26px] tracking-[0.04em] text-gold">SETU</span>
          <span className="text-[8.5px] tracking-[0.05em] text-gold-2 font-semibold uppercase leading-[1.35] max-w-[160px]">
            Where AI Connections Create Power
          </span>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className={cn(
          'flex items-center gap-[22px] text-[14.5px] font-medium text-sub tablet:gap-[16px]! tablet:text-[14px]! mobile:hidden!',
          open &&
            'mobile:flex! mobile:flex-col mobile:w-full mobile:order-3 mobile:gap-[14px]! mobile:pt-[18px] mobile:px-[4px] mobile:pb-[6px] mobile:border-t mobile:border-t-line mobile:mt-[14px]'
        )}
      >
        <span className="relative cursor-pointer [transition:color_0.25s] whitespace-nowrap bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold))] text-[#1a1204] text-[11px] font-bold tracking-[0.08em] uppercase py-[8px] px-[14px] rounded-[999px] tablet:hidden mobile:inline-block">
          Platform Features
        </span>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            onNavigate={closeMenu}
            active={item.sectionId === activeId}
            className={cn(navLink, item.sectionId === activeId && navLinkActive)}
          />
        ))}
      </nav>

      <div
        className={cn(
          'flex items-center gap-[12px] mobile:hidden!',
          open && 'mobile:flex! mobile:w-full mobile:order-4 mobile:pt-[6px] mobile:px-[4px] mobile:pb-[4px]'
        )}
      >
        <AppButton
          variant="ghost"
          href={EXTERNAL_LINKS.userLogin}
          newTab={false}
          className={cn('py-[12px] px-[22px] text-[14px] border-[rgba(232,184,75,0.35)] whitespace-nowrap', actionOpen)}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 17l5-5-5-5M15 12H3M21 4v16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          User Login
        </AppButton>
        <AppButton
          variant="primary"
          href={EXTERNAL_LINKS.login}
          newTab={false}
          className={cn('py-[12px] px-[22px] text-[14px] whitespace-nowrap', actionOpen)}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 17l5-5-5-5M15 12H3M21 4v16"
              stroke="#1a1204"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          App Login
        </AppButton>
      </div>

      <button
        className="hidden bg-none border border-line-2 rounded-[10px] w-[42px] h-[42px] p-[9px] flex-col justify-between cursor-pointer mobile:flex"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="block h-[2px] bg-ink rounded-[2px]"></span>
        <span className="block h-[2px] bg-ink rounded-[2px]"></span>
        <span className="block h-[2px] bg-ink rounded-[2px]"></span>
      </button>
    </header>
  );
}
