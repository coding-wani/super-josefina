import { ReactNode } from "react";

export interface SecondaryBodyProps {
  children: ReactNode;
}

export function SecondaryBody({ children }: SecondaryBodyProps) {
  return (
    <div className="flex-1 overflow-auto flex" aria-label="Secondary content">
      {children}
    </div>
  );
}
