import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/trivia-rules")({
  head: () => ({
    meta: [
      { title: "Trivia Rules & Procedures — VIBE" },
      { name: "description", content: "Full rules and procedures for the Trivia event at VIBE." },
      { property: "og:title", content: "Trivia Rules & Procedures — VIBE" },
      { property: "og:description", content: "Official Rules of Procedure for Trivia." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: TriviaRulesPage,
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
    title: "Round 1: The Logo Rush",
    intro:
      "Logo Rush is an intellectually stimulating visual recognition challenge designed to assess participants' proficiency in brand identification, business acumen and perpetual accuracy under time-sensitive conditions.",
    blocks: [
      {
        heading: "Structure",
        items: [
          "This round will include three sub-rounds with increasing difficulty: Easy, Medium and Hard.",
          "Each correct answer will earn points for the team.",
        ],
      },
      {
        heading: "Scoring",
        items: ["All three sub-rounds award the same 10 points for each correct answer."],
      },
    ],
  },
  {
    id: "ii",
    title: "Round 2: Guess Who?",
    intro:
      "Guess Who is an intellectually engaging round that evaluates participants' knowledge of influential personalities and companies who have shaped the global business landscape. Contestants are presented with a series of carefully curated clues that progressively reveal the identity of renowned entrepreneurs, corporate leaders, economists and industry pioneers.",
    blocks: [
      {
        heading: "Structure",
        items: [
          "This round gives progressive clues about a company or personality. Example — Clue 1: I started as an online bookstore. Clue 2: I was founded on July 5, 1994. Clue 3: Today I sell almost everything online. Answer: Amazon.",
          "Each correct answer is awarded points based on how few clues were needed.",
          "This round includes three sub-rounds: Easy, Medium and Hard.",
        ],
      },
      {
        heading: "Scoring",
        items: [
          "Points awarded based on the number of clues used by each team.",
          "Clue 1 — 25 points",
          "Clue 2 — 15 points",
          "Clue 3 — 10 points",
          "Clue 4 — 5 points",
        ],
      },
    ],
  },
  {
    id: "iii",
    title: "Round 3: Business Vault",
    intro:
      "Business Vault is a strategic jeopardy-inspired round that combines comprehensive business knowledge with tactical decision-making. Participants navigate a structured board with multiple business-related questions of varying complexity. The point value of each question is chosen by the participants through a dart game, where the dartboard represents point levels.",
    blocks: [
      {
        heading: "Categories",
        items: [
          "Marketing",
          "Human Resource Management",
          "Strategy",
          "Finance",
        ],
      },
      {
        heading: "Point Tiers per Category",
        items: ["25 points", "50 points", "100 points", "150 points"],
      },
      {
        heading: "Examples",
        items: [
          "Marketing (25 points) — What are the 4 Ps of marketing? Answer: Product, Price, Place and Promotion.",
          "Finance (150 points) — Which pricing strategy involves introducing a product at a high price before gradually reducing it? Answer: Price Skimming.",
        ],
      },
      {
        heading: "Scoring",
        items: ["Incorrect answers receive negative marks equal to the value of the question."],
      },
    ],
  },
  {
    id: "iv",
    title: "Round 4: Business Blitz",
    intro:
      "Business Blitz is the final and fastest-paced round of Trivia. It is a dynamic, knowledge-intensive round designed to assess participants' comprehensive understanding of the business world — covering business history, strategy, marketing, finance, entrepreneurship and global corporations.",
    blocks: [
      {
        heading: "Structure",
        items: [
          "Each team gets 30 seconds.",
          "A series of rapid-fire business questions will be asked one after another.",
          "Questions may cover finance, marketing, business history and entrepreneurship.",
          "Teams may pass a question if unsure, but passing carries negative marking.",
          "No discussion is allowed with other teams.",
        ],
      },
      {
        heading: "Scoring",
        items: [
          "Each correct answer — 25 points.",
          "Incorrect answers — 0 points (no negative marking).",
        ],
      },
      {
        heading: "Sample Questions",
        items: [
          "What is the full form of GDP? — Gross Domestic Product.",
          "Which company owns Instagram? — Meta.",
          "Which country's currency is the Yen? — Japan.",
          "Who founded Flipkart? — Sachin Bansal and Binny Bansal.",
          "Which company was originally called 'BackRub'? — Google.",
          "Which company acquired LinkedIn in 2016? — Microsoft.",
        ],
      },
    ],
  },
];

function TriviaRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "trivia" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to Trivia
        </Link>
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">Trivia</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Trivia Guide
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
            params={{ slug: "trivia" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">Trivia Event Page</div>
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
