"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContentContextType {
  mainHeader?: ReactNode;
  mainContent?: ReactNode;
  secondaryHeader?: ReactNode;
  secondaryContent?: ReactNode;
  secondaryWidthPreset?: "default" | "half";
  showSecondary?: boolean;
  setMainHeader: (content: ReactNode) => void;
  setMainContent: (content: ReactNode) => void;
  setSecondaryHeader: (content: ReactNode) => void;
  setSecondaryContent: (content: ReactNode) => void;
  setSecondaryWidthPreset: (preset: "default" | "half") => void;
  setShowSecondary: (show: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [mainHeader, setMainHeader] = useState<ReactNode>();
  const [mainContent, setMainContent] = useState<ReactNode>();
  const [secondaryHeader, setSecondaryHeader] = useState<ReactNode>();
  const [secondaryContent, setSecondaryContent] = useState<ReactNode>();
  const [secondaryWidthPreset, setSecondaryWidthPreset] = useState<
    "default" | "half"
  >("default");
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <ContentContext.Provider
      value={{
        mainHeader,
        mainContent,
        secondaryHeader,
        secondaryContent,
        secondaryWidthPreset,
        showSecondary,
        setMainHeader,
        setMainContent,
        setSecondaryHeader,
        setSecondaryContent,
        setSecondaryWidthPreset,
        setShowSecondary,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
