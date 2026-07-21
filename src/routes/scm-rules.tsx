import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/scm-rules")({
  head: () => ({
    meta: [
      { title: "SCM Rules & Procedures — VIBE" },
      { name: "description", content: "Full rules and procedures for the Supply Chain Management event at VIBE." },
      { property: "og:title", content: "SCM Rules & Procedures — VIBE" },
      { property: "og:description", content: "Full rules and procedures for Supply Chain Management." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: ScmRulesPage,
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
    title: "Executive Board & Facilitation",
    blocks: [
      {
        items: [
          "Director of Program: Aditi Karthik",
          "Director of Program: Neha Vijayakannan",
          "Director of Program: Shaarvin Nagari",
          "Asst. Director: Sparsh",
        ],
      },
      {
        body: "The Directors will strictly guide the event, ensure all rules are followed, facilitate negotiations, and utilize the whiteboard/projector to track overall game progress and key metrics.",
      },
    ],
  },
  {
    id: "ii",
    title: "Core Philosophy & Objective",
    intro:
      "This event simulates supply chain dynamics and strategic decision-making processes across a replicated real-world marketplace. By managing variables under high-pressure scenarios, participants will learn how localized changes ripple across an entire network, requiring effective planning and coordination to meet demand, optimize costs, and maintain market stability.",
  },
  {
    id: "iii",
    title: "General Rules & Regulations",
    blocks: [
      {
        items: [
          "Device Restrictions: Participants are not allowed to use devices during this event. It is strictly prohibited.",
          "Conduct: Any use of foul language is strictly prohibited and subject to immediate disciplinary action.",
        ],
      },
    ],
  },
  {
    id: "iv",
    title: "Market Roles & Core Objectives",
    intro:
      "Participants will be split into multiple designated teams randomly via a chit-draw system during the game setup, with three people each.",
    blocks: [
      {
        heading: "📦 Track A: Raw Material Suppliers",
        body: "Suppliers act at the base of the supply chain, providing the essential components or raw materials needed to manufacture goods. Their dependability, skills, and pricing models dictate the production capacities and costs of the entire market downstream.",
        items: [
          "Maintain strong, reliable business relationships with the Retail/Business sector.",
          "Secure a sufficient profit margin to sustainably run the supply enterprise.",
          "Invest in the right materials to purchase and sell to retailers/businesses.",
        ],
      },
      {
        heading: "🏪 Track B: Retail / Business",
        body: "Acting as the crucial market middlemen, these companies purchase raw materials from suppliers, convert them into finished consumer goods, and resell them to the public. They handle inventory management, pricing, promotions, and logistics.",
        items: [
          "Maintain healthy commercial relationships with both suppliers and consumers.",
          "Maximize business profitability and operational efficiency.",
        ],
      },
      {
        heading: "👤 Track C: Consumers",
        body: "Positioned at the definitive end of the supply chain, consumers represent the final users of the goods. Their fluctuating preferences, behaviors, and buying power drive the production and distribution planning of the entire market.",
        items: [
          "Acquire appropriate quality products at a price point that matches their marginal utility.",
          "Optimize purchasing satisfaction based on availability and cost.",
        ],
      },
    ],
  },
  {
    id: "v",
    title: "Game Materials & Setup",
    blocks: [
      {
        items: [
          "Tokens: Utilized to simulate liquid currency (money) and physical units of raw materials.",
          "Cards: Represent the finished market products and unpredictable macro-environmental event cards.",
          "Tracking Sheets: Provided to each team to log inventory levels, outstanding orders, and financial statements.",
          "Initial Endowment: Upon randomized team distribution, teams receive their starting assets — Suppliers receive raw materials and tokens; Businesses and Consumers receive a starting allocation of money tokens.",
          "Suppliers Set-up: Different tiers of raw materials that can be purchased (in the form of tokens) by suppliers throughout the different stages of the event from the Executive Board, with each increasing tier having higher prices.",
        ],
      },
    ],
  },
  {
    id: "vi",
    title: "The 5-Phase Event Timeline",
    intro:
      "Planning (10–15 min) → Negotiation (10–15 min) → Production & Sales (10–15 min) → Event (5 min) → Review and Analysis (5–10 min)",
    blocks: [
      {
        heading: "1. Planning Phase (5–10 minutes)",
        body: "Teams strategize internally. Suppliers set pricing, supply volumes and decide the materials they are going to purchase from the EB; Businesses plan production quotas and pricing; Consumers determine their strict buying criteria.",
      },
      {
        heading: "2. Negotiation Phase (10–15 minutes)",
        body: "Open market trading. Suppliers and Businesses negotiate raw material contracts; Businesses pitch to Consumers to secure product purchase agreements.",
      },
      {
        heading: "3. Production and Sales Phase (10–15 minutes)",
        body: "Execution phase. Businesses track the conversion of raw materials into products on inventory sheets, and transactions are physically settled using tokens.",
      },
      {
        heading: "4. Event Phase (5 minutes)",
        body: "The Executive Board draws an unpredictable market Event Card (e.g., 'Supply Chain Disruption via Natural Disaster'). Teams are forced to instantly pivot prices, manage resource scarcity, and adapt strategies.",
      },
      {
        heading: "5. Review and Analysis Phase (5–10 minutes)",
        body: "Financial reconciliation. Teams assess their inventory sheets, cash flow balances, and structural performance to analyze the macro-impact of their choices.",
      },
    ],
  },
  {
    id: "vii",
    title: "Scoring Matrix",
    intro: "Directors will award points based on the following metrics:",
    blocks: [
      {
        heading: "Suppliers",
        body: "Scored on net profit generated, delivery commitment fulfillment rate, and raw material inventory management.",
      },
      {
        heading: "Businesses",
        body: "Scored on net profit generated, gross sales volume, and finished product inventory optimization.",
      },
      {
        heading: "Consumers",
        body: "Scored on total purchasing satisfaction metrics — attaining the best balance of quality, pricing, and product availability.",
      },
    ],
  },
];

function ScmRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "supply-chain-management" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to SCM
        </Link>
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">SCM</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            VIBE 2026: Supply Chain Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Official Rules of Procedure (ROP). Please read the following information carefully so that you know exactly what this event requires from participants.
          </p>
        </div>
      </header>

      {/* Sections */}
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

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <Link
            to="/events/$slug"
            params={{ slug: "supply-chain-management" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">SCM Event Page</div>
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
