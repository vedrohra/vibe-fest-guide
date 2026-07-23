import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/crisis-rules")({
  head: () => ({
    meta: [
      { title: "Crisis Rules & Procedures — VIBE" },
      { name: "description", content: "Full rules and procedures for the Crisis event at VIBE." },
      { property: "og:title", content: "Crisis Rules & Procedures — VIBE" },
      { property: "og:description", content: "Official Rules of Procedure for Crisis." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: CrisisRulesPage,
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
    title: "About the Event",
    intro:
      "Crisis is a fast-paced strategic simulation designed to immerse participants in the volatile world of corporate crisis management. This event challenges participants to think like executives and directors of corporations, tackling real-time political, economic, social, and environmental disruptions that test their decision-making, adaptability, and leadership. In the world of business, it's survival of the fittest. Whether it's allegations of corporate fraud or a stock market plunge, every decision you make as the Board of Directors determines your company's future.",
  },
  {
    id: "ii",
    title: "Team Structure",
    blocks: [
      {
        items: [
          "Participants form teams of 3 representing the Board of Directors of a fictional company.",
          "Teams are expected to discuss, analyse, and make decisions together.",
          "Only one designated speaker may present the team's final response during the presentation round.",
        ],
      },
    ],
  },
  {
    id: "iii",
    title: "Starting Position",
    blocks: [
      {
        items: [
          "Companies are assigned arbitrarily and revealed prior to the event.",
          "Each company has a unique profile with its own core values & culture, competitor and ally landscape, current affairs, and any relevant information.",
          "Each team will begin with an equal initial value of company funds and reputation points. The amount held by a team throughout the event will vary depending on performance.",
        ],
      },
    ],
  },
  {
    id: "iv",
    title: "Crisis Rounds",
    blocks: [
      {
        body: "Teams are given anywhere between 10–15 minutes to respond to the presented crisis on screen. Responses must reflect your company's values, ensure long-term sustainability, and maintain stakeholder confidence.",
      },
      {
        heading: "Strategic Actions",
        items: [
          "Teams may choose from a range of strategic actions to respond to the crisis.",
          "Each action will have a financial cost expressed as a percentage of the team's current funds.",
          "Strategic and efficient use of funds is encouraged.",
          "Teams are allowed to take reasonable actions beyond those mentioned, free of cost.",
        ],
      },
      {
        heading: "Reputation Points",
        body: "Reputation Points represent the level of public trust and confidence in the company. Teams may gain or lose Reputation Points based on the effectiveness of their decisions, the execution of their strategy, and the jury's judgement.",
      },
    ],
  },
  {
    id: "v",
    title: "The Jury",
    blocks: [
      {
        body: "Following the presentation, the jury (a group of 4–5) may ask the team questions. Teams should be prepared to justify their decision-making, use of company funds, potential impact of their strategy, and the risks associated with their chosen actions. The jury may use the team's responses during the Q&A session when evaluating their solution.",
      },
      {
        heading: "Successful Execution",
        body: "The team will receive the applicable Reputation Point reward and continue with its remaining funds plus a jury bonus.",
      },
      {
        heading: "Unsuccessful Execution",
        body: "The team will lose the applicable Reputation Points and must continue the round with its remaining funds (after the costs of chosen actions have been deducted) and reputation.",
      },
    ],
  },
  {
    id: "vi",
    title: "Winning the Event",
    intro:
      "A team's success depends on striking the right balance between financial stability, strategic decision-making, and corporate reputation. Ultimately, the top 3 teams will be the ones demonstrating exceptional leadership by navigating unpredictable challenges, making well-informed decisions under pressure, and safeguarding the company's long-term success.",
  },
  {
    id: "vii",
    title: "General Rules",
    blocks: [
      {
        items: [
          "Teams must strictly adhere to the time limits provided.",
          "The jury's decisions regarding the success or failure of a strategy are final.",
          "The organisers reserve the right to make decisions regarding unforeseen situations or rule clarifications.",
          "The use of foul language is strictly prohibited and may be subject to disciplinary action.",
        ],
      },
    ],
  },
];

function CrisisRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "crisis" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to Crisis
        </Link>
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">Crisis</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Crisis Guide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Official Rules of Procedure (ROP). Please read the following information carefully so that you know exactly what this event requires from participants.
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
            params={{ slug: "crisis" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">Crisis Event Page</div>
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
