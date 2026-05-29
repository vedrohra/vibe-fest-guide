import { createFileRoute, Link } from "@tanstack/react-router";
import skyline from "@/assets/skyline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIBE — School Business Event" },
      { name: "description", content: "VIBE is the premier student-led business event with four high-stakes tracks: Vaels Stock Exchange, Crisis, Trivia, and Shark Tank." },
      { property: "og:title", content: "VIBE — School Business Event" },
      { property: "og:description", content: "Four high-stakes business tracks. One unforgettable event." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: Index,
});

const events = [
  {
    n: "01",
    slug: "vaels-stock-exchange",
    name: "Vaels Stock Exchange",
    desc: "A live mock stock exchange. Trade with rival participants in real time and build the highest-value portfolio before the bell.",
  },
  {
    n: "02",
    slug: "crisis",
    name: "Crisis",
    desc: "Your team inherits a company in trouble. Diagnose the problem, weigh the trade-offs, and ship the smartest recovery plan under the clock.",
  },
  {
    n: "03",
    slug: "trivia",
    name: "Trivia",
    desc: "A rapid-fire quiz across markets, brands, founders, and the moments that shaped modern business. Sharp minds only.",
  },
  {
    n: "04",
    slug: "shark-tank",
    name: "Shark Tank",
    desc: "Invent a product, build the pitch, and defend it in front of the sharks. Just like the show — only louder.",
  },
] as const;

const schedule = [
  { time: "09:00", title: "Registration & Check-in", room: "Atrium" },
  { time: "10:00", title: "Opening Ceremony", room: "Main Hall" },
  { time: "11:00", title: "Vaels Stock Exchange — Opens", room: "Trading Floor" },
  { time: "13:30", title: "Crisis — Round 1", room: "Boardroom A" },
  { time: "15:00", title: "Trivia — Prelims", room: "Auditorium" },
  { time: "16:30", title: "Shark Tank — Finale", room: "Main Hall" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <span className="font-display text-2xl tracking-tighter uppercase">Vibe</span>
        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest">
          <a href="#events" className="hover:text-primary transition-colors">The Events</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
        </div>
        <a href="#register" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </a>
      </nav>

      {/* Hero */}
      <header className="relative h-[88vh] flex flex-col items-center justify-center overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="font-display text-[40vw] leading-none uppercase tracking-tighter text-primary select-none">VIBE</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="animate-reveal">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">School Business Summit · 2025</p>
            <h1 className="font-display text-7xl md:text-[11rem] leading-[0.85] uppercase tracking-tighter opacity-30">
              Where <span className="text-primary">Business</span><br/>Comes Alive
            </h1>
          </div>
          <div className="mt-10 animate-reveal [animation-delay:200ms]">
            <p className="max-w-[52ch] mx-auto text-muted-foreground text-base md:text-lg text-pretty">
              VIBE is our school's flagship business event. Four high-pressure tracks. One day to outthink, outpitch and outtrade everyone in the room.
            </p>
          </div>
        </div>
      </header>

      {/* Events */}
      <section id="events" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary mb-2 block tracking-widest">01 // The Lineup</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase">The Four Events</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">Four distinct tracks built to test strategy, creativity, judgement, and nerve.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 overflow-hidden">
          {events.map((e) => (
            <Link
              key={e.n}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="group bg-background p-8 aspect-[4/5] flex flex-col justify-between hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{e.n} / 04</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">View →</span>
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase mb-4 leading-none group-hover:text-primary transition-colors">{e.name}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-surface py-24 px-6 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img
              src={skyline}
              alt="Modern skyscraper glass facade at night"
              width={800}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover border border-white/5 grayscale"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase text-primary mb-4 tracking-widest">Why VIBE</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-8">
              Ambitious by<br/><span className="text-muted-foreground italic font-body">design</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-12">
              VIBE isn't a lecture or a workshop. It's a day where students step into the shoes of traders, founders, and crisis managers — and have to actually deliver. Built by students, for students who want more than a textbook.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-foreground/10 pt-12">
              <div>
                <div className="font-display text-4xl mb-2">04</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Events</div>
              </div>
              <div>
                <div className="font-display text-4xl mb-2">200+</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Participants</div>
              </div>
              <div>
                <div className="font-display text-4xl mb-2">01</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Day to Win</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24">
        <div className="px-6 max-w-7xl mx-auto mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary mb-2 block tracking-widest">02 // Logistics</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase">Day Schedule</h2>
          </div>
        </div>
        <div className="border-t border-foreground/10 max-w-7xl mx-auto">
          {schedule.map((s) => (
            <div key={s.time} className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_140px] items-center gap-4 px-6 py-6 border-b border-foreground/5 group hover:bg-primary transition-colors cursor-default">
              <span className="font-mono text-sm text-muted-foreground group-hover:text-primary-foreground">{s.time}</span>
              <span className="font-display text-xl md:text-2xl uppercase group-hover:text-primary-foreground">{s.title}</span>
              <span className="font-mono text-[10px] uppercase text-muted-foreground text-right group-hover:text-primary-foreground">{s.room}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <footer id="register" className="bg-primary text-primary-foreground py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-background/30 animate-slide"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="font-display text-6xl md:text-9xl uppercase tracking-tighter mb-8 leading-[0.85]">Claim Your Spot</h2>
          <p className="max-w-[50ch] mx-auto mb-10 text-primary-foreground/80">Registration is open to all students. Form your team of four and pick your tracks before slots fill up.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:vibe@vaelsinternationalschool.com" className="w-full md:w-auto px-12 py-6 border-2 border-primary-foreground font-display text-xl uppercase hover:bg-primary-foreground hover:text-primary transition-all">
              Register Team
            </a>
            <a href="#events" className="w-full md:w-auto px-12 py-6 bg-primary-foreground text-primary font-display text-xl uppercase hover:bg-foreground hover:text-primary-foreground transition-all">
              View Events
            </a>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-12 text-[10px] font-mono uppercase tracking-widest">
            <span>VIBE Organising Committee</span>
            <span>© 2025 · School Business Council</span>
            <a href="mailto:vibe@vaelsinternationalschool.com" className="underline">vibe@vaelsinternationalschool.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
