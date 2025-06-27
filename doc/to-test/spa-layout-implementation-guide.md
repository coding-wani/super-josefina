# SPA Layout Implementation Guide for Super Josefina

## Overview

This guide provides step-by-step instructions to implement a modern Single Page Application (SPA) layout system where the layout structure persists and only content changes during navigation. This creates a smooth, app-like experience without layout shifts.

## Architecture Goals

- **Persistent Layout**: Layout components (MainArea, SecondaryArea) remain mounted
- **Dynamic Content**: Pages inject content via React Portals
- **Smooth Transitions**: No re-rendering of layout structure
- **Flexible Secondary Area**: Can be shown/hidden per page
- **Type Safety**: Full TypeScript support

---

## Step 1: Create Layout Components with Dual Exports

### 1.1 Update `src/components/layout/Content/MainArea/MainArea.tsx`

```tsx
import { ReactNode } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { colors } from "@/lib/colors";

// Layout version - structure only, no content
export function MainAreaLayout() {
  return (
    <div
      className={`flex-1 ${colors.text.primary} flex flex-col`}
      aria-label="Main content area"
    >
      <div id="main-area-header-portal" />
      <div id="main-area-body-portal" className="flex-1" />
    </div>
  );
}

// Content version - for pages to inject content
export interface MainAreaProps {
  children: ReactNode;
  header?: ReactNode;
}

export function MainArea({ children, header }: MainAreaProps) {
  return (
    <>
      {header && (
        <Header portalId="main-area-header-portal">{header}</Header>
      )}
      <Body portalId="main-area-body-portal">{children}</Body>
    </>
  );
}
```

---

## Step 2: Create Portal-Based Header and Body Components

### 2.1 Install React Portal Hook (if needed)

```bash
npm install react-dom
```

### 2.2 Update `src/components/layout/Content/MainArea/Header/Header.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { colors } from "@/lib/colors";

export interface HeaderProps {
  children: ReactNode;
  portalId?: string;
}

export function Header({ children, portalId }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <header
      className={`px-4 py-3 border-b ${colors.border.primary}`}
      aria-label="Content header"
    >
      <span className="text-sm">{children}</span>
    </header>
  );

  if (portalId && mounted) {
    const portal = document.getElementById(portalId);
    return portal ? createPortal(content, portal) : null;
  }

  return content;
}
```

### 2.3 Update `src/components/layout/Content/MainArea/Body/Body.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface BodyProps {
  children: ReactNode;
  portalId?: string;
}

export function Body({ children, portalId }: BodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="p-4 h-full overflow-auto" aria-label="Main content">
      {children}
    </div>
  );

  if (portalId && mounted) {
    const portal = document.getElementById(portalId);
    return portal ? createPortal(content, portal) : null;
  }

  return content;
}
```

---

## Step 3: Update SecondaryArea Similarly

### 3.1 Update `src/components/layout/Content/SecondaryArea/SecondaryArea.tsx`

```tsx
import { ReactNode } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { colors } from "@/lib/colors";

// Layout version
export interface SecondaryAreaLayoutProps {
  widthPreset?: "default" | "half";
}

export function SecondaryAreaLayout({ 
  widthPreset = "default" 
}: SecondaryAreaLayoutProps) {
  const widthClass = widthPreset === "half" ? "flex-1" : "w-80";

  return (
    <>
      <div className={`w-px ${colors.bg.secondary} my-0`} />
      <aside
        className={`${widthClass} overflow-auto flex flex-col ${colors.text.primary}`}
        aria-label="Secondary content area"
      >
        <div id="secondary-area-header-portal" />
        <div id="secondary-area-body-portal" className="flex-1" />
      </aside>
    </>
  );
}

// Content version
export interface SecondaryAreaProps {
  children: ReactNode;
  header?: ReactNode;
  widthPreset?: "default" | "half";
}

export function SecondaryArea({
  children,
  header,
}: SecondaryAreaProps) {
  return (
    <>
      {header && (
        <Header portalId="secondary-area-header-portal">{header}</Header>
      )}
      <Body portalId="secondary-area-body-portal">{children}</Body>
    </>
  );
}
```

### 3.2 Update `src/components/layout/Content/SecondaryArea/Header/Header.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { colors } from "@/lib/colors";

export interface HeaderProps {
  children: ReactNode;
  portalId?: string;
}

export function Header({ children, portalId }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <header
      className={`px-4 py-3 border-b ${colors.border.primary}`}
      aria-label="Secondary content header"
    >
      <span className="text-sm">{children}</span>
    </header>
  );

  if (portalId && mounted) {
    const portal = document.getElementById(portalId);
    return portal ? createPortal(content, portal) : null;
  }

  return content;
}
```

### 3.3 Update `src/components/layout/Content/SecondaryArea/Body/Body.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface BodyProps {
  children: ReactNode;
  portalId?: string;
}

export function Body({ children, portalId }: BodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="flex-1 p-4 overflow-auto" aria-label="Secondary content">
      {children}
    </div>
  );

  if (portalId && mounted) {
    const portal = document.getElementById(portalId);
    return portal ? createPortal(content, portal) : null;
  }

  return content;
}
```

---

## Step 4: Update Content Component

### 4.1 Update `src/components/layout/Content/Content.tsx`

```tsx
"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { MainAreaLayout } from "./MainArea/MainArea";
import { SecondaryAreaLayout } from "./SecondaryArea/SecondaryArea";
import { colors } from "@/lib/colors";

// Context for managing secondary area visibility
interface ContentContextType {
  hasSecondaryArea: boolean;
  secondaryAreaWidth: "default" | "half";
  setSecondaryArea: (has: boolean, width?: "default" | "half") => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function useContentLayout() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContentLayout must be used within ContentLayout");
  }
  return context;
}

export interface ContentLayoutProps {
  children: ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  const [hasSecondaryArea, setHasSecondaryArea] = useState(false);
  const [secondaryAreaWidth, setSecondaryAreaWidth] = useState<"default" | "half">("default");

  const setSecondaryArea = (has: boolean, width: "default" | "half" = "default") => {
    setHasSecondaryArea(has);
    setSecondaryAreaWidth(width);
  };

  return (
    <ContentContext.Provider value={{ hasSecondaryArea, secondaryAreaWidth, setSecondaryArea }}>
      <main
        className={`flex h-full w-full ${colors.bg.card} border ${colors.border.primary} rounded overflow-hidden`}
        aria-label="Content"
      >
        <MainAreaLayout />
        {hasSecondaryArea && <SecondaryAreaLayout widthPreset={secondaryAreaWidth} />}
      </main>
      {children}
    </ContentContext.Provider>
  );
}
```

---

## Step 5: Update Root Layout

### 5.1 Update `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContentLayout } from "@/components/layout/Content/Content";
import { colors } from "@/lib/colors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Josefina",
  description: "Super Josefina application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} p-2 antialiased h-screen flex items-center justify-center ${colors.bg.primary}`}
      >
        <Sidebar />
        <ContentLayout>{children}</ContentLayout>
      </body>
    </html>
  );
}
```

---

## Step 6: Update Pages to Use New Pattern

### 6.1 Update `src/app/page.tsx` (Home)

```tsx
"use client";

import { MainArea } from "@/components/layout/Content";

export default function Home() {
  return (
    <MainArea header="Home main area header">
      Home main area content
    </MainArea>
  );
}
```

### 6.2 Update `src/app/inbox/page.tsx` (with Secondary Area)

```tsx
"use client";

import { useEffect } from "react";
import { MainArea, SecondaryArea } from "@/components/layout/Content";
import { useContentLayout } from "@/components/layout/Content/Content";

export default function InboxPage() {
  const { setSecondaryArea } = useContentLayout();

  useEffect(() => {
    // Enable secondary area for this page
    setSecondaryArea(true, "half");
    
    // Cleanup: hide secondary area when leaving the page
    return () => setSecondaryArea(false);
  }, [setSecondaryArea]);

  return (
    <>
      <MainArea header="Inbox main area header">
        Inbox main area content
      </MainArea>
      <SecondaryArea header="Inbox secondary area header">
        Inbox secondary area content
      </SecondaryArea>
    </>
  );
}
```

### 6.3 Update Other Pages (without Secondary Area)

For pages that don't need a secondary area, simply use the MainArea component:

```tsx
"use client";

import { MainArea } from "@/components/layout/Content";

export default function DraftsPage() {
  return (
    <MainArea header="Drafts main area header">
      Drafts main area content
    </MainArea>
  );
}
```

---

## Step 7: Update Index Exports

### 7.1 Update `src/components/layout/Content/index.tsx`

```tsx
export { MainArea, MainAreaLayout, type MainAreaProps } from "./MainArea/MainArea";
export {
  SecondaryArea,
  SecondaryAreaLayout,
  type SecondaryAreaProps,
} from "./SecondaryArea/SecondaryArea";
export { ContentLayout, useContentLayout } from "./Content";
```

---

## Key Benefits of This Implementation

1. **Persistent Layout**: The layout structure (MainAreaLayout, SecondaryAreaLayout) is always present in the DOM
2. **Dynamic Content**: Pages can inject content using React Portals without re-rendering the layout
3. **Smooth Transitions**: No layout shift or flicker when navigating between pages
4. **Secondary Area Control**: Pages can dynamically show/hide and configure the secondary area
5. **Type Safety**: Full TypeScript support maintained throughout
6. **Clean Separation**: Layout structure is completely separated from content
7. **Performance**: Layout components don't re-render on navigation
8. **Flexibility**: Easy to add animations, transitions, or additional layout areas

---

## Implementation Notes

- The `"use client"` directive is needed for components using hooks and portals
- The `mounted` state ensures portals only render on the client side
- The cleanup function in `useEffect` ensures the secondary area is hidden when leaving pages
- Portal IDs must be unique across the application
- The Context API manages global layout state

---

## Next Steps

After implementing this system:

1. Add page transitions using CSS animations
2. Implement loading states for content areas
3. Add keyboard navigation support
4. Consider adding a third area for notifications or panels
5. Implement responsive behavior for mobile layouts

This architecture provides a solid foundation for a modern, performant SPA experience in Next.js.