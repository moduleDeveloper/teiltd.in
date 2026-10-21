import { Fragment } from 'react';
import { cn, heading, heading2 } from '@/lib/styles';

// Shared entrance for every cascaded piece: starts hidden, rises into place.
const rise =
  'inline-block opacity-0 [transform:translateY(20px)_rotate(2deg)] animate-word-in motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:animate-none!';
const word = `bg-[linear-gradient(135deg,#f7d488_0%,#e8b84b_45%,#d9a53a_100%)] bg-clip-text text-transparent ${rise}`;

const delay = (i) => ({ animationDelay: `${0.15 + i * 0.06}s` });

/**
 * Splits a text run into word spans with the reference's `0.15 + i*0.06s` stagger,
 * where `i` is the index into the whitespace-preserving split (matching the source JS
 * exactly, including whitespace tokens counting toward the delay index).
 */
function cascadeWords(text, keyPrefix, offset) {
  return text.split(/(\s+)/).map((chunk, i) => {
    if (!chunk.trim()) {
      return chunk;
    }
    return (
      <span key={`${keyPrefix}-${i}`} className={word} style={delay(offset + i)}>
        {chunk}
      </span>
    );
  });
}

/**
 * Word-cascade heading: text-node children are split into words; element children
 * (shimmer spans, highlights) rise in as one piece; line breaks are kept as-is.
 * `children` is an ordered list of segments (strings and elements).
 *
 * By default each text segment restarts the stagger (the original hero behaviour).
 * `continuous` keeps counting across segments so the words flow left to right.
 *
 * The animation itself is plain CSS, so it plays when the section scrolls into view
 * (see useOffscreenPause), not on page load.
 */
export default function CascadeHeading({ as: Tag = 'h2', className = '', continuous = false, children }) {
  let index = 0;
  const segments = children.map((seg, idx) => {
    if (typeof seg === 'string') {
      const start = continuous ? index : 0;
      const parts = seg.split(/(\s+)/).length;
      index = start + parts;
      return <Fragment key={idx}>{cascadeWords(seg, `seg${idx}`, start)}</Fragment>;
    }
    if (seg?.type === 'br') return <Fragment key={idx}>{seg}</Fragment>;
    const at = continuous ? index : 0;
    index = at + 1;
    return (
      <span key={idx} className={rise} style={delay(at)}>
        {seg}
      </span>
    );
  });

  // Each word carries its own gradient, so the heading itself drops its background.
  return <Tag className={cn(Tag === 'h1' ? heading : heading2, 'bg-none! bg-clip-border!', className)}>{segments}</Tag>;
}
