import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full overflow-y-auto shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
      {children}
    </div>
  );
}
