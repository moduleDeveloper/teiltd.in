import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import type { NavigationItem } from '@/lib/types';

interface NavItemProps {
  item: NavigationItem;
  /** Called after a successful navigation — e.g. to close the mobile menu. */
  onNavigate?: () => void;
  style?: CSSProperties;
}

/** One navbar/footer entry. Renders as a real anchor either way (so it's a valid,
 * crawlable link), just routed differently depending on which destination the item
 * carries — matches the reference site's `.nav-links > a` underline/hover styling. */
export default function NavItem({ item, onNavigate, style }: NavItemProps) {
  const { getClickHandler } = useScrollToSection();

  if (item.sectionId) {
    const sectionId = item.sectionId;
    return (
      <a
        href={`#${sectionId}`}
        style={style}
        onClick={(e) => {
          getClickHandler(sectionId)(e);
          onNavigate?.();
        }}
      >
        {item.label}
      </a>
    );
  }

  if (item.route) {
    return (
      <Link to={item.route} style={style} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" style={style} onClick={onNavigate}>
      {item.label}
    </a>
  );
}
