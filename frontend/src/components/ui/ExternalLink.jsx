/**
 * The single place that decides how an outbound link behaves, so `target`/`rel`
 * never get typed out (or forgotten) at each call site. Opens in a new tab with
 * rel="noopener noreferrer" by default; pass `newTab={false}` for external
 * destinations that should navigate in the same tab (e.g. the login/app URLs —
 * only YouTube/social links pop a new tab).
 */
export default function ExternalLink({ href, children, newTab = true, ...rest }) {
  return (
    <a href={href} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
}
