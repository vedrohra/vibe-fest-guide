import { createFileRoute, Link } from "@tanstack/react-router";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import skyline from "@/assets/skyline.jpg";
import vibeLogo from "@/assets/vibe-logo-new.jpeg.asset.json";
import vibeStage from "@/assets/vibe-stage.jpg";
import crisisEvent from "@/assets/crisis-event.jpg.asset.json";
import stockExchange from "@/assets/stock-exchange.jpg.asset.json";
import trivia from "@/assets/trivia.jpg.asset.json";
import innovatorsHive from "@/assets/innovators-hive.jpg.asset.json";
import productDevelopment from "@/assets/product-development.jpg.asset.json";
import supplyChain from "@/assets/supply-chain.jpg.asset.json";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIBE — School Business Event" },
      { name: "description", content: "VIBE Event Hub is a website showcasing four distinct business-themed events for a school organization." },
      { property: "og:title", content: "VIBE — School Business Event" },
      { property: "og:description", content: "VIBE Event Hub is a website showcasing four distinct business-themed events for a school organization." },
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
    name: "VAELS STOCK EXCHANGE\u00a0\n\n",
    desc: "A real-world-style trading floor that puts students' financial strategy, instinct, and adaptability to the test.",
    image: stockExchange.url,
    contact: "Ved Rohra - 9345990041",
  },
  {
    n: "02",
    slug: "shark-tank",
    name: "Innovator's Hive",
    desc: "Shark-Tank style pitches. Introduce the company, present the product, and defend the business against the judges.",
    image: innovatorsHive.url,
    contact: "Ayush Mishra - 7358249609",
  },
  {
    n: "03",
    slug: "product-development",
    name: "Product Development",
    desc: "Pick a business or economics topic, analyse it with real data and case studies, and defend your thinking under Q&A.",
    image: productDevelopment.url,
    contact: "Zoya Hassan - 7200074702",
  },
  {
    n: "04",
    slug: "crisis",
    name: "Crisis Management",
    desc: "High-pressure scenarios that test sharp decision-making and quick adaptability when everything is on the line.",
    image: crisisEvent.url,
    contact: "Sahana Suryaprakash - 9025727419",
  },
  {
    n: "05",
    slug: "trivia",
    name: "Trivia",
    desc: "Team rounds of business knowledge — markets, brands, founders. Pen-and-paper prelims, then a live final for the top 6.",
    image: trivia.url,
    contact: "Thrivid Narain - 9380562232",
  },
  {
    n: "06",
    slug: "supply-chain-management",
    name: "Supply Chain Management",
    desc: "A strategic simulation that challenges teams to design, optimise, and manage a supply chain from source to delivery under real-world constraints.",
    image: supplyChain.url,
    contact: "Aditi Kartik - 6380487841",
  },

] as const;


const schedule = [
  { time: "09:00", title: "Registration & Check-in", room: "Atrium" },
  { time: "10:00", title: "Opening Ceremony", room: "Main Hall" },
  { time: "11:00", title: "Stock Exchange — Opens", room: "Trading Floor" },
  { time: "12:30", title: "Product Development", room: "Studio" },
  { time: "13:30", title: "Crisis Management — Round 1", room: "Boardroom A" },
  { time: "15:00", title: "Trivia — Prelims", room: "Auditorium" },
  { time: "16:30", title: "Innovator's Hive — Finale", room: "Main Hall" },

];

function Index() {
  useRevealOnScroll();
  return (
    <main className="min-h-screen bg-background text-foreground font-body">

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="flex flex-col">
          <span className="font-display text-2xl leading-none tracking-tighter uppercase">Vibe</span>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">By Vaels International School</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest">
          <a href="#events" className="hover:text-primary transition-colors">The Events</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#register" className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
            Register
          </a>
          <img src={vibeLogo.url} alt="VIBE logo" className="h-12 md:h-14 w-auto" />
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[92vh] flex flex-col items-center justify-center pt-12 md:pt-16 pb-16 overflow-hidden border-b border-foreground/10">

        {/* Corner meta labels */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 font-mono text-[10px] md:text-xs tracking-[0.25em] text-foreground/60 hero-fade-left [animation-delay:100ms] z-10">
          VIBE · 2026
        </div>
        <div className="absolute top-6 right-6 md:top-10 md:right-10 font-mono text-[10px] md:text-xs tracking-[0.25em] text-foreground/60 text-right hero-fade-right [animation-delay:100ms] z-10">
          Vaels International School
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="font-display text-[40vw] leading-none uppercase tracking-tighter select-none opacity-20 hero-clip">
            <span style={{ color: 'var(--vibe-green)' }}>V</span><span style={{ color: 'var(--vibe-red)' }}>I</span><span style={{ color: 'var(--vibe-yellow)' }}>B</span><span style={{ color: 'var(--vibe-blue)' }}>E</span>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="flex flex-col items-center">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6 hero-fade-up [animation-delay:400ms]">MENS IMPERII • ARS MERCATUS</p>
            <h1 className="font-display text-6xl md:text-[9rem] leading-[0.85] uppercase tracking-tighter text-foreground hero-clip [animation-delay:600ms]">
              Where <span style={{ color: 'var(--vibe-yellow)' }}>Business</span><br/>Comes Alive
            </h1>
          </div>
          <div className="mt-10">
            <p className="max-w-[52ch] mx-auto text-muted-foreground text-base md:text-lg text-pretty hero-fade-up [animation-delay:1400ms]">
              VIBE is Vaels International School's flagship business event. Six high-pressure tracks. One day to outthink, outpitch and outtrade everyone in the room.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hero-fade-up [animation-delay:1700ms]">By Vaels International School</p>
          </div>
        </div>
      </header>


      {/* Events */}
      <section id="events" className="py-32 md:py-40">
        <div data-reveal className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary mb-4 block tracking-widest">01 // The Lineup</span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9]">THE <span className="stroke-red">SIX EVENTS</span></h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">Six distinct tracks built to test strategy, creativity, judgement, and nerve.</p>
        </div>

        <div
          data-reveal
          className="events-track relative -mx-6 px-6 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none"
          ref={(el) => {
            if (!el || (el as any).__dragBound) return;
            (el as any).__dragBound = true;
            let isDown = false;
            let startX = 0;
            let scrollLeft = 0;
            let moved = false;
            el.addEventListener('pointerdown', (e) => {
              isDown = true;
              moved = false;
              startX = e.pageX - el.offsetLeft;
              scrollLeft = el.scrollLeft;
              el.setPointerCapture(e.pointerId);
            });
            el.addEventListener('pointermove', (e) => {
              if (!isDown) return;
              const x = e.pageX - el.offsetLeft;
              const walk = x - startX;
              if (Math.abs(walk) > 5) moved = true;
              el.scrollLeft = scrollLeft - walk;
            });
            const end = (e: PointerEvent) => {
              isDown = false;
              try { el.releasePointerCapture(e.pointerId); } catch {}
            };
            el.addEventListener('pointerup', end);
            el.addEventListener('pointercancel', end);
            el.addEventListener('click', (e) => {
              if (moved) { e.preventDefault(); e.stopPropagation(); }
            }, true);
          }}
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {events.map((e, i) => (
              <Link
                key={e.n}
                to="/events/$slug"
                params={{ slug: e.slug }}
                data-reveal
                data-reveal-delay={String(((i % 3) + 1) * 100)}
                draggable={false}
                className="group relative bg-background border border-foreground/10 p-8 flex flex-col justify-between hover:bg-surface transition-colors overflow-hidden w-[80vw] sm:w-[380px] aspect-[4/5] shrink-0"
                style={{ scrollSnapAlign: 'center' }}
              >
                {(e as any).image && (
                  <>
                    <img
                      src={(e as any).image}
                      alt={e.name}
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
                  </>
                )}
                <div className="relative flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>{e.n} / 06</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">View →</span>
                </div>
                <div className="relative">
                  <h3 className="font-display text-3xl uppercase mb-4 leading-none group-hover:text-primary transition-colors">{e.name}</h3>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-center">Drag / Swipe →</p>

      </section>

      {/* About */}
      <section id="about" className="bg-surface py-24 px-6 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5" data-reveal>
            <img
              src={vibeStage}
              alt="VIBE event — Vaels International School welcomes the audience"
              width={1280}
              height={853}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover border border-white/5"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center" data-reveal data-reveal-delay="200">
            <span className="font-mono text-[10px] uppercase text-primary mb-4 tracking-widest">Why VIBE</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-8">
              WHERE VISION MEETS<br/><span className="text-muted-foreground italic font-body">VENTURE</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-12">
              VIBE isn't a lecture or a workshop. It's a day where students step into the shoes of traders, founders, and crisis managers — and have to actually deliver. Built by students, for students who want more than a textbook.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-foreground/10 pt-12">
              <div>
                <div className="font-display text-4xl mb-2">06</div>
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
        <div className="px-6 max-w-7xl mx-auto mb-12 flex items-end justify-between" data-reveal>
          <div>
            <span className="font-mono text-[10px] uppercase text-primary mb-2 block tracking-widest">02 //&nbsp;</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase">Day Schedule</h2>
          </div>
        </div>
        <div className="border-t border-foreground/10 max-w-7xl mx-auto">
          {schedule.map((s) => (
            <div key={s.time} data-reveal className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_140px] items-center gap-4 px-6 py-6 border-b border-foreground/5 group hover:bg-primary transition-colors cursor-default">
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
          <p className="max-w-[50ch] mx-auto mb-10 text-primary-foreground/80">Registration is open to all students from Cambridge and IB curriculums. Form your team of four and pick your tracks before slots fill up.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:vibe@vaelsinternationalschool.com" className="w-full md:w-auto px-12 py-6 border-2 border-primary-foreground font-display text-xl uppercase hover:bg-primary-foreground hover:text-primary transition-all">
              Register Team
            </a>
            <a href="#events" className="w-full md:w-auto px-12 py-6 bg-primary-foreground text-primary font-display text-xl uppercase hover:bg-foreground hover:text-primary-foreground transition-all">
              View Events
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/about" className="w-full md:w-auto px-12 py-4 border border-primary-foreground/40 font-display text-lg uppercase hover:bg-primary-foreground hover:text-primary transition-all">
              About VIBE
            </Link>
          </div>
          <div className="mt-24 border-t border-primary-foreground/20 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] font-mono uppercase tracking-widest mb-10">
              <div className="flex flex-col gap-1">
                <span className="text-primary-foreground/50">CEO</span>
                <span>Ved Rohra</span>
                <span className="text-primary-foreground/70">9345990041</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary-foreground/50">COO</span>
                <span>Sahana Suryaprakash</span>
                <span className="text-primary-foreground/70">9025727419</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-primary-foreground/50">CFO</span>
                <span>Thrivid Narain</span>
                <span className="text-primary-foreground/70">9380562232</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] font-mono uppercase tracking-widest border-t border-primary-foreground/20 pt-8">
              <span>VIBE Organising Committee</span>
              <span>© 2026 · School Business Council</span>
              <a href="mailto:vibe@vaelsinternationalschool.com" className="underline">vibe@vaelsinternationalschool.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
