import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ContentProvider } from "@/lib/content-context";
import { OptimizedContent } from "@/components/Content/OptimizedContent";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContentProvider>
          <div className="h-screen p-2 flex items-center justify-center bg-neutral-100 gap-4">
            <Sidebar />
            <OptimizedContent />
          </div>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
