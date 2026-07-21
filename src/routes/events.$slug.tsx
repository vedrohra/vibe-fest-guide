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
    },
  },

  "crisis": {
    n: "02",
    name: "Crisis",
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
    contact: {
      role: "Director of Crisis",
      name: "Sahana Suryaprakash",
      phone: "9025727419",
    },
  },
  "trivia": {
    n: "03",
    name: "Trivia",
    tagline: "Team rounds of business knowledge. Pen-and-paper prelims, live finals.",
    desc: "A team-format business quiz spanning markets, brands, founders, and the moments that shaped modern commerce. Teams battle through a written prelim, and the top 6 advance to the live final.",
    format: "Teams of 3",
    duration: "45 minutes",
    venue: "Auditorium",
    rules: [
      "Only 1 team will be permitted per school.",
      "Each team must consist of 3 members.",
      "Teams answer questions in rounds.",
      "A preliminary pen and paper round will be conducted, and the top 6 teams will move to the finals.",
    ],
    contact: {
      role: "Director of Trivia",
      name: "Thrivid Narain",
      phone: "9380562232",
    },
  },
  "shark-tank": {
    n: "04",
    name: "Innovator's Hive",
    tagline: "Shark-Tank style. Pitch the product, defend the business.",
    desc: "A platform for student entrepreneurs to pitch innovative product ideas to a panel of judges. Introduce the company, present the product, and defend the business model against tough questions.",
    format: "Teams of 2\u20135",
    duration: "7 min intro + 2 min pitch + 3 min Q&A",
    venue: "Main Hall",
    rules: [
      "A maximum of 1 team will be permitted per school.",
      "Each team must consist of 2\u20135 members.",
      "Teams get 2 minutes to pitch their products, 7 minutes to introduce the company and an additional 3 minutes to answer the judges' questions.",
    ],
    content: [
      "Follow a regular Shark-Tank introduction; clearly state the problem; present your idea as the solution.",
      "Explain how you plan to make profits and sustain the business.",
      "Provide target market, competition, financials, and funding requirements.",
    ],
    judging: [
      "Ideas must be unique, innovative, and understandable; visual aids should be professional and easy to understand.",
      "A clear problem must be addressed and the solution must be practical and realistic.",
      "Target market identified with analysis of potential competitors.",
      "Realistic execution plan with the resources required to bring it to market.",
    ],
    contact: {
      role: "Director of Innovator's Hive",
      name: "Ayush Mishra",
      phone: "7358249609",
    },
  },
  "product-development": {
    n: "05",
    name: "Product Development",
    tagline: "Imagine it. Design it. Develop it.",
    desc: "Teams will be provided with a product by the judges and tasked with improving it through creativity, innovation, and problem-solving. During the event, judges will introduce obstacles requiring teams to adapt their approach and develop effective solutions in real time.",
    format: "Teams of 3",
    duration: "45 min design + 10 min research",
    venue: "Studio",
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
    },
  },
  "supply-chain-management": {
    n: "06",
    name: "Supply Chain Management",
    tagline: "Design, optimise, and manage the flow from source to delivery.",
    desc: "Teams take on the role of supply chain managers for a business. They must design a sourcing and distribution network, respond to disruptions, balance cost against speed, and present a resilient supply chain strategy.",
    format: "Teams of 3\u20134",
    duration: "60 minutes",
    venue: "Boardroom B",
    rules: [
      "Teams receive a business scenario with supplier, factory, and market data.",
      "Design a supply chain network that meets demand at the lowest total cost.",
      "Live disruption cards will force teams to adapt their plan during the round.",
      "Final strategy is judged on cost, resilience, and presentation clarity.",
    ],
    contact: {
      role: "Director of Supply Chain Management",
      name: "Aditi Kartik",
      phone: "6380487841",
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
        <a href="https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
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
            {slug === "vaels-stock-exchange" && (
              <Link
                to="/vse-rules"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
              >
                For full information about the event — click here →
              </Link>
            )}
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
                  <ol className="space-y-px bg-foreground/10 border border-foreground/10">
                    {group.items.map((r, i) => (
                      <li key={i} className="bg-background p-6 flex gap-6">
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

