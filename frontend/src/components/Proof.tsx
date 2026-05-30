import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import { Hospital, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const proofs = [
  {
    icon: Hospital,
    name: "MAH-SETU",
    org: "Maharaja Agrasen Hospital Charitable Trust",
    desc: "Patron dashboard, digital ID card, OPD, doctor listing, appointment booking and referral tracking.",
    accent: "from-gold/20 to-gold/0",
    images: ["/proof/mah-setu-card.jpeg", "/proof/mah-1.jpeg"],
  },
  {
    icon: Heart,
    name: "Kamdhenu / Gauseva Setu",
    org: "Gau Seva & Charitable Hospital Ecosystem",
    desc: "Member updates, donation flow, sponsor visibility, gallery and community communication.",
    accent: "from-gold-deep/20 to-gold/0",
    images: ["/proof/kamdhenu-card.jpeg", "/proof/kamdhenu-1.jpeg"],
  },
  {
    icon: Users,
    name: "Pankhuri: Ek Udaan",
    org: "Mahila Mandal Punjabi Bagh",
    desc: "Member directory, notices, events, gallery, sponsor visibility and community engagement.",
    accent: "from-gold-soft/20 to-gold/0",
    images: ["/proof/ek-udaan-card.jpeg", "/proof/ekUdaan1.jpeg"],
  },
];

const Proof = () => {
  const ref = useReveal();
  const [activeIndexes, setActiveIndexes] = useState(proofs.map(() => 0));
  const [snapDir, setSnapDir] = useState<(null | "next" | "prev")[]>(proofs.map(() => null));
  const [dragging, setDragging] = useState(proofs.map(() => false));
  const [dragX, setDragX] = useState(proofs.map(() => 0));
  const startXRef = useRef<number[]>(proofs.map(() => 0));

  const stepImage = (cardIndex: number, dir: "next" | "prev") => {
    const total = proofs[cardIndex].images.length;
    if (total <= 1 || snapDir[cardIndex]) return;
    const current = activeIndexes[cardIndex];

    setSnapDir((prev) => prev.map((v, i) => (i === cardIndex ? dir : v)));

    window.setTimeout(() => {
      setActiveIndexes((prev) =>
        prev.map((v, i) => {
          if (i !== cardIndex) return v;
          return dir === "next" ? (v + 1) % total : (v - 1 + total) % total;
        })
      );
    }, 260);

    window.setTimeout(() => {
      setSnapDir((prev) => prev.map((v, i) => (i === cardIndex ? null : v)));
    }, 520);
  };

  const jumpImage = (cardIndex: number, dir: "next" | "prev") => {
    const total = proofs[cardIndex].images.length;
    if (total <= 1 || snapDir[cardIndex]) return;

    setActiveIndexes((prev) =>
      prev.map((v, i) => {
        if (i !== cardIndex) return v;
        return dir === "next" ? (v + 1) % total : (v - 1 + total) % total;
      })
    );
  };

  const handlePointerDown = (cardIndex: number, clientX: number) => {
    startXRef.current[cardIndex] = clientX;
    setDragging((prev) => prev.map((v, i) => (i === cardIndex ? true : v)));
    setDragX((prev) => prev.map((v, i) => (i === cardIndex ? 0 : v)));
  };

  const handlePointerMove = (cardIndex: number, clientX: number) => {
    if (!dragging[cardIndex]) return;
    const delta = clientX - startXRef.current[cardIndex];
    const clamped = Math.max(-180, Math.min(180, delta));
    setDragX((prev) => prev.map((v, i) => (i === cardIndex ? clamped : v)));
  };

  const handlePointerEnd = (cardIndex: number) => {
    if (!dragging[cardIndex]) return;
    const delta = dragX[cardIndex];
    setDragging((prev) => prev.map((v, i) => (i === cardIndex ? false : v)));
    setDragX((prev) => prev.map((v, i) => (i === cardIndex ? 0 : v)));

    if (Math.abs(delta) < 70) return;
    stepImage(cardIndex, delta < 0 ? "next" : "prev");
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndexes((prev) =>
        prev.map((value, index) => {
          if (dragging[index] || snapDir[index]) return value;
          const total = proofs[index].images.length;
          if (total <= 1) return value;
          return (value + 1) % total;
        })
      );
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [dragging, snapDir]);

  return (
    <section ref={ref} id="proof" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/70" />
      <div className="container">
        <div className="relative text-center max-w-3xl mx-auto reveal">
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Real platforms. <span className="text-gradient-gold">Real members.</span> Real impact.
          </h2>
          <p className="mt-5 text-muted-foreground/90 text-lg">
            We&apos;re not just making promises — we&apos;re already trusted by some of Delhi&apos;s most respected community organizations.
          </p>
        </div>

        <div className="mt-10 text-center reveal">
          <span className="inline-block px-5 py-2 text-sm uppercase tracking-[0.24em] text-gold-foreground font-bold bg-gradient-gold rounded-full shadow-gold">
            Live Proof
          </span>
        </div>

        <div className="relative mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map((p, i) => (
            (() => {
              const total = p.images.length;
              const current = activeIndexes[i];
              const isDragging = dragging[i];
              const delta = dragX[i];
              const dragDir = delta < 0 ? "next" : "prev";
              const reveal = Math.min(Math.abs(delta) / 220, 1);
              const activeDir = isDragging ? dragDir : snapDir[i];
              const nextIndex =
                activeDir === "next"
                  ? (current + 1) % total
                  : (current - 1 + total) % total;
              const angle =
                isDragging
                  ? activeDir === "next"
                    ? -reveal * 90
                    : reveal * 90
                  : snapDir[i] === "next"
                    ? -90
                    : snapDir[i] === "prev"
                      ? 90
                      : 0;

              return (
                <div
              key={p.name}
              className="group relative rounded-3xl p-8 border border-gold/20 shadow-card overflow-hidden hover:border-gold/45 min-h-[700px] flex flex-col justify-end select-none"
              style={{
                transitionDelay: `${i * 80}ms`,
                transition: "border-color 420ms ease",
              }}
              onPointerDown={(e) => {
                (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
                handlePointerDown(i, e.clientX);
              }}
              onPointerMove={(e) => handlePointerMove(i, e.clientX)}
              onPointerUp={() => handlePointerEnd(i)}
              onPointerCancel={() => handlePointerEnd(i)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl [perspective:1200px]">
                <div
                  className="absolute inset-0 [transform-style:preserve-3d]"
                  style={{
                    ["--cube-depth" as string]: "240px",
                    transform: `translateZ(calc(var(--cube-depth) * -1)) rotateY(${angle}deg)`,
                    transition: isDragging ? "none" : "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="absolute inset-0 [backface-visibility:hidden]"
                    style={{
                      backgroundImage: `url(${p.images[current]})`,
                      backgroundSize: "100% auto",
                      backgroundPosition: "center -44px",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "rgba(0,0,0,0.9)",
                      transform: "rotateY(0deg) translateZ(var(--cube-depth))",
                      transformOrigin: "center center",
                    }}
                  />
                  {activeDir && (
                    <div
                      className="absolute inset-0 [backface-visibility:hidden]"
                      style={{
                        backgroundImage: `url(${p.images[nextIndex]})`,
                        backgroundSize: "100% auto",
                        backgroundPosition: "center -44px",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "rgba(0,0,0,0.9)",
                        transform:
                          activeDir === "next"
                            ? "rotateY(90deg) translateZ(var(--cube-depth))"
                            : "rotateY(-90deg) translateZ(var(--cube-depth))",
                        transformOrigin: "center center",
                        filter: "brightness(0.9)",
                      }}
                    />
                  )}
                  <div
                    className="absolute inset-y-0 left-1/2 w-[2px] bg-black/35"
                    style={{
                      opacity: isDragging || snapDir[i] ? 0.7 : 0,
                      transform: "translateX(-1px) translateZ(var(--cube-depth))",
                    }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_5%,rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.88)_100%)]" />
              <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50`} />
              {total > 1 && (
                <>
                  <div className="absolute right-4 top-4 z-20 rounded-full border border-gold/35 bg-black/55 px-3 py-1 text-xs font-bold text-gold shadow-card backdrop-blur-md">
                    {current + 1} / {total}
                  </div>
                  <button
                    type="button"
                    aria-label={`Show previous image for ${p.name}`}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpImage(i, "prev");
                    }}
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 border border-gold/35 text-gold backdrop-blur-md shadow-card flex items-center justify-center transition-all duration-300 hover:bg-gradient-gold hover:text-gold-foreground hover:border-gold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold/60"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Show next image for ${p.name}`}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpImage(i, "next");
                    }}
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-black/55 border border-gold/35 text-gold backdrop-blur-md shadow-card flex items-center justify-center transition-all duration-300 hover:bg-gradient-gold hover:text-gold-foreground hover:border-gold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold/60"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <p.icon className="w-7 h-7" />
                  </div>
                  {p.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground shadow-gold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-gold drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">{p.name}</h3>
                <p className="text-sm text-gold-soft font-semibold mt-1">{p.org}</p>
                <p className="text-white/90 mt-4 leading-relaxed">{p.desc}</p>
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
