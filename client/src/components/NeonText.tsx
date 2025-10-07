import { cn, neonColors, type NeonColor } from "@/lib/utils";

interface NeonTextProps {
  className?: string;
  children: React.ReactNode;
  color: NeonColor;
  tag?: keyof JSX.IntrinsicElements;
  pulse?: boolean;
}

export default function NeonText({ 
  className, 
  children, 
  color, 
  tag: Tag = "span",
  pulse = false 
}: NeonTextProps) {
  return (
    <Tag className={cn(
      neonColors[color].text, 
      pulse && "animate-neon-pulse", 
      className
    )}>
      {children}
    </Tag>
  );
}
