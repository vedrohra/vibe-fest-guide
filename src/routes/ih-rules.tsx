import { createFileRoute, Link } from "@tanstack/react-router";
import { RegisterButton } from "@/components/RegisterButton";

export const Route = createFileRoute("/ih-rules")({
  head: () => ({
    meta: [
      { title: "Innovator's Hive Rules & Procedures — VIBE" },
      { name: "description", content: "Full rules and procedures for Innovator's Hive at VIBE: Pitch Perfect, Crisis and Mergers rounds." },
      { property: "og:title", content: "Innovator's Hive Rules & Procedures — VIBE" },
      { property: "og:description", content: "Full rules and procedures for Innovator's Hive at VIBE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" },
    ],
  }),
  component: IhRulesPage,
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
    title: "What is Innovator's Hive?",
    intro:
      "Innovator's Hive is a flagship business event designed to challenge participants with real-world entrepreneurial scenarios across three dynamic rounds against other participating teams. Each stage pushes teams to think critically, act strategically, and showcase their ability to thrive under pressure.",
  },
  {
    id: "ii",
    title: "Pitch Perfect — Round 1",
    blocks: [
      {
        heading: "Introduction",
        body: "Participants will brainstorm and develop a unique product from the ground up based on a category (different sectors, type of business) given at random by the Sharks (Judges). Teams will then present their designated product or business idea with creativity and clarity, coming with clear and precise methods to advertise, scale and build up the business from idea to reality. This round tests a team's ability to pitch persuasively, highlight unique features and convince the Sharks that their concept has market potential. Participants will then respond to all follow-up questions from the Sharks, followed by offers presented to the team pitching their idea. While teams are not obligated to accept the judges' offers, they will be expected to clearly explain their reasons for declining.",
      },
      {
        heading: "Procedure",
        items: [
          "All teams develop their own unique product.",
          "25 minutes to prepare.",
          "Around 5 minutes per team pitch.",
          "Speaking for a longer duration does not provide additional points. Points are awarded based on the information presented by the teams.",
          "2–5 minutes per team for Shark Q&A, offers made to the presenting teams, and justification if the team declines the offer(s).",
          "Note: Presenting teams can negotiate the offer with the Judges.",
        ],
      },
    ],
  },
  {
    id: "iii",
    title: "Crisis — Round 2",
    blocks: [
      {
        heading: "Introduction",
        body: "Crisis is an intense, fast-paced simulation that immerses participants in the challenges of corporate crisis management. Each team will face a unique crisis to their company, with a physical copy containing financial information in context of their company given to all participants. Each company will face several disruptions across political, economic, social and environmental arenas. These companies are expected to make swift, strategic decisions amid rapidly evolving scenarios, honing their skills in critical thinking, adaptability and risk management.",
      },
      {
        heading: "Procedure",
        items: [
          "Total duration: 50 minutes to 1 hour.",
          "25 minutes to prepare.",
          "4 minutes presentation per team.",
          "Judges can ask follow-up questions to the team presenting.",
          "Each team will be provided with their own financial statements containing information regarding the crisis. Participants are expected to include the context of the statements while they present.",
        ],
      },
    ],
  },
  {
    id: "iv",
    title: "Mergers — Round 3",
    blocks: [
      {
        heading: "Introduction",
        body: "Two randomly selected teams will be merged into one larger unit, combining their strengths, resources, and strategies. From the original six teams of three members each, the merger creates three powerhouse teams of six members. This round is designed to replicate the real-world dynamics of corporate mergers, where businesses join forces to expand scale, diversify operations, and strengthen market influence. Participants must now prove that unity brings efficiency, innovation, and greater profitability.",
      },
      {
        heading: "Procedure",
        items: [
          "Preparation time: 30 minutes.",
          "Presentation: 10 minutes.",
          "Q&A: 5 to 7 minutes.",
          "2 teams will be combined into one group, turning 6 teams into 3 groups.",
          "Every participant in a group will again be provided with a physical copy of additional financial information in context of their merged company, and participants are expected to refer to the information provided.",
        ],
      },
    ],
  },
  {
    id: "v",
    title: "Code of Conduct",
    blocks: [
      {
        items: [
          "Participants are allowed to bring at least one or more devices in a team.",
          "Participants are allowed to use the internet for research purposes.",
          "The use of AI is strictly prohibited.",
          "Breaking the 3rd code of conduct will not be taken lightly. Participants will be warned the first time; the 2nd time and onwards will result in significant point reductions and possible disqualification.",
        ],
      },
    ],
  },
];

function IhRulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <Link to="/" className="font-display text-2xl tracking-tighter uppercase">Vibe</Link>
        <Link
          to="/events/$slug"
          params={{ slug: "shark-tank" }}
          className="px-4 py-1.5 border border-foreground/20 bg-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back to Innovator's Hive
        </Link>
        <RegisterButton className="px-4 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Register
        </RegisterButton>
      </nav>

      <header className="relative px-6 py-24 md:py-32 border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center pointer-events-none">
          <div className="font-display text-[35vw] leading-none uppercase tracking-tighter select-none">HIVE</div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">Rules & Procedures</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[0.9] uppercase tracking-tighter mb-8">
            Welcome to the Innovator's Hive Guide
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Please read the following information carefully so that you know exactly what this event requires from participants.
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
            params={{ slug: "shark-tank" }}
            className="group block p-10 bg-background hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest mb-4">← Back</div>
            <div className="font-display text-3xl uppercase group-hover:text-primary transition-colors">Innovator's Hive Event Page</div>
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
