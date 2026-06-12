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
  },
  "product-development": {
    n: "05",
    name: "Product Development",
    tagline: "Pick a topic. Analyse it. Present it. Defend it.",
    desc: "Teams choose a business or economics topic and deliver a structured presentation \u2014 introduction, analysis with data and real-world examples, and practical conclusions. Be ready to defend your thinking under judges' questions.",
    format: "Teams of 2\u20135",
    duration: "10 min presentation + 5 min Q&A",
    venue: "Studio",
    rules: [
      "Maximum of 1 team only per school.",
      "All teams must consist of 2\u20135 members.",
      "Each team is given 10 minutes to present their chosen topic and an additional 5 minutes to answer the judges' questions.",
    ],
    content: [
      "Introduce the topic and the objectives of the presentation.",
      "Provide analysis with relevant data, case studies, or real-world examples.",
      "Offer practical solutions and a clear conclusion; keep it well organised and easy to follow.",
    ],
    judging: [
      "High overall presentation quality \u2014 visually appealing with adequate content; charts, models, and graphs appreciated.",
      "Solid economic/business understanding through analysis and use of key terms.",
      "Delivery, body language, and speech must be clear, confident, and engaging.",
      "Presenters answer challenging questions calmly and professionally; team cooperates well and adheres to the time limit.",
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
        <Link to="/" className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
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
          <div className="md:col-span-8 space-y-12">
            {([
              { label: "Rules", items: event.rules },
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


      {/* About VIBE */}
      <section className="py-24 px-6 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase text-primary tracking-widest mb-4 block">About</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none">About<br/>VIBE</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {/* Paragraph about how VIBE started will go here. */}
              A short history of VIBE is coming soon.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10 pb-3 border-b-2 border-primary">
            <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight">What people say</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Testimonials</span>
          </div>

          {/* VIBE 2024 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Edition</span>
              <span className="font-display text-2xl uppercase">VIBE 2024</span>
              <span className="flex-1 h-px bg-foreground/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  I was invited to be part of the VIBE Virtual Stock Exchange as a Judge/Observer and was amazed by the concept. The Vaels International School students have put together an excellent set of conditions to simulate a real-life stock exchange feeling for the participants. There were participants from more than 10 schools who enthusiastically worked on various conditions provided to them and bid/sold the stocks. The team led by John and ably supported by Sujith, Aditya Giri, Arman and other volunteers tirelessly worked during the whole 5 hours when the virtual stock exchange was open to make it a success. I would like to congratulate the students of Vaels International School for coming up with this concept and executing it with perfection under the guidance of their able teachers. Personally, it was very satisfying to see the younger generation excelling in this. Kudos to one and all connected with VIBE 2024!
                </p>
                <div className="mt-auto pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Judge / Observer</div>
                  <div className="font-display text-lg uppercase">Stock Exchange Simulation</div>
                </div>
              </blockquote>

              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  Judging the Product Development event at VIBE 2024 was a wonderful experience. It was great to observe the way faculty coordinators facilitated student coordinators to conduct the event in a meticulous manner — an exemplification of learning management by doing. The hospitality of the Vaels team and how inclusive and accommodating they were with participants from other schools showed the true spirit of healthy competition. The selection of topics — Stock Exchange, Supply Chain Management, Shark Tank, Product Development — was very relevant, not just for inter-school competition but as a key milestone in developing Young Entrepreneurs. Bringing in industry experts to judge the innovation and creativity of students was an apt honour for the topics. The commitment of the VIBE team, from Dr. Arthi madam to Dr. Sujatha madam and a fantastic coordination through the day, has given pleasant memories.
                </p>
                <div className="mt-auto pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Judge</div>
                  <div className="font-display text-lg uppercase">Product Development</div>
                </div>
              </blockquote>

              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  Thank you ma'am, for hosting us. It was a very good experience for our Grade IX students, and AS Level students loved the challenge. Looking forward to VIBE 2025!
                </p>
                <div className="mt-auto pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Faculty</div>
                  <div className="font-display text-lg uppercase">A Participating School</div>
                </div>
              </blockquote>

              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  I wanted to convey my thanks and appreciation for Mrs. Neeraja for her pivotal role in pulling off the first edition of VIBE. Hat tip to you for all that you've done paving the way for future business fetes. The first one is the most difficult and important — the rest have a precedent in this.
                </p>
                <div className="mt-auto pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Parent</div>
                  <div className="font-display text-lg uppercase">Father of an Organising Member</div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* VIBE 2025 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Edition</span>
              <span className="font-display text-2xl uppercase">VIBE 2025</span>
              <span className="flex-1 h-px bg-foreground/10" />
            </div>
            <div className="p-10 border border-dashed border-foreground/15 text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Testimonials from VIBE 2025 coming soon
              </p>
            </div>
          </div>

          {/* Navigation back */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            <Link
              to="/events/$slug"
              params={{ slug: nextSlug }}
              className="group block p-10 bg-background hover:bg-surface transition-colors"
            >
              <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">Next event →</div>
              <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">{next.name}</div>
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
        </div>
      </section>
    </main>
  );
}
