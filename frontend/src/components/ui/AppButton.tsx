import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import type { AppButtonBaseProps, AppButtonVariant } from '@/lib/types';

// The design system only ships `.btn-primary` and `.btn-ghost` today. "secondary"
// is accepted (per the requested variant set) but reuses the ghost look rather than
// inventing an unstyled class — flip this to a real `.btn-secondary` in
// App.css if/when that variant gets its own visual treatment.
const VARIANT_CLASS: Record<AppButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-ghost',
  ghost: 'btn-ghost',
};

interface AppButtonProps extends AppButtonBaseProps {
  /** Same-page section id — renders a real `<a href="#id">` wired through useScrollToSection. */
  sectionId?: string;
  /** Internal React Router path — renders a <Link>. */
  to?: string;
  /** Any other destination (a different domain, or a page outside the SPA) — renders via ExternalLink. */
  href?: string;
  /** Only relevant with `href`; forwarded to ExternalLink (default true = new tab). */
  newTab?: boolean;
  /** Plain action button (e.g. opening a modal) — renders a real <button>. */
  onClick?: () => void;
}

/** The one place button/CTA markup and variant classes live. Picks the right
 * semantic element from whichever destination prop is passed: `sectionId` for
 * same-page scroll, `to` for an internal route, `href` for anything external,
 * `onClick` alone for a plain action button. */
export default function AppButton({
  variant = 'primary',
  children,
  className,
  style,
  sectionId,
  to,
  href,
  newTab,
  onClick,
  type = 'button',
  ...rest
}: AppButtonProps) {
  const { getClickHandler } = useScrollToSection();
  const cls = `${VARIANT_CLASS[variant]}${className ? ` ${className}` : ''}`;

  if (sectionId) {
    return (
      <a href={`#${sectionId}`} onClick={getClickHandler(sectionId)} className={cls} style={style} {...rest}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cls} style={style} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <ExternalLink href={href} newTab={newTab} className={cls} style={style} {...rest}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} style={style} {...rest}>
      {children}
    </button>
  );
}
