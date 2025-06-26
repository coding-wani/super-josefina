"use client";

import { useMainAndSecondaryContent } from "@/lib/page-content-hooks";

export default function IssuesPage() {
  useMainAndSecondaryContent(
    "Issues header",
    "Issues main content",
    "Issues secondary header",
    "Issues secondary content"
  );

  return null;
}
