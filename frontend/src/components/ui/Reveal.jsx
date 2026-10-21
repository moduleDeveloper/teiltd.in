import { useReveal } from '@/hooks/useReveal';
import { cn, revealHidden, revealShown } from '@/lib/styles';

/** Fades/slides its content in once it scrolls into view. `variant` picks the
 * effect: 'up', 'left', 'right', 'zoom' or 'flip'. */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  staggerIndex = 0,
  className = '',
  children,
  ...rest
}) {
  const { ref, inView, done } = useReveal(staggerIndex);
  // Reveal classes go last so they win over the element's own transition while the
  // reveal plays; after that they're dropped and the element's own classes apply.
  return (
    <Tag ref={ref} className={cn(className, done ? null : inView ? revealShown : revealHidden[variant])} {...rest}>
      {children}
    </Tag>
  );
}
