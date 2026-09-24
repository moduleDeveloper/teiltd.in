import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Opens in a new tab with rel="noopener noreferrer" (the default). Set to false
   * for external destinations that should still navigate in the same tab — e.g. the
   * login/app URLs, per the site's convention that only YouTube/social links pop a
   * new tab. */
  newTab?: boolean;
}

/** The single place that decides how an outbound link behaves, so `target`/`rel`
 * never get typed out (or forgotten) at each call site. */
export default function ExternalLink({ href, children, newTab = true, ...rest }: ExternalLinkProps) {
  return (
    <a href={href} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
}
