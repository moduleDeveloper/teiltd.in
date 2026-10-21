/** Thin gold divider with a light streak running across it. Draws itself in from
 * the left when it scrolls into view. */
export default function GoldLine() {
  return (
    <div className="h-[1px] relative overflow-hidden bg-line origin-left animate-line-draw motion-reduce:animate-none! after:content-[''] after:absolute after:top-0 after:left-[-30%] after:w-[30%] after:h-full after:bg-[linear-gradient(90deg,transparent,var(--color-gold-2),transparent)] after:animate-gline motion-reduce:after:animate-none!" />
  );
}
