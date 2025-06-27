"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { colors } from "@/lib/colors";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group flex items-center gap-2 ${
        isActive ? colors.text.linkActive : colors.text.link
      } transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
