import { ExternalLink, Reveal } from '@/components/ui';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import type { FooterSection } from '@/lib/types';

interface FooterColumnProps {
  section: FooterSection;
  staggerIndex: number;
}

/** One footer column (Solutions / Company / …): a heading plus a list of links that
 * either scroll to a same-page section or open an external destination. */
export default function FooterColumn({ section, staggerIndex }: FooterColumnProps) {
  const { getClickHandler } = useScrollToSection();

  return (
    <Reveal
      as="div"
      variant="up"
      staggerIndex={staggerIndex}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'var(--sub)' }}
    >
      <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{section.title}</div>
      {section.items.map((item) =>
        item.sectionId ? (
          <a key={item.label} href={`#${item.sectionId}`} onClick={getClickHandler(item.sectionId)} style={{ color: 'inherit' }}>
            {item.label}
          </a>
        ) : (
          <ExternalLink key={item.label} href={item.href!} newTab={item.external} style={{ color: 'inherit' }}>
            {item.label}
          </ExternalLink>
        )
      )}
    </Reveal>
  );
}
