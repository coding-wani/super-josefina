import { ReactNode } from "react";
import { Header } from "./Header";
import { Content } from "./Content";

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
      <div className="w-px bg-neutral-200 my-0" />
      <aside
        className={`${widthClass} overflow-auto flex flex-col`}
        aria-label="Secondary content area"
      >
        {header && <Header>{header}</Header>}
        <Content>{children}</Content>
      </aside>
    </>
  );
}
