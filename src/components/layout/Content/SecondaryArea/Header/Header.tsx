import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header
      className={`px-4 h-10 border-b ${colors.border.primary} flex items-center`}
      aria-label="Secondary content header"
    >
      <span className="text-sm">{children}</span>
    </header>
  );
}
