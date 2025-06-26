import { ReactNode } from "react";

export interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className="flex-1 p-4 overflow-auto" aria-label="Secondary content">
      {children}
    </div>
  );
}
