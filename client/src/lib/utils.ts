import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const neonColors = {
  purple: {
    base: "#9D00FF",
    text: "neon-text-purple",
    border: "neon-border-purple",
  },
  blue: {
    base: "#00EEFF",
    text: "neon-text-blue",
    border: "neon-border-blue",
  },
  pink: {
    base: "#FF0099",
    text: "neon-text-pink",
    border: "neon-border-pink",
  },
  cyan: {
    base: "#00FFDD",
    text: "neon-text-cyan",
    border: "neon-border-cyan",
  },
  green: {
    base: "#00FF66",
    text: "neon-text-green",
    border: "neon-border-green",
  },
};

export type NeonColor = keyof typeof neonColors;
