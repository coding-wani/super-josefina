import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header
      className="px-4 py-3 border-b border-neutral-200"
      aria-label="Content header"
    >
      <span className="text-sm text-neutral-600">{children}</span>
    </header>
  );
}
