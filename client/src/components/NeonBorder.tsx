import { cn } from "@/lib/utils";
import { NeonColor, neonColors } from "@/lib/utils";

interface NeonBorderProps {
  className?: string;
  children: React.ReactNode;
  color: NeonColor;
}

export default function NeonBorder({ className, children, color }: NeonBorderProps) {
  return (
    <div className={cn("neon-border", neonColors[color].border, className)}>
      {children}
    </div>
  );
}
