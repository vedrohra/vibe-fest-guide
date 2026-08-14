import { createFileRoute, Link } from "@tanstack/react-router";
import { RegisterButton } from "@/components/RegisterButton";

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
    intro:
      "The Executive Board (EB) is the main authority, central bank, and game facilitator. The EB controls the circulation of money and raw materials, provides resources to teams, conducts market events, tracks performance, and resolves disputes.",
    blocks: [
      {
        heading: "Associates / Consumer Agents",
        items: ["Sparsh", "Jivitesh", "Yaswanth"],
      },
      {
        body: "The Associates act as Consumer Agents and participate primarily during the Panic Rush Hour. They are not competing teams.",
      },
    ],
  },
  {
    id: "ii",
    title: "Core Objective",
    intro:
      "The event simulates a real-world supply chain where decisions made by Suppliers and Businesses affect the entire market. Teams must manage procurement and supply, production and inventory, pricing and negotiation, cash flow and profitability, sudden changes in market demand, and unexpected supply-chain disruptions.",
  },
  {
    id: "iii",
    title: "General Rules",
    blocks: [
      {
        items: [
          "No electronic devices are permitted during the event.",
          "Foul language, abusive behavior, or misconduct is prohibited.",
          "All transactions must be recorded on tracking sheets.",
          "All money and resource movements must use tokens authorized by the EB.",
          "Teams may not create, destroy, or secretly transfer tokens.",
          "EB decisions regarding disputes and gameplay are final.",
        ],
      },
    ],
  },
  {
    id: "iv",
    title: "Market Roles",
    intro: "Participants are split into competing teams and assigned one of two market roles.",
    blocks: [
      {
        heading: "📦 Track A: Raw Material Suppliers",
        body: "Suppliers operate at the beginning of the supply chain. They purchase raw materials from the EB and sell them to Businesses at profitable prices.",
        items: [
          "Purchase raw materials from the EB.",
          "Sell raw materials to Businesses at profitable prices.",
          "Maintain reliable delivery commitments.",
          "Manage inventory efficiently.",
          "Maximize net profit.",
          "Build strong Business relationships.",
        ],
      },
      {
        heading: "🏪 Track B: Retail / Business",
        body: "Businesses purchase raw materials from Suppliers, convert them into finished products, and sell them in the market.",
        items: [
          "Secure raw materials at competitive prices.",
          "Manage production and inventory.",
          "Set profitable prices.",
          "Maximize sales and net profit.",
          "Maintain Supplier relationships.",
          "Respond quickly to demand changes and market events.",
        ],
      },
      {
        heading: "👤 Consumer Agents — EB Associates",
        body: "The Associates are not competing teams. Sparsh, Jivitesh, and Yaswanth act as Consumer Agents controlled by the EB.",
        items: [
          "Purchase finished products from Businesses.",
          "Compare prices, quality, and availability.",
          "Create sudden demand.",
          "Participate in the Panic Rush Hour.",
          "Make purchasing decisions without revealing their complete strategy beforehand.",
        ],
      },
    ],
  },
  {
    id: "v",
    title: "Executive Board as the Central Bank",
    intro: "The EB is the main bank of the entire simulation.",
    blocks: [
      {
        heading: "EB Controls",
        items: ["Money tokens.", "Raw-material tokens/cards.", "Event cards.", "Emergency resources."],
      },
      {
        heading: "Money & Resource Flow",
        body: "The EB provides the initial money allocation to teams and supplies Suppliers with raw materials. Flow: EB → Suppliers → Businesses → Consumer Agents. The EB may also inject additional money into teams through starting allocations, bonuses, subsidies, emergency funding, and special market events. No team may independently generate money.",
      },
      {
        heading: "Supplier Purchasing",
        body: "Suppliers purchase different tiers of raw materials directly from the EB. Higher tiers may cost more but provide greater production or product-value advantages. The EB determines the prices and characteristics of each tier.",
      },
      {
        heading: "EB Record Keeping",
        items: [
          "Money issued and collected.",
          "Raw materials issued.",
          "Major transactions.",
          "Bonuses and penalties.",
          "Event-based payments.",
          "Final balances.",
        ],
      },
    ],
  },
  {
    id: "vi",
    title: "Game Materials",
    intro: "The EB provides the following materials for the simulation:",
    blocks: [
      {
        items: ["Money tokens.", "Raw-material tokens/cards.", "Finished-product cards.", "Market-event cards.", "Tracking sheets."],
      },
      {
        heading: "Initial Endowment",
        items: [
          "Suppliers: Starting money + raw materials.",
          "Businesses: Starting money + any initial inventory specified by the EB.",
        ],
      },
    ],
  },
  {
    id: "vii",
    title: "Five-Phase Event Timeline",
    blocks: [
      {
        heading: "Phase 1 — Planning | 5–10 minutes",
        body: "Suppliers decide pricing, quantities, material purchases, and target Businesses. Businesses decide production, pricing, procurement requirements, and inventory strategy.",
      },
      {
        heading: "Phase 2 — Negotiation | 10–15 minutes",
        body: "Open-market trading begins. Suppliers negotiate raw-material prices, quantities, and delivery commitments with Businesses. Businesses negotiate product prices, quality, availability, and potential purchases with Consumer Agents.",
      },
      {
        heading: "Phase 3 — Production & Sales | 10–15 minutes",
        body: "Businesses convert raw materials into finished products and conduct sales. All transactions must be physically settled using tokens and recorded on tracking sheets. Suppliers track materials sold, revenue, remaining inventory, and outstanding commitments. Businesses track materials purchased, production, sales, revenue, and remaining inventory.",
      },
    ],
  },
  {
    id: "viii",
    title: "Panic Rush Hour",
    intro:
      'The EB announces: "PANIC RUSH HOUR — CONSUMER DEMAND SPIKE!" The Associates immediately enter the market as Consumer Agents and begin purchasing finished products.',
    blocks: [
      {
        heading: "Consumer Agent Actions",
        items: [
          "Buy large quantities.",
          "Compare Business prices.",
          "Move between Businesses.",
          "Prefer available or higher-quality products.",
          "Reject overpriced products.",
          "Create intense competition for limited inventory.",
        ],
      },
      {
        heading: "Business Reactions",
        items: [
          "Adjust prices.",
          "Adapt sales strategy.",
          "Reallocate inventory.",
          "Shift production priorities.",
          "Reopen Supplier negotiations.",
        ],
      },
      {
        body: "If Businesses run short of raw materials, Suppliers may conduct emergency sales at their discretion. The supply-chain effect cascades: Consumer Panic → Demand Spike → Business Inventory Shortage → Emergency Supplier Demand → Price Changes → Market Instability. The EB may introduce additional money, resources, or restrictions during Panic Rush Hour if specified by the event.",
      },
    ],
  },
  {
    id: "ix",
    title: "Market Event Phase | ~5 minutes",
    intro: "The EB draws an unpredictable Market Event Card. Teams must immediately adapt.",
    blocks: [
      {
        items: [
          "Natural Disaster — supply disruption.",
          "Transportation Breakdown — delivery delays.",
          "Demand Explosion — increased demand for a product.",
          "Market Crash — reduced purchasing power.",
          "Production Failure — reduced Business production.",
          "Raw Material Shortage — increased material costs.",
          "Quality Boom — increased preference for premium products.",
        ],
      },
    ],
  },
  {
    id: "x",
    title: "Review & Analysis | 5–10 minutes",
    intro: "Teams reconcile their accounts. The EB verifies the final accounts and calculates rankings.",
    blocks: [
      {
        items: [
          "Final cash balance.",
          "Inventory.",
          "Purchases.",
          "Sales.",
          "Net profit.",
          "Unfulfilled commitments.",
          "Market-event performance.",
          "Panic Rush Hour performance.",
        ],
      },
    ],
  },
  {
    id: "xi",
    title: "Scoring Matrix",
    intro: "Directors will award points based on the following metrics:",
    blocks: [
      {
        heading: "📦 Suppliers",
        items: [
          "Net profit.",
          "Delivery fulfillment rate.",
          "Raw-material inventory management.",
          "Contract performance.",
          "Response to market disruptions.",
        ],
      },
      {
        heading: "🏪 Businesses",
        items: [
          "Net profit.",
          "Gross sales volume.",
          "Finished-product inventory optimization.",
          "Consumer-Agent sales performance.",
          "Panic Rush Hour performance.",
          "Adaptability to market events.",
        ],
      },
    ],
  },
  {
    id: "xii",
    title: "Awards",
    blocks: [
      {
        heading: "🥇 Market Leader — First Place",
        body: "Best overall profitability, strategic decision-making, and ability to survive market disruptions.",
      },
      {
        heading: "🥈 Operations Pinnacle — Second Place",
        body: "Strong profitability, negotiation, inventory management, and operational efficiency.",
      },
      {
        heading: "🥉 Elite Analysts — Third Place",
        body: "Consistent performance, analytical decision-making, and efficient resource utilization.",
      },
    ],
  },
  {
    id: "xiii",
    title: "Final Market Structure",
    intro:
      "Throughout the game, the EB controls the money supply, resource availability, market events, Consumer Agents, and overall game balance. The winning strategy is not simply to make the most money — it is to anticipate the market, manage risk, negotiate intelligently, and adapt faster than everyone else.",
    blocks: [
      {
        body: "🏦 Executive Board — Central Bank & Market Authority → provides money & raw materials → Suppliers → sell raw materials → Businesses → produce & sell finished products → Consumer Agents — Associates → create demand, especially during Panic Rush Hour.",
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
        <RegisterButton className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </RegisterButton>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">SCM</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Supply Chain Management Guide
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
          <RegisterButton className="group block p-10 bg-primary text-primary-foreground hover:bg-foreground transition-colors">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-80">Ready?</div>
            <div className="font-display text-3xl uppercase">Register your team</div>
          </RegisterButton>
        </div>
      </section>
    </main>
  );
}
