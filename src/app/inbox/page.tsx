"use client";

import { useMainAndSecondaryContent } from "@/lib/page-content-hooks";

export default function InboxPage() {
  useMainAndSecondaryContent(
    "Inbox main header",
    "Inbox main content",
    "Inbox secondary header",
    "inbox secondary content",
    "half"
  );

  return null;
}
