import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export interface MainHeaderProps {
  pageTitle: string;
  leftComponents?: ReactNode[];
  rightComponents?: ReactNode[];
}

export function MainHeader({
  pageTitle,
  leftComponents = [],
  rightComponents = [],
}: MainHeaderProps) {
  return (
    <header
      className={`h-10 px-4 py-3 border-b ${colors.border.primary} flex items-center justify-between`}
      aria-label="Main content header"
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
