import { useState } from "react";
import { createPortal } from "react-dom";

const EXTERNAL_URL =
  "https://docs.google.com/forms/d/10c97a4SHLpRkLieEP4qdQ9HTjMZNzIxao587kxrfamE/viewform?ts=6a58c3ca&edit_requested=true";
const INTERNAL_URL = "https://forms.gle/rUwLqkpWogJeoX4Y8";

export function RegisterButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative w-full max-w-md bg-background border border-foreground/15 p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-4 font-mono text-sm text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                Register
              </p>
              <h2 className="font-display text-3xl uppercase tracking-tight mb-6">
                Choose your registration
              </h2>
              <div className="grid gap-3">
                <a
                  href={INTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
                >
                  Internal Registration
                </a>
                <a
                  href={EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 border border-foreground/20 font-mono text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                >
                  External Registration
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
