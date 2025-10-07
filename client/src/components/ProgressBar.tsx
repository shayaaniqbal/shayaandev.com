import { cn } from "@/lib/utils";
import { NeonColor, neonColors } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  color: NeonColor;
  className?: string;
  label?: string;
}

export default function ProgressBar({ 
  progress, 
  color, 
  className, 
  label 
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-300">{label}</span>
          <span className="text-xs font-mono">{percentage}%</span>
        </div>
      )}
      <div className="progress-bar pixel-corners" style={{ borderColor: neonColors[color].base }}>
        <div 
          className="progress-fill" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: neonColors[color].base,
            boxShadow: `0 0 10px ${neonColors[color].base}, 0 0 20px ${neonColors[color].base}`
          }}
        />
      </div>
    </div>
  );
}
