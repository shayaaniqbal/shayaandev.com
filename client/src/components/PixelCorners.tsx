import { cn } from "@/lib/utils";

interface PixelCornersProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PixelCorners({ className, children }: PixelCornersProps) {
  return (
    <div className={cn("pixel-corners", className)}>
      {children}
    </div>
  );
}
