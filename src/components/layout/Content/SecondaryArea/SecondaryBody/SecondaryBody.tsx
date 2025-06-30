import { ReactNode } from "react";

export interface SecondaryBodyProps {
  children: ReactNode;
}

export function SecondaryBody({ children }: SecondaryBodyProps) {
  return (
    <div className="flex-1 p-4 overflow-auto" aria-label="Secondary content">
      {children}
    </div>
  );
}
