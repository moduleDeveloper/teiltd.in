import { Fragment, type CSSProperties, type ReactNode } from 'react';

/** Splits a text run into `.word` spans with the reference's `0.15 + i*0.06s` stagger,
 * where `i` is the index into the whitespace-preserving split (matching the source JS
 * exactly, including whitespace tokens counting toward the delay index). */
function cascadeWords(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\s+)/).map((chunk, i) => {
    if (!chunk.trim()) {
      return chunk;
    }
    return (
      <span key={`${keyPrefix}-${i}`} className="word" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
        {chunk}
      </span>
    );
  });
}

interface CascadeHeadingProps {
  as?: 'h1' | 'h2';
  className?: string;
  style?: CSSProperties;
  /** Ordered list of segments: plain strings get word-split, ReactNode segments (e.g. <br/>, shimmer spans) pass through untouched. */
  children: (string | ReactNode)[];
}

/** Reproduces `.section h2` word-cascade: only text-node children are split into words;
 * element children (line breaks, shimmer spans) are rendered as-is. */
export default function CascadeHeading({ as: Tag = 'h2', className = '', style, children }: CascadeHeadingProps) {
  return (
    <Tag className={`word-h${className ? ` ${className}` : ''}`} style={style}>
      {children.map((seg, idx) => (
        <Fragment key={idx}>{typeof seg === 'string' ? cascadeWords(seg, `seg${idx}`) : seg}</Fragment>
      ))}
    </Tag>
  );
}
