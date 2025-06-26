import React, { ReactNode } from "react";
import { MainArea } from "./MainArea/MainArea";
import { SecondaryArea } from "./SecondaryArea/SecondaryArea";

export interface ContentAreaProps {
  children: ReactNode;
}

export function ContentArea({ children }: ContentAreaProps) {
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
        className="flex h-full w-full bg-white border border-neutral-200 rounded overflow-hidden"
        aria-label="Content"
      >
        {children}
      </main>
    );
  }

  return (
    <main
      className="flex h-full w-full bg-white border border-neutral-200 rounded overflow-hidden"
      aria-label="Content"
    >
      {mainAreaNode}
      {secondaryAreaNode}
    </main>
  );
}
