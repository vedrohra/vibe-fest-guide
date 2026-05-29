import { createFileRoute, Link, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/events/$slug")({
  head: ({ params }) => {
    const event = events[params.slug as keyof typeof events];
    const title = event ? `${event.name} — VIBE` : "Event — VIBE";
    const desc = event?.tagline ?? "VIBE business event";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
      ],
    };
  },
  component: EventPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-6xl uppercase mb-4">Event not found</h1>
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-primary underline">
          ← Back to VIBE
        </Link>
      </div>
    </div>
  ),
  loader: ({ params }) => {
    if (!(params.slug in events)) throw notFound();
    return null;
  },
});

export const events = {
  "vaels-stock-exchange": {
    n: "01",
    name: "Stock Exchange Simulation",
    tagline: "A real-world-style trading floor. Strategy, instinct, adaptability.",
    desc: "Participants step onto a live trading floor that evaluates their financial strategy and adaptability. Market events drop in real time, prices move with every trade, and the team with the highest-value portfolio at closing bell wins.",
    format: "Teams of 2–3",
    duration: "90 minutes",
    venue: "Trading Floor",
    rules: [
      "Each team starts with an equal seed portfolio of cash and stocks.",
      "Trades are made peer-to-peer; prices are set by negotiation.",
      "Live news drops will impact stock values throughout the round.",
      "Final portfolio is valued at the closing market price.",
    ],
  },
  "crisis": {
    n: "02",
    name: "Crisis Management",
    tagline: "Sharp decision-making and quick adaptability under pressure.",
    desc: "Your team takes over a business facing an unexpected crisis. You will diagnose the situation, weigh the trade-offs, and present a recovery plan that tests sharp decision-making and adaptability when everything is on the line.",
    format: "Teams of 3–4",
    duration: "60 minutes prep + 5 minute pitch",
    venue: "Boardroom A",
    rules: [
      "Each team receives the same crisis brief at the same time.",
      "No internet access during prep — only the provided dossier.",
      "Pitch must cover the diagnosis, the plan, and the trade-offs.",
      "Judged on clarity, feasibility, and creativity of the response.",
    ],
  },
  "trivia": {
    n: "03",
    name: "Trivia Challenge",
    tagline: "Fast-paced rounds of business knowledge and quick recall.",
    desc: "A rapid-fire quiz spanning the world of business — global markets, iconic brands, the founders who built them, and the moments that shaped modern commerce. Speed and accuracy both matter.",
    format: "Teams of 2",
    duration: "45 minutes",
    venue: "Auditorium",
    rules: [
      "Prelims are written; top teams advance to the live buzzer round.",
      "Questions range across finance, marketing, history, and current affairs.",
      "Negative marking applies in the finals — no blind guessing.",
      "Tie-breakers decided by speed round.",
    ],
  },
  "shark-tank": {
    n: "04",
    name: "Pitch Perfect",
    tagline: "Present innovative entrepreneurial ideas. Defend the vision.",
    desc: "A platform for students to present their innovative entrepreneurial and business ideas to a panel of judges. Be ready for hard questions about your market, your numbers, and your edge.",
    format: "Teams of 3–4",
    duration: "3 hour build + 7 minute pitch",
    venue: "Main Hall",
    rules: [
      "Idea can be a product or service — no category restrictions.",
      "Pitch deck and a prototype/mockup are required.",
      "Judges will grill you on TAM, business model, and unit economics.",
      "Judged on originality, viability, and pitch quality.",
    ],
  },
  "product-development": {
    n: "05",
    name: "Product Development",
    tagline: "A creative hub for prototypes that solve real market problems.",
    desc: "A creative hub where students design and present innovative prototypes and solutions to real market problems. From insight to artifact — define the problem, build the solution, and ship the demo.",
    format: "Teams of 3–4",
    duration: "2 hour build + 5 minute demo",
    venue: "Studio",
    rules: [
      "Solutions can be physical mockups, digital prototypes, or service blueprints.",
      "Teams must define the target user and the market problem upfront.",
      "Working demo or clickable prototype required at presentation.",
      "Judged on insight, originality, and execution quality.",
    ],
  },
} as const;


function EventPage() {
  const { slug } = Route.useParams();
  const event = events[slug as keyof typeof events];
  if (!event) return null;

  const slugs = Object.keys(events) as Array<keyof typeof events>;
  const idx = slugs.indexOf(slug as keyof typeof events);
  const nextSlug = slugs[(idx + 1) % slugs.length];
  const next = events[nextSlug];

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link to="/" className="font-mono text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
          ← All Events
        </Link>
        <Link to="/" hash="register" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </Link>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[40vw] leading-none uppercase tracking-tighter select-none">{event.n}</div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="animate-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Event {event.n} / 05
            </p>
            <h1 className="font-display text-6xl md:text-[9rem] leading-[0.85] uppercase tracking-tighter mb-8">
              {event.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">{event.tagline}</p>
          </div>
        </div>
      </header>

      {/* Meta strip */}
      <section className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {[
            { label: "Format", value: event.format },
            { label: "Duration", value: event.duration },
            { label: "Venue", value: event.venue },
          ].map((m) => (
            <div key={m.label} className="p-8">
              <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-3">{m.label}</div>
              <div className="font-display text-2xl uppercase">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About the event */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase text-primary tracking-widest">About the event</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-display uppercase leading-tight">{event.desc}</p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-surface py-24 px-6 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase text-primary tracking-widest mb-4 block">How it works</span>
            <h2 className="font-display text-5xl uppercase leading-none">Rules &amp; Format</h2>
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-px bg-foreground/10 border border-foreground/10">
              {event.rules.map((r, i) => (
                <li key={i} className="bg-background p-6 flex gap-6">
                  <span className="font-mono text-xs text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base md:text-lg">{r}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Next event + CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link
            to="/events/$slug"
            params={{ slug: nextSlug }}
            className="group block p-10 border border-foreground/10 hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">Next event →</div>
            <div className="font-display text-4xl uppercase group-hover:text-primary transition-colors">{next.name}</div>
          </Link>
          <Link
            to="/"
            hash="register"
            className="group block p-10 bg-primary text-primary-foreground hover:bg-foreground transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-80">Ready?</div>
            <div className="font-display text-4xl uppercase">Register your team</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
