import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export interface HeaderProps {
  pageTitle: string;
  leftComponents?: ReactNode[];
  rightComponents?: ReactNode[];
}

export function Header({
  pageTitle,
  leftComponents = [],
  rightComponents = [],
}: HeaderProps) {
  return (
    <header
      className={`h-10 px-4 py-3 border-b ${colors.border.primary} flex items-center justify-between`}
      aria-label="Content header"
    >
      {/* Left side components */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{pageTitle}</span>
        {leftComponents.map((Component, index) => (
          <div key={`left-comp-${index}`}>{Component}</div>
        ))}
      </div>

      {/* Right side components */}
      <div className="flex items-center gap-4">
        {rightComponents.map((Component, index) => (
          <div key={`right-comp-${index}`}>{Component}</div>
        ))}
      </div>
    </header>
  );
}
