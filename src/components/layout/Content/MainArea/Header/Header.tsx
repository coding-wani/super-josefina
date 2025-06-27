import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header
      className={`px-4 py-3 border-b ${colors.border.primary}`}
      aria-label="Content header"
    >
      <span className="text-sm">{children}</span>
    </header>
  );
}
