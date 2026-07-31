import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function RegisterButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const modal = (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-sm p-6"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md bg-background border border-foreground/15 p-8 text-center text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-4">
          Registrations
        </span>
        <h3 className="font-display text-4xl uppercase leading-none mb-4">
          Opening Aug 7th
        </h3>
        <p className="text-sm text-muted-foreground mb-8">
          Registrations for VIBE open on August 7th. Check back then to sign up your team.
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-8 py-3 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-foreground transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && mounted && createPortal(modal, document.body)}
    </>
  );
}
