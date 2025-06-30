import { ReactNode } from "react";
import { MainHeader } from "./MainHeader";
import { MainBody } from "./MainBody";
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
        <MainHeader
          pageTitle={pageTitle}
          leftComponents={leftHeaderComponents}
          rightComponents={rightHeaderComponents}
        />
      )}
      <MainBody>{children}</MainBody>
    </div>
  );
}
