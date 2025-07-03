import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  const cleanName = name.trim();
  const words = cleanName.split(" ");
  
  if (words.length >= 2) {
    return words[0][0] + words[1][0];
  }
  return cleanName.substring(0, 2);
}
