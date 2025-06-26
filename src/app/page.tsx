"use client";

import { useMainContent } from "@/lib/page-content-hooks";

export default function Home() {
  useMainContent("Home header", "Home main content");

  return null;
}
