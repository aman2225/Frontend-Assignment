import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Heart,
  Home,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#insights" },
  { label: "Company", href: "#appointment" },
];

const trustStats = [
  { value: "1000+", label: "intelligent homebuyers guided" },
  { value: "80+", label: "research points per property" },
  { value: "25 days", label: "typical assisted purchase window" },
  { value: "Rs 4.78L", label: "average value protected" },
];

const insights = [
  {
    title: "Floor plan intelligence",
    copy: "Review privacy, light, balcony usability, room adjacency, and long-term livability before a visit.",
  },
  {
    title: "Fair-price confidence",
    copy: "Pair market signals with negotiation guidance so buyers know where to push and where to pause.",
  },
  {
    title: "Risk checks",
    copy: "Surface ventilation, flood, air-quality, and future-development concerns in plain language.",
  },
];

const journey = [
  {
    step: "01",
    title: "Discovery",
    copy: "Capture budget, location, commute, family priorities, and absolute deal breakers.",
  },
  {
    step: "02",
    title: "Curated shortlist",
    copy: "Filter the noise into visit-worthy homes with verified facts and transparent trade-offs.",
  },
  {
    step: "03",
    title: "Visit with context",
    copy: "Walk into each site with the right questions, comparable data, and a clear scoring lens.",
  },
  {
    step: "04",
    title: "Negotiate",
    copy: "Use fair value ranges and quality signals to negotiate from evidence, not anxiety.",
  },
  {
    step: "05",
    title: "Close",
    copy: "Coordinate checks, documents, and decisions until the home is actually yours.",
  },
];

const comparisonRows = [
  ["Information depth", "80+ verified data points", "20-40 surface points"],
  ["Transparency", "Pros, cons, and trade-offs", "Mostly highlighted pros"],
  ["Data accuracy", "Architect and public-data verification", "Loose verification"],
  ["Support validity", "Until you find your home", "Based on contacts"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero />
      <TrustBar />
      <InsightsSection />
      <JourneySection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95 backdrop-blur">
      <a
        href="#comparison"
        className="flex min-h-8 items-center justify-center bg-ember px-4 py-2 text-center text-sm font-semibold text-white"
      >
        Check any property&apos;s fair price before you negotiate
        <ChevronRight aria-hidden className="ml-1 h-4 w-4" />
      </a>
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-2 font-bold text-xl" aria-label="Propsoch home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ember text-white">
            <Home aria-hidden className="h-5 w-5" />
          </span>
          <span>
            <span className="text-ember">Prop</span>soch
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-ink hover:text-ember">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="hidden h-10 w-10 place-items-center rounded-md border border-black/10 bg-white text-ink shadow-sm transition hover:border-ember/50 md:grid"
            aria-label="Search properties"
          >
            <Search aria-hidden className="h-5 w-5" />
          </button>
          <button
            className="hidden h-10 w-10 place-items-center rounded-md border border-black/10 bg-white text-ink shadow-sm transition hover:border-ember/50 md:grid"
            aria-label="Saved homes"
          >
            <Heart aria-hidden className="h-5 w-5" />
          </button>
          <a
            href="#appointment"
            className="hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember sm:inline-flex"
          >
            Get started
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-black/10 bg-white text-ink shadow-sm lg:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-190px)] overflow-hidden border-b border-black/10" id="properties">
      <Image
        src="/images/propsoch-hero.webp"
        alt="Propsoch guided home buying program"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(100svh-190px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-md border border-ember/30 bg-white/80 px-3 py-2 text-sm font-semibold text-ember">
              <ShieldCheck aria-hidden className="h-4 w-4" />
              Buyer-first guidance for your dream home
            </p>
            <select className="rounded-md border border-ember/30 bg-white/80 px-3 py-2 text-sm font-semibold text-ink hover:border-ember/60" aria-label="Select city">
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.03] text-ink sm:text-5xl lg:text-6xl">
            Buy the right home with verified insight before every visit.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Propsoch turns property hunting into a clear decision system: curated homes, fair-price checks, expert
            trade-offs, and guided negotiation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 text-base font-bold text-white shadow-soft transition hover:bg-emberDark"
            >
              Book an appointment
              <ArrowRight aria-hidden className="h-5 w-5" />
            </a>
            <a
              href="#insights"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-black/15 bg-white/85 px-5 py-3 text-base font-bold text-ink transition hover:border-ember/60"
            >
              See how insights work
              <BarChart3 aria-hidden className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-7 hidden max-w-xl grid-cols-3 gap-3 2xl:grid">
            {[
              ["No spam visits", "Only shortlisted homes"],
              ["Fair value", "Evidence-led negotiation"],
              ["Expert checks", "Architect-backed review"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-md border border-black/10 bg-white/80 p-3 shadow-sm">
                <p className="text-sm font-bold text-ink">{title}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-ink py-6 text-white" aria-label="Propsoch impact">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustStats.map((stat) => (
          <div key={stat.label} className="rounded-md border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm leading-5 text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="insights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Research platform</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Deep property checks, translated into buyer decisions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            The original site has strong research depth. This rebuild makes that value visible sooner with clearer
            product proof and bite-sized reasons to trust the guidance.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-4">
            {insights.map((item, index) => (
              <article key={item.title} className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ember/10 text-sm font-black text-ember">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{item.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <figure className="overflow-hidden rounded-md border border-black/10 bg-white shadow-soft">
            <Image
              src="/images/insight-preview.webp"
              alt="Illustrated Propsoch floor plan insight report preview"
              width={1100}
              height={760}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="scroll-mt-28 bg-porcelain py-20 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sea">Guided journey</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              From first filter to final negotiation, every step has a job.
            </h2>
          </div>
          <a
            href="#appointment"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/20 bg-white px-5 py-3 font-bold text-ink transition hover:border-ember/60"
          >
            Start with discovery
            <ClipboardCheck aria-hidden className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {journey.map((item) => (
            <article key={item.step} className="rounded-md border border-black/10 bg-paper p-5 shadow-sm">
              <p className="text-sm font-black text-ember">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="comparison">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sage">Why it works</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Less FOMO, more facts.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              The comparison table from the original page is preserved, but tightened so buyers can scan the
              difference immediately.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-md border border-sage/20 bg-sage/10 p-4">
              <Calculator aria-hidden className="h-7 w-7 shrink-0 text-sage" />
              <p className="text-sm font-semibold text-ink">
                Fair-price guidance turns negotiation into a repeatable, evidence-led workflow.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-black/10 bg-white shadow-soft">
            <div className="grid grid-cols-[1fr_1.1fr_1.1fr] bg-ink text-sm font-black text-white">
              <div className="p-4">Decision area</div>
              <div className="border-l border-white/10 p-4">Propsoch</div>
              <div className="border-l border-white/10 p-4">Typical broker</div>
            </div>
            {comparisonRows.map(([area, propsoch, broker]) => (
              <div key={area} className="grid grid-cols-[1fr_1.1fr_1.1fr] border-t border-black/10 text-sm md:text-base">
                <div className="p-4 font-bold">{area}</div>
                <div className="border-l border-black/10 bg-ember/5 p-4">{propsoch}</div>
                <div className="border-l border-black/10 bg-porcelain p-4 text-muted">{broker}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-ink py-20 text-white" id="appointment">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ember">Book with clarity</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Make your shortlist smaller and your decision stronger.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Start with a guided discovery call, then move through verified homes, insight reports, and negotiation
            support without wasting weekends on irrelevant visits.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.propsoch.com/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ember px-5 py-3 font-bold text-white transition hover:bg-emberDark"
            >
              Book an appointment
              <ArrowRight aria-hidden className="h-5 w-5" />
            </a>
            <a
              href="https://www.propsoch.com/fair-price-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 font-bold text-white transition hover:border-ember"
            >
              Check fair price
              <Calculator aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <VisualNote
            image="/images/propsoch-home.webp"
            alt="Home illustration"
            title="Dream home"
            copy="Curated homes that fit the actual life you are buying for."
          />
          <VisualNote
            image="/images/propsoch-family.webp"
            alt="Family illustration"
            title="Home sweet home"
            copy="A buying journey calm enough for everyone involved."
          />
        </div>
      </div>
    </section>
  );
}

function VisualNote({
  image,
  alt,
  title,
  copy,
}: {
  image: string;
  alt: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="flex items-center gap-4 rounded-md border border-white/10 bg-white/5 p-4">
      <Image src={image} alt={alt} width={194} height={156} className="h-24 w-28 rounded-md object-cover" loading="lazy" />
      <div>
        <div className="flex items-center gap-2 text-ember">
          <Sparkles aria-hidden className="h-4 w-4" />
          <h3 className="font-black text-white">{title}</h3>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">{copy}</p>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-paper py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Propsoch landing page rebuild for the frontend engineering assignment.</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 aria-hidden className="h-4 w-4 text-sage" />
            Next.js
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="h-4 w-4 text-ember" />
            Bangalore
          </span>
        </div>
      </div>
    </footer>
  );
}
