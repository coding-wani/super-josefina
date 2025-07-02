import { ReactNode } from "react";
import { SecondaryHeader } from "./SecondaryHeader";
import { SecondaryBody } from "./SecondaryBody";
import { colors } from "@/lib/colors";

export interface SecondaryAreaProps {
  leftHeaderComponents?: ReactNode[];
  rightHeaderComponents?: ReactNode[];
  widthPreset?: "default" | "half" | "double";
  children: ReactNode;
}

export function SecondaryArea({
  leftHeaderComponents = [],
  rightHeaderComponents = [],
  widthPreset = "default",
  children,
}: SecondaryAreaProps) {
  const getWidthClass = () => {
    switch (widthPreset) {
      case "half":
        return "flex-1";
      case "double":
        return "w-[48rem]";
      default:
        return "w-80";
    }
  };

  return (
    <>
      <div className={`border-l ${colors.border.primary}`} />
      <aside
        className={`${getWidthClass()} overflow-auto flex flex-col ${
          colors.text.primary
        }`}
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
