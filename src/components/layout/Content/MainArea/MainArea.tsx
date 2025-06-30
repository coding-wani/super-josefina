import { ReactNode } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { colors } from "@/lib/colors";

export interface MainAreaProps {
  children: ReactNode;
  pageTitle: string;
  leftHeaderComponents?: ReactNode[];
  rightHeaderComponents?: ReactNode[];
}

export function MainArea({
  children,
  pageTitle,
  leftHeaderComponents = [],
  rightHeaderComponents = [],
}: MainAreaProps) {
  return (
    <div
      className={`flex-1 ${colors.text.primary}`}
      aria-label="Main content area"
    >
      {(pageTitle ||
        leftHeaderComponents.length > 0 ||
        rightHeaderComponents.length > 0) && (
        <Header
          pageTitle={pageTitle}
          leftComponents={leftHeaderComponents}
          rightComponents={rightHeaderComponents}
        />
      )}
      <Body>{children}</Body>
    </div>
  );
}
