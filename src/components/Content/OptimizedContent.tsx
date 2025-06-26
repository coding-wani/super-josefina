"use client";

import { useContent } from "@/lib/content-context";
import { MainArea } from "./MainArea/MainArea";
import { SecondaryArea } from "./SecondaryArea/SecondaryArea";

export function OptimizedContent() {
  const {
    mainHeader,
    mainContent,
    secondaryHeader,
    secondaryContent,
    secondaryWidthPreset,
    showSecondary,
  } = useContent();

  return (
    <main
      className="flex h-full w-full bg-white border border-neutral-200 rounded overflow-hidden"
      aria-label="Content"
    >
      <MainArea header={mainHeader}>{mainContent}</MainArea>
      {showSecondary && (
        <SecondaryArea
          header={secondaryHeader}
          widthPreset={secondaryWidthPreset}
        >
          {secondaryContent}
        </SecondaryArea>
      )}
    </main>
  );
}
