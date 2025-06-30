import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export interface SecondaryHeaderProps {
  leftComponents?: ReactNode[];
  rightComponents?: ReactNode[];
}

export function SecondaryHeader({
  leftComponents = [],
  rightComponents = [],
}: SecondaryHeaderProps) {
  return (
    <header
      className={`h-10 px-4 border-b ${colors.border.primary} flex items-center justify-between`}
      aria-label="Secondary content header"
    >
      {/* Left side components */}
      <div className="flex items-center gap-2">
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
