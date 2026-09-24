import { Reveal } from '@/components/ui';

export default function OwnerTest() {
  return (
    <section className="section-tight" style={{ borderTop: '1px solid var(--line)', overflow: 'hidden', position: 'relative' }}>
      <div
        className="glow"
        style={{
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse,rgba(232,184,75,0.12),transparent 70%)',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="container"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
      >
        <Reveal as="div" variant="up" staggerIndex={0} className="eyebrow" style={{ justifyContent: 'center' }}>
          The owner test
        </Reveal>
        <Reveal as="h2" variant="up" staggerIndex={1} style={{ fontSize: 40, maxWidth: 820, lineHeight: 1.2 }}>
          If you take 15 days off, does your selling continue — or slow down?
        </Reveal>
        <Reveal as="p" variant="up" staggerIndex={2} style={{ color: 'var(--sub)', fontSize: 16, maxWidth: 560, lineHeight: 1.7 }}>
          If it depends on a person, your business is owner-dependent. SETU makes it system-driven. You stay in
          control — without being stuck in every follow-up.
        </Reveal>
      </div>
    </section>
  );
}
