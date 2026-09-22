import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  as?: ElementType;
  variant?: 'up' | 'left' | 'right';
  staggerIndex?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const variantClass: Record<NonNullable<RevealProps['variant']>, string> = {
  up: 'rv',
  left: 'rv-l',
  right: 'rv-r',
};

export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  staggerIndex = 0,
  className = '',
  style,
  children,
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLElement>(staggerIndex);
  const cls = `${variantClass[variant]}${inView ? ' in' : ''}${className ? ` ${className}` : ''}`;
  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
