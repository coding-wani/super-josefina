import { ReactNode } from "react";

export interface MainBodyProps {
  children: ReactNode;
}

export function MainBody({ children }: MainBodyProps) {
  return (
    <div className="p-1 h-full overflow-auto" aria-label="Maincontent">
      {children}
    </div>
  );
}
