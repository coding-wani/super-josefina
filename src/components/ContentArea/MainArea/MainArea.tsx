import { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";

export interface MainAreaProps {
  children: ReactNode;
  header?: ReactNode;
}

export function MainArea({ children, header }: MainAreaProps) {
  return (
    <div className="flex-1" aria-label="Main content area">
      {header && <Header>{header}</Header>}
      <Content>{children}</Content>
    </div>
  );
}
