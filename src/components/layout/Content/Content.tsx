import React, { ReactNode } from "react";
import { MainArea } from "./MainArea/MainArea";
import { SecondaryArea } from "./SecondaryArea/SecondaryArea";
import { colors } from "@/lib/colors";

export interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  //TODO : to simplify (no more array)
  const childrenArray = React.Children.toArray(children);

  const mainAreaNode = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === MainArea
  );

  const secondaryAreaNode = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SecondaryArea
  );

  if (!mainAreaNode) {
    return (
      <main
        className={`flex h-full w-full ${colors.bg.card} border ${colors.border.primary} rounded overflow-hidden`}
        aria-label="Content"
      >
        {children}
      </main>
    );
  }

  return (
    <main
      className={`flex h-full w-full ${colors.bg.card} border ${colors.border.primary} rounded overflow-hidden`}
      aria-label="Content"
    >
      {mainAreaNode}
      {secondaryAreaNode}
    </main>
  );
}
