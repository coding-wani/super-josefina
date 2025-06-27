import { ReactNode } from "react";

export interface BodyProps {
  children: ReactNode;
}

export function Body({ children }: BodyProps) {
  return (
    <div className="flex-1 p-4 overflow-auto" aria-label="Secondary content">
      {children}
    </div>
  );
}
