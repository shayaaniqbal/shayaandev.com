import { motion } from "framer-motion";
import { NeonColor } from "@/lib/utils";
import ProgressBar from "./ProgressBar";

export interface SkillData {
  name: string;
  level: number;
  color: NeonColor;
  category: string;
}

interface SkillBarProps {
  skill: SkillData;
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.1, duration: 0.5 }}
      >
        <ProgressBar 
          progress={skill.level} 
          color={skill.color}
          label={skill.name}
        />
      </motion.div>
    </div>
  );
}
