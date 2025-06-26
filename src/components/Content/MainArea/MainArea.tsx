import { ReactNode } from "react";
import { Header } from "./Header/Header";

export interface MainAreaProps {
  children: ReactNode;
  header?: ReactNode;
}

export function MainArea({ children, header }: MainAreaProps) {
  return (
    <div className="flex-1" aria-label="Main content area">
      {header && <Header>{header}</Header>}
      <div className="p-4 h-full overflow-auto">{children}</div>
    </div>
  );
}
