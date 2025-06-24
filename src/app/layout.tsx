import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <div
          className="h-screen px-2 py-2 flex items-center justify-center bg-neutral-100 gap-4"
          aria-label="Application layout"
        >
          <Sidebar />
          <main
            className="h-full w-full p-4 bg-white border border-neutral-200 rounded"
            aria-label="Main content area"
          >
            {children}
            {/* Example of Children view (?):
            - on the left or taking all the main width a div with header
            - with sometimes a div on the right that don't have header
            */}
          </main>
        </div>
      </body>
    </html>
  );
}
