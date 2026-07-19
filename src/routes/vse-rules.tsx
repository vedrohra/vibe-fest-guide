import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/vse-rules")({
  head: () => ({
    meta: [
      { title: "VSE Rules & Procedures — VIBE" },
      { name: "description", content: "Full rules and procedures for the Vaels Stock Exchange event at VIBE." },
      { property: "og:title", content: "VSE Rules & Procedures — VIBE" },
      { property: "og:description", content: "Full rules and procedures for the Vaels Stock Exchange." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: VseRulesPage,
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
    title: "Rule of Procedure",
    intro:
      "The Vaels Stock Exchange (VSE) returns as an intensive, fast-paced live trading floor that evaluates your financial strategy and adaptability under pressure. Teams operate as asset management firms bound to a specific client persona with unique financial goals and strict risk tolerances. Every round, unexpected market events and company performance updates drop in real time, shifting asset values instantly through unexpected, correlated ripples and forcing teams to barter strategically to optimize their portfolios.",
    blocks: [
      {
        body: "Our programme is designed to host teams of two investors in each team to test their capacities to create strategies through synergy.",
      },
      {
        heading: "We provide our participants with:",
        items: [
          "A selection of listed companies open for teams to invest in and trade.",
          "A starting cash budget to build an initial portfolio.",
          "News Forecasts: Company performance updates announced at the start of each round, allowing teams to trade ahead of the shifting market.",
          "Delayed Price Updates: The actual price changes triggered by the news, calculated and revealed only after the round ends.",
          "A small notepad for chits and Authorised Cheque Slips.",
        ],
      },
      {
        body: "At VSE, all participating teams will actively trade across multiple consecutive market cycles. Whether you are a novice investor or an experienced trader, Vaels Stock Exchange offers an engaging platform to test your skills and knowledge in a competitive environment.",
      },
    ],
  },
  {
    id: "ii",
    title: "Roles & Responsibilities",
    blocks: [
      {
        heading: "(i) Role of Participants",
        items: [
          "The participants in the program assume the role of professional asset managers with distinct client mandates.",
          "Both members must analyze the news drops to decide on hedging and growth strategies.",
          "Investors are allowed to buy and sell shares of the listed companies using designated transaction rules.",
        ],
      },
    ],
  },
  {
    id: "iii",
    title: "Stock Selection",
    blocks: [
      { body: "A targeted group of competing companies across distinct sectors is provided on the main board." },
      {
        heading: "Round 1 — The Open Market",
        body: "All teams start with the exact same cash budget. A common marketplace of available stocks is displayed. Teams must decide which stocks to buy and how much of their budget to allocate. They purchase these initial shares directly from the central market to construct their starting portfolios.",
      },
      {
        heading: "Subsequent Rounds — Peer-to-Peer",
        body: "Once the open market closes, teams may only trade shares with fellow investors on the floor based on changing market conditions, news forecasts, and their specific client personas.",
      },
    ],
  },
  {
    id: "iv",
    title: "Negotiation Protocol",
    blocks: [
      {
        items: [
          "Investors are permitted to buy or sell their stocks with fellow teams of investors on the trading floor.",
          "To execute a trade, two teams must come up with deals. This involves identifying counter-parties, negotiating prices, and agreeing on transaction terms.",
          "The team initiating the deal is the First Team, while the accepting partner is the Second Team.",
          "Investor teams use the provided notepads to write Offer Chits.",
          "Offer Chits are used to communicate share price quotes, negotiate terms, and confirm deals confidentially.",
        ],
      },
      {
        heading: "Steps to negotiate",
        items: [
          "Step 1: First team issues an offer chit to another team.",
          "Step 2: Second team (if interested) responds with a confirmation chit.",
          "Step 3: Negotiation complete. Teams proceed to formalize the transaction through the Trade Protocol.",
        ],
      },
      { body: "Chits are passed between teams by the Administrative Corps to maintain organization." },
    ],
  },
  {
    id: "v",
    title: "Trade Protocol",
    blocks: [
      {
        items: [
          "Trading is conducted once the Negotiation process is completed.",
          "Once the negotiation is finalized and the selling team confirms, the buying team issues an Authorised Cheque Slip.",
          "Authorised Cheque Slips are the only permitted medium used to purchase shares from other teams.",
        ],
      },
    ],
  },
  {
    id: "vi",
    title: "Portfolio Management",
    blocks: [
      {
        items: [
          "Every team starts the event with an identical budget of liquid cash to deploy in Round 1.",
          "Once the initial stock selections are bought in Round 1, these assets form the baseline portfolio.",
          "The cash balance represents liquid capital, while the stock chits represent assets.",
          "A team's portfolio value shifts based on market updates, price calculations, and successful trades made with other teams.",
          "All portfolio balances must be recorded by the teams in the shared digital ledgers provided by the Executive Body.",
        ],
      },
    ],
  },
];

function VseRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "vaels-stock-exchange" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to VSE
        </Link>
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">VSE</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Vaels Stock Exchange
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Please read the following information carefully so that you know exactly what this event requires from participants.
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

          {/* Cheque slip illustration */}
          <article>
            <div className="flex items-baseline gap-6 mb-8 pb-4 border-b-2 border-primary">
              <span className="font-mono text-primary text-sm uppercase tracking-widest">Illustration</span>
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight">Authorised Cheque Slip</h2>
            </div>
            <div className="border-2 border-foreground/20 bg-surface p-8 md:p-10 font-mono text-sm md:text-base space-y-3">
              <div className="border-t border-dashed border-foreground/30 pt-3">FROM: [Team Name]</div>
              <div>TO: [Team Name]</div>
              <div>COMPANY NAME:</div>
              <div>QTY OF SHARES:</div>
              <div>SHARE PRICE: $</div>
              <div className="border-b border-dashed border-foreground/30 pb-3">TOTAL AMOUNT: $</div>
            </div>
            <ul className="mt-6 space-y-2 text-base md:text-lg text-muted-foreground list-disc pl-6">
              <li>Cheques are completed, signed by both parties, and submitted directly to the Admin Body for official registration.</li>
              <li>Once verified and logged, the transaction is officially recognized on the master trading ledger.</li>
            </ul>
          </article>

          {/* Scoring */}
          <article id="scoring">
            <div className="flex items-baseline gap-6 mb-8 pb-4 border-b-2 border-primary">
              <span className="font-mono text-primary text-sm uppercase tracking-widest">Scoring</span>
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight">Scoring & Judging System</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-muted-foreground">
              The absolute winner of the Vaels Stock Exchange will not be decided simply by who accumulates the largest pile of cash. Instead, a unified scoring matrix will evaluate teams across two balanced dimensions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-foreground/10 bg-surface p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">01</div>
                <h3 className="font-display text-2xl uppercase mb-3">Return Optimization</h3>
                <p className="text-base leading-relaxed">
                  Your ability to maximize the total value of your portfolio relative to your direct peers by the closing bell.
                </p>
              </div>
              <div className="border border-foreground/10 bg-surface p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">02</div>
                <h3 className="font-display text-2xl uppercase mb-3">Persona Alignment</h3>
                <p className="text-base leading-relaxed">
                  How effectively you manage, trade, and structure your assets to strictly satisfy the risk boundaries, mandate thresholds, and strategic objectives dictated by your unique client profile.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <Link
            to="/events/$slug"
            params={{ slug: "vaels-stock-exchange" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">VSE Event Page</div>
          </Link>
          <Link
            to="/"
            hash="register"
            className="group block p-10 bg-primary text-primary-foreground hover:bg-foreground transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-80">Ready?</div>
            <div className="font-display text-3xl uppercase">Register your team</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
