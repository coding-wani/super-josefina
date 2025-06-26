"use client";

import { useEffect } from "react";
import { useContent } from "./content-context";
import { ReactNode } from "react";

interface UsePageContentOptions {
  mainHeader?: ReactNode;
  mainContent?: ReactNode;
  secondaryHeader?: ReactNode;
  secondaryContent?: ReactNode;
  secondaryWidthPreset?: "default" | "half";
  showSecondary?: boolean;
}

export function usePageContent({
  mainHeader,
  mainContent,
  secondaryHeader,
  secondaryContent,
  secondaryWidthPreset = "default",
  showSecondary = false,
}: UsePageContentOptions) {
  const {
    setMainHeader,
    setMainContent,
    setSecondaryHeader,
    setSecondaryContent,
    setSecondaryWidthPreset,
    setShowSecondary,
  } = useContent();

  useEffect(() => {
    if (mainHeader !== undefined) setMainHeader(mainHeader);
  }, [mainHeader, setMainHeader]);

  useEffect(() => {
    if (mainContent !== undefined) setMainContent(mainContent);
  }, [mainContent, setMainContent]);

  useEffect(() => {
    if (secondaryHeader !== undefined) setSecondaryHeader(secondaryHeader);
  }, [secondaryHeader, setSecondaryHeader]);

  useEffect(() => {
    if (secondaryContent !== undefined) setSecondaryContent(secondaryContent);
  }, [secondaryContent, setSecondaryContent]);

  useEffect(() => {
    setSecondaryWidthPreset(secondaryWidthPreset);
  }, [secondaryWidthPreset, setSecondaryWidthPreset]);

  useEffect(() => {
    setShowSecondary(showSecondary);
  }, [showSecondary, setShowSecondary]);
}

// Hook simplifié pour les pages qui n'ont que du contenu principal
export function useMainContent(header: ReactNode, content: ReactNode) {
  usePageContent({
    mainHeader: header,
    mainContent: content,
    showSecondary: false,
  });
}

// Hook simplifié pour les pages avec contenu principal et secondaire
export function useMainAndSecondaryContent(
  mainHeader: ReactNode,
  mainContent: ReactNode,
  secondaryHeader: ReactNode,
  secondaryContent: ReactNode,
  secondaryWidthPreset: "default" | "half" = "default"
) {
  usePageContent({
    mainHeader,
    mainContent,
    secondaryHeader,
    secondaryContent,
    secondaryWidthPreset,
    showSecondary: true,
  });
}
