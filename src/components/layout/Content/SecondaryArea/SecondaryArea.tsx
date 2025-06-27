import { ReactNode } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { colors } from "@/lib/colors";

export interface SecondaryAreaProps {
  children: ReactNode;
  header?: ReactNode;
  widthPreset?: "default" | "half";
}

export function SecondaryArea({
  children,
  header,
  widthPreset = "default",
}: SecondaryAreaProps) {
  const widthClass = widthPreset === "half" ? "flex-1" : "w-80";

  return (
    <>
      <div className={`w-px ${colors.bg.secondary} my-0`} />
      <aside
        className={`${widthClass} overflow-auto flex flex-col ${colors.text.primary}`}
        aria-label="Secondary content area"
      >
        {header && <Header>{header}</Header>}
        <Body>{children}</Body>
      </aside>
    </>
  );
}
