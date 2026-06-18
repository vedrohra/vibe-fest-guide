import { createFileRoute, Link } from "@tanstack/react-router";
import ideaImg from "@/assets/journey-idea.jpg.asset.json";
import makingImg from "@/assets/journey-making.jpg.asset.json";
import marketingImg from "@/assets/journey-marketing.jpg.asset.json";
import executionImg from "@/assets/journey-execution.jpg.asset.json";
import posterImg from "@/assets/journey-poster.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VIBE — Vaels International School" },
      { name: "description", content: "The story of VIBE and what people say about it — testimonials from VIBE 2024 and 2025." },
      { property: "og:title", content: "About VIBE" },
      { property: "og:description", content: "How VIBE started, and what judges, faculty and parents have said about it." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link to="/" className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
          ← Home
        </Link>
        <Link to="/" hash="register" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </Link>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[40vw] leading-none uppercase tracking-tighter select-none">V</div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">About</p>
          <h1 className="font-display text-6xl md:text-[9rem] leading-[0.85] uppercase tracking-tighter mb-8">
            About<br/>VIBE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            A short history of VIBE — and the people who've experienced it firsthand.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="py-24 px-6 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase text-primary tracking-widest">How it started</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-display uppercase leading-tight">
              {/* Paragraph about how VIBE started will be added here. */}
              The full story of VIBE is coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Journey of VIBE */}
      <section className="py-24 px-6 border-b border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12 pb-3 border-b-2 border-primary">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">Journey of VIBE</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Behind the scenes</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            From the first spark of an idea to event day — here's how the team brought VIBE to life across four phases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {[
              {
                num: "01",
                phase: "Idea",
                color: "text-sky-400",
                tagline: "Cooking up the unthinkable.",
                moments: [
                  "Plotting and scheming",
                  "Coming up with fun, quirky ideas",
                  "So much dedication and focus",
                  "Pinpointing the theme in our sleepless week",
                ],
              },
              {
                num: "02",
                phase: "Making",
                color: "text-orange-400",
                tagline: "Behind the scenes — the chart makers.",
                moments: [
                  "Plotting the unthinkable",
                  "Time. Less. Redundancies.",
                  "Hard-working ladies meeting",
                  "Important discussions",
                  "None of these were staged, I swear!",
                ],
              },
              {
                num: "03",
                phase: "Marketing",
                color: "text-emerald-400",
                tagline: "Getting the word out.",
                moments: [
                  "Shark Tank the panel",
                  "Product development developing problems",
                  "Taking pictures of taking pictures",
                  "Our 'manager' managing",
                ],
              },
              {
                num: "04",
                phase: "Execution",
                color: "text-yellow-400",
                tagline: "Show time.",
                moments: [
                  "The whole gang putting in the work",
                  "On our way to spread VIBE",
                  "Spreading VIBE across schools",
                  "P.S. Us trying to get famous",
                ],
              },
            ].map((step) => (
              <div key={step.num} className="bg-background p-8 flex flex-col">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phase {step.num}</span>
                  <span className="flex-1 h-px bg-foreground/10" />
                </div>
                <h3 className={`font-display text-5xl md:text-6xl uppercase tracking-tighter mb-3 ${step.color}`}>
                  {step.phase}
                </h3>
                <p className="font-display text-xl uppercase text-foreground/80 mb-6">{step.tagline}</p>
                <ul className="space-y-2 mt-auto">
                  {step.moments.map((m) => (
                    <li key={m} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="font-mono text-primary text-[10px] mt-1">▸</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-display text-3xl md:text-5xl uppercase tracking-tighter">
              Go <span className="text-primary">find</span> out!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10 pb-3 border-b-2 border-primary">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">What people say</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Testimonials</span>
          </div>

          {/* VIBE 2024 */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Edition</span>
              <span className="font-display text-2xl uppercase">VIBE 2024</span>
              <span className="flex-1 h-px bg-foreground/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  I was invited to be part of the VIBE Virtual Stock Exchange as a Judge/Observer and was amazed by the concept. The Vaels International School students have put together an excellent set of conditions to simulate a real-life stock exchange feeling for the participants. There were participants from more than 10 schools who enthusiastically worked on various conditions provided to them and bid/sold the stocks. The team led by John and ably supported by Sujith, Aditya Giri, Arman and other volunteers tirelessly worked during the whole 5 hours when the virtual stock exchange was open to make it a success. I would like to congratulate the students of Vaels International School for coming up with this concept and executing it with perfection under the guidance of their able teachers. Kudos to one and all connected with VIBE 2024!
                </p>
                <div className="mt-auto pt-4 border-t border-foreground/10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Judge / Observer</div>
                  <div className="font-display text-lg uppercase">Stock Exchange Simulation</div>
                </div>
              </blockquote>

              <blockquote className="bg-background p-8 flex flex-col">
                <span className="font-display text-4xl text-primary leading-none mb-4">"</span>
                <p className="text-base leading-relaxed mb-6">
                  Judging the Product Development event at VIBE 2024 was a wonderful experience. It was great to observe the way faculty coordinators facilitated student coordinators to conduct the event in a meticulous manner — an exemplification of learning management by doing. The hospitality of the Vaels team and how inclusive and accommodating they were with participants from other schools showed the true spirit of healthy competition. Bringing in industry experts to judge the innovation and creativity of students was an apt honour for the topics.
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
          <div>
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
        </div>
      </section>

      {/* CTA back */}
      <section className="border-t border-foreground/10 px-6 py-16 text-center">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" hash="register" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display text-xl uppercase hover:bg-foreground transition-colors">
            Register your team
          </Link>
          <Link to="/" hash="events" className="inline-block px-8 py-4 border-2 border-foreground text-foreground font-display text-xl uppercase hover:bg-foreground hover:text-background transition-colors">
            View Events
          </Link>
        </div>
      </section>
    </main>
  );
}
