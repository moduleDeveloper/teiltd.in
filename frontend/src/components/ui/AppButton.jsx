import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { btnGhost, btnPrimary, cn, link } from '@/lib/styles';

// "secondary" is accepted but reuses the ghost look until it gets its own design.
const VARIANT_CLASS = {
  primary: btnPrimary,
  secondary: btnGhost,
  ghost: btnGhost,
};

/**
 * The one place button/CTA markup and variant classes live. Picks the right
 * semantic element from whichever destination prop is passed: `sectionId` for
 * same-page scroll, `to` for an internal route, `href` for anything external,
 * `onClick` alone for a plain action button. `className` is merged on top of the
 * variant classes, so it can override them.
 */
export default function AppButton({
  variant = 'primary',
  children,
  className,
  sectionId,
  to,
  href,
  newTab,
  onClick,
  type = 'button',
  ...rest
}) {
  const { getClickHandler } = useScrollToSection();
  // Links sit on top of the site-wide link colours (gold, lighter on hover).
  const linkCls = cn(link, VARIANT_CLASS[variant], className);

  if (sectionId) {
    return (
      <a href={`#${sectionId}`} onClick={getClickHandler(sectionId)} className={linkCls} {...rest}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={linkCls} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <ExternalLink href={href} newTab={newTab} className={linkCls} {...rest}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(VARIANT_CLASS[variant], className)} {...rest}>
      {children}
    </button>
  );
}
