import { Link } from 'react-router-dom';
import { useScrollToSection } from '@/hooks/useScrollToSection';

/**
 * One navbar/footer entry. Renders as a real anchor either way (so it's a valid,
 * crawlable link), just routed differently depending on which destination the item
 * carries. `onNavigate` runs after a navigation (e.g. to close the mobile menu).
 * `active` marks the section the visitor is currently looking at.
 */
export default function NavItem({ item, onNavigate, className, active = false }) {
  const { getClickHandler } = useScrollToSection();

  if (item.sectionId) {
    const sectionId = item.sectionId;
    return (
      <a
        href={`#${sectionId}`}
        className={className}
        aria-current={active ? 'location' : undefined}
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
      <Link to={item.route} className={className} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className={className} onClick={onNavigate}>
      {item.label}
    </a>
  );
}
