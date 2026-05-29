import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LegalPageLayoutProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

const LegalPageLayout = ({ title, updated, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20 bg-gradient-hero">
        <section className="container max-w-4xl">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-foreground font-semibold bg-gradient-gold rounded-full shadow-gold">
            Legal
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          <div className="mt-10 rounded-3xl border border-gold/20 bg-gradient-card p-7 md:p-10 shadow-card text-foreground/80 leading-relaxed space-y-8">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
