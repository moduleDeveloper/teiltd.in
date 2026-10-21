import { ExternalLink, Reveal } from '@/components/ui';
import { useScrollToSection } from '@/hooks/useScrollToSection';

/**
 * One footer column (Solutions / Company / …): a heading plus a list of links that
 * either scroll to a same-page section or open an external destination.
 */
export default function FooterColumn({ section, staggerIndex }) {
  const { getClickHandler } = useScrollToSection();

  return (
    <Reveal
      as="div"
      variant="up"
      staggerIndex={staggerIndex}
      className="flex flex-col gap-[10px] text-[13.5px] text-sub"
    >
      <div className="font-bold text-ink mb-[4px]">{section.title}</div>
      {section.items.map((item) =>
        item.sectionId ? (
          <a key={item.label} href={`#${item.sectionId}`} onClick={getClickHandler(item.sectionId)} className={"text-inherit hover:text-inherit"}>
            {item.label}
          </a>
        ) : (
          <ExternalLink key={item.label} href={item.href} newTab={item.external} className={"text-inherit hover:text-inherit"}>
            {item.label}
          </ExternalLink>
        )
      )}
    </Reveal>
  );
}
