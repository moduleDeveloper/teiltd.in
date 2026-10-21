import { useEffect, useState } from 'react';

/** Round gold "back to top" button in the bottom-right corner. It appears once the
 * visitor has scrolled down a bit and smoothly scrolls the page back to the top. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[24px] right-[36px] mobile:right-[12px] mobile:bottom-[16px] z-[50] w-[48px] h-[48px] rounded-[50%] border-none cursor-pointer flex items-center justify-center bg-[linear-gradient(135deg,var(--color-gold-2),var(--color-gold))] [box-shadow:0_10px_30px_rgba(232,184,75,0.35)] [transition:opacity_0.3s,transform_0.3s] hover:[transform:translateY(-3px)] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none [transform:translateY(12px)]'
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="#1a1204" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
