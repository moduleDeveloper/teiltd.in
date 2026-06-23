import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  useEffect(() => {
    document.title = "SETU by Thermal Engineers & Insulators Pvt. Ltd. | Digital Platform for Trusts & NGOs";

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
      "SETU builds premium digital community platforms, member communication workflows and sponsor engagement tools for trusts, NGOs, hospitals, gaushalas and HNI communities in Delhi, India."
    );
    setMeta("keywords", "mobile app for NGOs, trust management app India, hospital patron membership app, NGO digital platform India, HNI community app, WhatsApp member updates Delhi, voice reminder assistant India, donation management app, sponsor visibility platform, white label mobile app for trusts");
    setMeta("og:title", "SETU by Thermal Engineers & Insulators Pvt. Ltd. | Digital Platform for Trusts & NGOs", "property");
    setMeta("og:description", "Premium digital platforms, member communication and sponsor engagement tools for NGOs, hospitals, samitis and gaushalas. Live in 2 weeks.", "property");
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
        "https://www.instagram.com/setu.connect_?utm_source=qr",
        "https://www.facebook.com/profile.php?id=61590315414709&mibextid=wwXIfr&mibextid=wwXIfr",
        "https://youtube.com/@setuconnect?si=I9us3BgotmQ90Ny3",
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
      <FloatingWhatsApp />
      <main>
        <Hero />
        <AboutCompany />
        <Proof />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
