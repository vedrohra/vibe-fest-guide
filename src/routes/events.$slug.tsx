import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { RegisterButton } from "@/components/RegisterButton";


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
    name: "VAELS STOCK EXCHANGE\u00a0\n\n",
    tagline: "A real-world-style trading floor. Strategy, instinct, adaptability.",
    desc: "The Vaels Stock Exchange is an intensive, live trading floor that evaluates your financial strategy and adaptability under pressure. Teams operate as asset management firms bound to a specific client persona with unique financial goals and strict risk tolerances. Market events drop in real time, shifting asset values instantly through unexpected, correlated ripples, and forcing teams to barter strategically via physical chits to optimize their positions.",
    format: "Teams of 2",
    duration: "90 minutes",
    venue: "Physics Lab",
    rules: [
      "The Starting Line: Every team receives a unique client persona and an identical, diversified starter pack of stock chits and seed capital.",
      "Live News Drops: Market events drop in real time at the start of every round, altering asset values and shifting the board instantly.",
      "Peer-to-Peer Trading: All transactions must be negotiated and executed directly between teams on the floor using physical chits.",
      "The Paper Trail: Every executed trade chit must be clearly marked with the correct corresponding transaction codes.",
    ],
    judging: [
      "The absolute winner of the Vaels Stock Exchange is not decided simply by who accumulates the most cash. Instead, a unified scoring matrix evaluates teams across two balanced dimensions: Return Optimization and Persona Alignment.",
      "You will be graded on your ability to maximize the value of your portfolio relative to your direct peers, while strictly operating within the risk boundaries and strategic objectives dictated by your client's profile at the closing bell.",
    ],
    info: [
      "Each team must consist of 2 members.",
      "Company performance updates are announced at the start of each round, allowing teams to trade ahead of the shifting market. The actual price changes triggered by the news are calculated and revealed only after the round ends.",
    ],
    contact: {
      role: "Director of VSE",
      name: "Ved Rohra",
      phone: "9345990041",
      email: "vse.vibe26@vaelsinternationalschool.com",
    },
  },

  "crisis": {
    n: "02",
    name: "Crisis",
    tagline: "Sharp decision-making and quick adaptability under pressure.",
    desc: "Your team takes over a business facing an unexpected crisis. You will diagnose the situation, weigh the trade-offs, and present a recovery plan that tests sharp decision-making and adaptability when everything is on the line.",
    format: "Teams of 3",
    duration: "60 minutes prep + 5 minute pitch",
    venue: "Multi Purpose Hall",
    rules: [
      "Teams of 3 act as the Board of Directors of an assigned fictional company; only one designated speaker presents the final response.",
      "Every team starts with an equal amount of company funds and reputation points, which rise or fall with performance.",
      "Each crisis round gives teams 10–15 minutes to respond to the crisis shown on screen.",
      "Internet access is permitted for research, but all work must be original and completed without the aid of AI tools.",
      "Time limits are strict, the jury's decisions are final, and foul language is subject to disciplinary action.",
    ],
    info: [
      "Companies are assigned arbitrarily and revealed before the event, each with its own values, culture, competitors, allies and current affairs.",
      "Strategic actions carry a financial cost expressed as a percentage of the team's current funds; reasonable actions beyond the listed options are free.",
      "Reputation Points represent public trust and move up or down based on the effectiveness and execution of your decisions.",
      "After the presentation, a jury of 4–5 questions the team on its decisions, use of funds, impact and risks.",
    ],
    judging: [
      "Successful execution earns the applicable Reputation Point reward plus a jury bonus on remaining funds.",
      "Unsuccessful execution costs Reputation Points, and the team continues with whatever funds remain after action costs.",
      "The top 3 teams are those that best balance financial stability, strategic decision-making and corporate reputation under pressure.",
    ],

    contact: {
      role: "Director of Crisis",
      name: "Sahana Suryaprakash",
      phone: "9025727419",
      email: "crisis.vibe26@vaelsinternationalschool.com",
    },
  },
  "trivia": {
    n: "03",
    name: "Trivia",
    tagline: "Team rounds of business knowledge. Pen-and-paper prelims, live finals.",
    desc: "A team-format business quiz spanning markets, brands, founders, and the moments that shaped modern commerce. Teams battle through a written prelim, and the top 6 advance to the live final.",
    format: "Teams of 2",
    duration: "45 minutes",
    venue: "Room No. 65 (Second Floor)",
    rules: [
      "No discussion with other teams is allowed at any point during the rounds.",
    ],
    content: [
      "Round 1 — The Logo Rush: brand recognition across Easy, Medium and Hard sub-rounds.",
      "Round 2 — Guess Who?: progressive clues revealing a company, founder or economist.",
      "Round 3 — Business Vault: a jeopardy-style board across Marketing, HR, Strategy and Finance, with point values chosen by a dart throw.",
      "Round 4 — Business Blitz: 30 seconds of rapid-fire questions per team; questions may be passed.",
    ],
    judging: [
      "Logo Rush: 10 points per correct answer in every sub-round.",
      "Guess Who?: 25 / 15 / 10 / 5 points depending on how many clues were needed.",
      "Business Vault: 25, 50, 100 or 150 point tiers, with negative marking equal to the value of the question.",
      "Business Blitz: 25 points per correct answer, no negative marking for wrong answers, but passing carries a penalty.",
    ],

    contact: {
      role: "Director of Trivia",
      name: "Thrivid Narain",
      phone: "9380562232",
      email: "trivia.vibe26@vaelsinternationalschool.com",
    },
  },
  "shark-tank": {
    n: "04",
    name: "Innovator's Hive",
    tagline: "Three rounds. Pitch, survive the crisis, then merge.",
    desc: "A flagship business event that challenges teams with real-world entrepreneurial scenarios across three dynamic rounds — Pitch Perfect, Crisis and Mergers. Each stage pushes teams to think critically, act strategically and thrive under pressure.",
    format: "Teams of 3",
    duration: "7 min intro + 2 min pitch + 3 min Q&A",
    venue: "Main Hall",
    rules: [
      "The event runs over 3 rounds: Pitch Perfect, Crisis and Mergers.",
      "Each team must consist of 3 members.",
      "Teams may bring one or more devices, and the internet may be used for research.",
      "The use of AI is strictly prohibited — a first offence earns a warning, repeat offences mean heavy point deductions or disqualification.",
    ],
    info: [
      "Round 1 — Pitch Perfect: teams build a unique product from a random category given by the Sharks. 25 min prep, ~5 min pitch, 2–5 min Q&A with offers that teams may negotiate or decline (with justification).",
      "Round 2 — Crisis: each team receives a physical financial dossier and faces political, economic, social and environmental disruptions. 25 min prep, 4 min presentation, plus judge follow-ups (50 min–1 hour total).",
      "Round 3 — Mergers: two teams merge into one group of six (6 teams become 3). 30 min prep, 10 min presentation, 5–7 min Q&A, using the additional financial information provided.",
    ],
    content: [
      "Pitch Perfect: state the problem, present the product as the solution, and show clear methods to advertise, scale and build the business from idea to reality.",
      "Crisis: make swift, strategic decisions and reference the context of the financial statements provided while presenting.",
      "Mergers: prove that unity brings efficiency, innovation and greater profitability, referring to the merged company's financials.",
    ],
    judging: [
      "Originality and market potential of the product, with a clear problem and practical solution.",
      "Persuasiveness and clarity of the pitch — length does not earn points, substance does.",
      "Critical thinking, adaptability and risk management when crises unfold.",
      "Use of the financial information provided, and quality of responses to judges' questions.",
      "Teamwork and integration during the merger round, plus adherence to the code of conduct.",
    ],

    contact: {
      role: "Director of Innovator's Hive",
      name: "Taher Mohamed",
      phone: "9043603343",
      email: "Innovatorshive.vibe26@vaelsinternationalschool.com",
    },
  },
  "product-development": {
    n: "05",
    name: "Product Development",
    tagline: "Imagine it. Design it. Develop it.",
    desc: "Teams will be provided with a product by the judges and tasked with improving it through creativity, innovation, and problem-solving. During the event, judges will introduce obstacles requiring teams to adapt their approach and develop effective solutions in real time.",
    format: "Teams of 3",
    duration: "45 min design + 10 min research",
    venue: "Fashion Designing Room (Second Floor)",
    rules: [
      "Maximum 1–2 teams per school.",
      "AI is forbidden throughout the event.",
      "Teams must bring their own supplies (sketchbook, pencils, etc).",
    ],
    content: [
      "Analyze the specified criteria and develop a design that aligns with the provided content.",
      "Research the topic thoroughly, gathering all relevant information related to the product to be created.",
      "Present the final product, ensuring it includes all necessary information, such as the materials used and the reasoning behind the product.",
    ],
    judging: [
      "Overall presentation quality should be high — visually appealing and containing adequate information about the product.",
      "Demonstrate a solid understanding of business concepts through analysis and the use of key terms.",
      "Deliver the presentation clearly, confidently, and engagingly, utilizing effective body language and speech.",
      "Presenters must answer challenging questions calmly and professionally. Teams should cooperate well, adhere to the time limit, and be able to adapt to any obstacles that arise.",
    ],
    contact: {
      role: "Director of Product Development",
      name: "Zoya Hassan",
      phone: "7200074702",
      email: "ProductDevelopment.vibe26@vaelsinternationalschool.com",
    },
  },
  "supply-chain-management": {
    n: "06",
    name: "Supply Chain Management",
    tagline: "Design, optimise, and manage the flow from source to delivery.",
    desc: "A live supply-chain simulation where teams operate as Suppliers or Businesses inside a market controlled by the Executive Board. Manage procurement, pricing, production, and sales while reacting to sudden demand spikes during Panic Rush Hour and unpredictable Market Event cards.",
    format: "Teams of 3",
    duration: "60 minutes",
    venue: "LIBRARY\u00a0",
    rules: [
      "No electronic devices are permitted during the event.",
      "Foul language, abusive behavior, or misconduct is prohibited.",
      "All transactions must be recorded on tracking sheets.",
      "All money and resource movements must use tokens authorized by the EB.",
      "Teams may not create, destroy, or secretly transfer tokens.",
      "EB decisions regarding disputes and gameplay are final.",
    ],
    info: [
      "Teams of 3 are randomly assigned one of two market roles: Raw Material Suppliers or Retail/Businesses.",
      "Suppliers purchase tiered raw materials from the EB and sell them to Businesses at profitable prices.",
      "Businesses convert raw materials into finished products and sell them to Consumer Agents during the simulation.",
      "The event runs through five phases: Planning → Negotiation → Production & Sales → Panic Rush Hour / Market Event → Review & Analysis.",
      "During Panic Rush Hour, EB Associates enter the market as Consumer Agents and create a sudden demand spike, forcing Businesses and Suppliers to react instantly.",
      "The EB draws an unpredictable Market Event Card (natural disaster, demand explosion, raw material shortage, etc.) that teams must adapt to immediately.",
      "Tokens represent money and raw materials; tracking sheets are used to log every transaction and inventory movement.",
    ],
    judging: [
      "Suppliers are scored on net profit, delivery fulfillment rate, raw-material inventory management, contract performance, and response to market disruptions.",
      "Businesses are scored on net profit, gross sales volume, finished-product inventory optimization, Consumer-Agent sales performance, Panic Rush Hour performance, and adaptability to market events.",
      "Awards: Market Leader (1st), Operations Pinnacle (2nd), and Elite Analysts (3rd).",
    ],

    contact: {
      role: "Director of Supply Chain Management",
      name: "Aditi Kartik",
      phone: "6380487841",
      email: "scm.vibe26@vaelsinternationalschool.com",
    },
  },

} as const;


function EventPage() {
  const { slug } = Route.useParams();
  const event = events[slug as keyof typeof events];
  if (!event) return null;

  const slugs = Object.keys(events) as (keyof typeof events)[];
  const idx = slugs.indexOf(slug as keyof typeof events);
  const nextSlug = slugs[(idx + 1) % slugs.length];
  const prevSlug = slugs[(idx - 1 + slugs.length) % slugs.length];
  const nextEvent = events[nextSlug];
  const prevEvent = events[prevSlug];






  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link to="/" className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
          ← All Events
        </Link>
        <RegisterButton className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </RegisterButton>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[40vw] leading-none uppercase tracking-tighter select-none">{event.n}</div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="animate-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Event {event.n} / 06
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {[
            { label: "Format", value: event.format },
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
            {(() => {
              const guideMap: Record<string, string> = {
                "vaels-stock-exchange": "/vse-rules",
                "supply-chain-management": "/scm-rules",
                "product-development": "/pd-rules",
                "crisis": "/crisis-rules",
                "trivia": "/trivia-rules",
                "shark-tank": "/ih-rules",
              };
              const to = guideMap[slug as string];
              if (!to) return null;
              return (
                <Link
                  to={to}
                  className="group mt-10 inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground transition-all duration-300 shadow-[0_0_0_0_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_0_hsl(var(--primary)/0.5)]"
                >
                  <span className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary group-hover:text-primary-foreground/80">
                      Rules of Procedure
                    </span>
                    <span className="font-display text-sm uppercase tracking-wider">
                      Read the full guide
                    </span>
                  </span>
                  <span className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
                    →
                  </span>
                </Link>
              );
            })()}

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
          <div className="md:col-span-8 space-y-12">
            {([
              { label: "Rules", items: event.rules },
              { label: "Information", items: (event as any).info as readonly string[] | undefined },
              { label: "Content Requirements", items: (event as any).content as readonly string[] | undefined },
              { label: "Judging Criteria", items: (event as any).judging as readonly string[] | undefined },
            ] as const).map((group) =>
              group.items && group.items.length ? (
                <div key={group.label}>
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b-2 border-primary">
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight">{group.label}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {String(group.items.length).padStart(2, "0")} items
                    </span>
                  </div>
                  <ol className="bg-background border border-foreground/10">
                    {group.items.map((r, i) => (
                      <li key={i} className="bg-background p-6 flex gap-6 border-t border-foreground/10 first:border-t-0">

                        <span className="font-mono text-xs text-primary shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-base md:text-lg">{r}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase text-primary tracking-widest mb-4 block">Get in touch</span>
            <h2 className="font-display text-5xl uppercase leading-none">Contact</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Questions about this event? Reach out to the event director directly.</p>
          </div>
          <div className="md:col-span-8">
            {(event as any).contact ? (
              <div className="relative border border-foreground/10 bg-surface p-10 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-24 bg-primary" />
                <div className="absolute -top-8 -right-6 font-display text-[10rem] leading-none uppercase text-foreground/5 select-none pointer-events-none">
                  {event.n}
                </div>
                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                    {(event as any).contact.role}
                  </div>
                  <div className="font-display text-5xl md:text-6xl uppercase leading-none tracking-tight mb-8">
                    {(event as any).contact.name}
                  </div>
                  <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
                      <a
                        href={`tel:${(event as any).contact.phone}`}
                        className="font-mono text-2xl md:text-3xl text-foreground hover:text-primary transition-colors tracking-wider"
                      >
                        {(event as any).contact.phone}
                      </a>
                      {(event as any).contact.email ? (
                        <div className="mt-5">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Email</div>
                          <a
                            href={`mailto:${(event as any).contact.email}`}
                            className="font-mono text-sm md:text-base text-foreground hover:text-primary transition-colors break-all"
                          >
                            {(event as any).contact.email}
                          </a>
                        </div>
                      ) : null}
                    </div>
                    <a
                      href={`tel:${(event as any).contact.phone}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground transition-colors self-start sm:self-auto"
                    >
                      Call now →
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border border-dashed border-foreground/15 p-10 text-center">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Contact</div>
                <p className="font-display text-2xl uppercase">Details coming soon</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-24 px-6 border-t border-foreground/10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          <div className="grid grid-cols-2 bg-background">
            <Link
              to="/events/$slug"
              params={{ slug: prevSlug as string }}
              className="group block px-6 py-5 border-r border-foreground/10 hover:bg-surface transition-colors"
            >
              <div className="font-mono text-[9px] uppercase text-muted-foreground tracking-widest mb-1.5">← Prev {prevEvent.n}</div>
              <div className="font-display text-sm md:text-base uppercase truncate group-hover:text-primary transition-colors">{prevEvent.name}</div>
            </Link>
            <Link
              to="/events/$slug"
              params={{ slug: nextSlug as string }}
              className="group block px-6 py-5 hover:bg-surface transition-colors text-right"
            >
              <div className="font-mono text-[9px] uppercase text-muted-foreground tracking-widest mb-1.5">Next {nextEvent.n} →</div>
              <div className="font-display text-sm md:text-base uppercase truncate group-hover:text-primary transition-colors">{nextEvent.name}</div>
            </Link>
          </div>
          <Link
            to="/about"
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">Learn more →</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">About VIBE</div>
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

