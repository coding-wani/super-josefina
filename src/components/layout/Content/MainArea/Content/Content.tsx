import { ReactNode } from "react";

export interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className="p-4 h-full overflow-auto" aria-label="Main content">
      {children}
    </div>
  );
}
