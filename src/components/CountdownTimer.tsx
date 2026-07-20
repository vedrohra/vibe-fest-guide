import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-28T09:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const cell = (v: number, label: string) => (
    <div className="flex flex-col items-center">
      <div className="font-display text-4xl md:text-5xl leading-none tabular-nums">
        {String(v).padStart(2, "0")}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
  return (
    <div className="flex gap-5 md:gap-7">
      {cell(t.days, "Days")}
      {cell(t.hours, "Hrs")}
      {cell(t.minutes, "Min")}
      {cell(t.seconds, "Sec")}
    </div>
  );
}
