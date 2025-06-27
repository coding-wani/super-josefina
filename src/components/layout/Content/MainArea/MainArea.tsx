import { ReactNode } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { colors } from "@/lib/colors";

export interface MainAreaProps {
  children: ReactNode;
  header?: ReactNode;
}

export function MainArea({ children, header }: MainAreaProps) {
  return (
    <div
      className={`flex-1 ${colors.text.primary}`}
      aria-label="Main content area"
    >
      {header && <Header>{header}</Header>}
      <Body>{children}</Body>
    </div>
  );
}
