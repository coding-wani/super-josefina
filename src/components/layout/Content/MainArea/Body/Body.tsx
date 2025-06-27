import { ReactNode } from "react";

export interface BodyProps {
  children: ReactNode;
}

export function Body({ children }: BodyProps) {
  return (
    <div className="p-4 h-full overflow-auto" aria-label="Main content">
      {children}
    </div>
  );
}
