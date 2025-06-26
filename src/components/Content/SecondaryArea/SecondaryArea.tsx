import { ReactNode } from "react";
import { Header } from "./Header/Header";

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
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </aside>
    </>
  );
}
