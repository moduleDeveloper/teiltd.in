import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Proof from "@/components/Proof";
import ModulesWorking from "@/components/ModulesWorking";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "TEI — AI & Digital Platforms for Trusts, NGOs & HNI Communities";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "TEI builds branded mobile apps, AI voice agents, WhatsApp automation & digital platforms for NGOs, hospitals, trusts, gaushalas & HNI communities in Delhi, India."
    );
    setMeta("keywords", "AI solutions Delhi, mobile app for NGOs, trust management app India, hospital patron membership app, NGO digital platform India, HNI community app, WhatsApp automation Delhi, AI voice agent India, donation management app, sponsor management platform, white label mobile app for trusts");
    setMeta("og:title", "TEI — Premium Digital Platforms for Trusts & HNI Communities", "property");
    setMeta("og:description", "Branded apps, AI voice agents & WhatsApp automation for NGOs, hospitals, samitis & gaushalas. Live in 2 weeks.", "property");
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";

    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Thermal Engineers & Insulators Pvt. Ltd.",
      alternateName: "TEI",
      url: window.location.origin,
      founder: { "@type": "Person", name: "Ankit Gupta" },
      address: { "@type": "PostalAddress", addressLocality: "North Delhi", addressCountry: "IN" },
      sameAs: [
        "https://www.instagram.com/elitecommunity_hub/",
        "https://www.facebook.com/profile.php?id=61588890179524",
        "https://www.youtube.com/@EliteCommunity_Hub",
      ],
      contactPoint: { "@type": "ContactPoint", telephone: "+91-9136373636", contactType: "customer service" },
    };
    let script = document.getElementById("ld-org") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-org";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ld);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Platform />
        <Proof />
        <ModulesWorking />
        <Audience />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
