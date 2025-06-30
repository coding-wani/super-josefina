import { ReactNode } from "react";
import { SecondaryHeader } from "./SecondaryHeader";
import { SecondaryBody } from "./SecondaryBody";
import { colors } from "@/lib/colors";

export interface SecondaryAreaProps {
  leftHeaderComponents?: ReactNode[];
  rightHeaderComponents?: ReactNode[];
  widthPreset?: "default" | "half";
  children: ReactNode;
}

export function SecondaryArea({
  leftHeaderComponents = [],
  rightHeaderComponents = [],
  widthPreset = "default",
  children,
}: SecondaryAreaProps) {
  const widthClass = widthPreset === "half" ? "flex-1" : "w-80";

  return (
    <>
      <div className={`border-l ${colors.border.primary} self-stretch`} />
      <aside
        className={`${widthClass} overflow-auto flex flex-col ${colors.text.primary}`}
        aria-label="Secondary content area"
      >
        <SecondaryHeader
          leftComponents={leftHeaderComponents}
          rightComponents={rightHeaderComponents}
        />
        <SecondaryBody>{children}</SecondaryBody>
      </aside>
    </>
  );
}
