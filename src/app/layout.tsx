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
          className="
            h-screen 
            p-2 
            flex 
            items-center 
            justify-center 
            bg-gray-100
          "
          aria-label="Application layout"
        >
          <Sidebar />
          <main
            className="
              h-full 
              w-full 
              ml-2 
              p-4 
              bg-white 
              border 
              border-gray-200 
              rounded-lg
            "
            aria-label="Main content area"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
