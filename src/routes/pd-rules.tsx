import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pd-rules")({
  head: () => ({
    meta: [
      { title: "Product Development Guide — VIBE" },
      { name: "description", content: "Full rules and procedures for the Product Development event at VIBE." },
      { property: "og:title", content: "Product Development Guide — VIBE" },
      { property: "og:description", content: "Full rules and procedures for Product Development." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: PdRulesPage,
});

type Section = {
  id: string;
  title: string;
  intro?: string;
  blocks?: { heading?: string; body?: string; items?: string[] }[];
};

const sections: Section[] = [
  {
    id: "i",
    title: "Please See",
    blocks: [
      {
        items: [
          "Only a maximum of 2 teams from the same school can join Product Development.",
          "Each student cannot take part in more than one programme as they happen simultaneously.",
        ],
      },
    ],
  },
  {
    id: "ii",
    title: "About the Programme",
    intro:
      "Product Development is a test of the team's inventiveness, creativity, and adaptability. Participants are required to design or produce products that meet the directors' specific requirements while also overcoming obstacles and challenges to demonstrate how they would adjust to actual changes in the market.",
    blocks: [
      {
        heading: "Overview",
        body: "Participants will join teams of 3. At the beginning of each round, a specific market/(s) and criteria to be met will be presented to the participants, adhering to which, they must construct any product of their wish and submit drawings of the following:",
        items: [
          "Design / appearance of the chosen product",
          "Packaging",
          "Logo (optional)",
        ],
      },
      {
        heading: "In their presentation, participants must explain:",
        items: [
          "Name of the product",
          "Features and USP",
          "Selling price",
          "Materials to be used",
          "Usefulness of the product",
          "The rationale for creating the product",
        ],
      },
    ],
  },
  {
    id: "iii",
    title: "Round 1 — Brand Collaboration",
    intro:
      "Round 1 is the brand collaboration round. This round is designed to present participants with a fair and engaging challenge, allowing them to create and showcase their exclusive designs based on the products and expertise of two selected companies.",
  },
  {
    id: "iv",
    title: "Round 2 — Fact Sheet",
    intro:
      "Round 2 requires participants to create an original product design based on a specified market and its conditions. This round will challenge participants to think creatively and develop innovative ideas, all while considering the established criteria. (Fact sheet format will be provided on the day.)",
  },
  {
    id: "v",
    title: "Rules",
    blocks: [
      {
        items: [
          "Designs and concepts are to be made traditionally (no digital sketches allowed) for both rounds.",
          "Participants will be expected to bring their own tools and materials for all the rounds that they require for their sketches or models (pencils, coloured pencils, paints, etc).",
          "AI is prohibited in all rounds, including during research. If participants are caught using AI, they will face severe punishment.",
          "Participants must follow the time limits set by the judges and will have a brief period before the round starts to conduct research.",
        ],
      },
    ],
  },
  {
    id: "vi",
    title: "Programme Directors",
    blocks: [
      {
        items: [
          "Zoya Hassan",
          "Sara Shylender Ram",
          "V. Zanna Rachel",
        ],
      },
    ],
  },
];

function PdRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "product-development" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to Product Development
        </Link>
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[30vw] leading-none uppercase tracking-tighter select-none">PD</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Product Development Guide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Please read the following information carefully so that you know exactly what this event requires from participants.
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {sections.map((s) => (
            <article key={s.id} id={s.id}>
              <div className="flex items-baseline gap-6 mb-8 pb-4 border-b-2 border-primary">
                <span className="font-mono text-primary text-sm uppercase tracking-widest">({s.id.toUpperCase()})</span>
                <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight">{s.title}</h2>
              </div>
              {s.intro && <p className="text-base md:text-lg leading-relaxed mb-8 text-muted-foreground">{s.intro}</p>}
              <div className="space-y-8">
                {s.blocks?.map((b, i) => (
                  <div key={i}>
                    {b.heading && (
                      <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-4 text-primary">{b.heading}</h3>
                    )}
                    {b.body && <p className="text-base md:text-lg leading-relaxed mb-4">{b.body}</p>}
                    {b.items && (
                      <ol className="space-y-px bg-foreground/10 border border-foreground/10">
                        {b.items.map((it, j) => (
                          <li key={j} className="bg-background p-5 flex gap-5">
                            <span className="font-mono text-xs text-primary shrink-0 mt-1">{String(j + 1).padStart(2, "0")}</span>
                            <span className="text-base md:text-lg">{it}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <Link
            to="/events/$slug"
            params={{ slug: "product-development" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">Product Development Event Page</div>
          </Link>
          <a
            href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-10 bg-primary text-primary-foreground hover:bg-foreground transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-80">Ready?</div>
            <div className="font-display text-3xl uppercase">Register your team</div>
          </a>
        </div>
      </section>
    </main>
  );
}
