import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const trustedPlatforms = [
  { name: "MAH-SETU", logo: "/proof/mah-logo.jpeg" },
  { name: "Ek Udaan", logo: "/proof/pankhuri-logo.jpeg" },
  { name: "Kamdhenu", logo: "/proof/kamdhenu-logo.jpeg" },
];

const Hero = () => {
  const [isLandscapeVideo, setIsLandscapeVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    const { videoWidth, videoHeight } = event.currentTarget;
    setIsLandscapeVideo(videoWidth > videoHeight);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Browser autoplay policy may block in rare cases.
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden bg-gradient-hero">
      {/* Decorative light */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold-deep/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft border border-gold/30 text-gold-deep text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 5+ Live HNI Communities
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[5.2rem] font-bold leading-[1.02] text-primary">
            Where Communities <span className="text-gradient-gold">Feel Connected</span>
          </h1>

          <div className="mt-5 max-w-xl space-y-3 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              SETU helps trusts, NGOs, hospitals and respected communities keep every member informed, connected and proud - through premium digital platforms, member communication and community engagement tools.
            </p>
            <p>
              SETU is owned and created by Thermal Engineers &amp; Insulators Pvt. Ltd.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#proof"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-gold/25 hover:border-gold bg-background/70 backdrop-blur text-foreground font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <PlayCircle className="w-5 h-5 text-gold" />
              See Live Trust Platforms
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Trusted by live community platforms
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {trustedPlatforms.map((platform) => (
                <div key={platform.name} className="flex flex-col items-start gap-2">
                  <span className="text-sm font-semibold text-primary/80 hover:text-gold transition-colors">
                    {platform.name}
                  </span>
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-12 h-12 rounded-xl object-cover ring-1 ring-gold/35 shadow-card"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media side */}
        <div
          className={`relative mx-auto -mt-16 lg:-mt-24 ${
            isLandscapeVideo ? "max-w-[560px] lg:max-w-[640px]" : "max-w-[385px] lg:max-w-[440px]"
          }`}
        >
          <div
            className={`relative w-full bg-black/95 border border-gold/40 shadow-[0_18px_46px_hsl(43_74%_63%/.35)] p-2 max-h-[82vh] ${
              isLandscapeVideo ? "aspect-[19/9.6] rounded-[1.8rem]" : "aspect-[9.6/19] rounded-[2.2rem]"
            }`}
          >
            <div className={`relative h-full w-full overflow-hidden bg-black ${isLandscapeVideo ? "rounded-[1.3rem]" : "rounded-[1.7rem]"}`}>
              <video
                ref={videoRef}
                src="/setu2.mp4"
                loop
                autoPlay
                controls
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
                onLoadedMetadata={handleVideoMetadata}
                className="h-full w-full object-cover select-none"
                aria-label="SETU app demo video in phone screen"
              />
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="absolute -right-4 bottom-10 bg-background/90 rounded-2xl p-4 shadow-elegant border border-gold/20 hidden md:block backdrop-blur">
            <div className="text-xs text-muted-foreground">Go Live In</div>
            <div className="font-display text-2xl text-gradient-gold">2 Weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
