import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { NeonColor } from "@/lib/utils";
import NeonBorder from "./NeonBorder";
import NeonText from "./NeonText";
import PixelCorners from "./PixelCorners";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: NeonColor;
  role: string;
  publishedDate: string;
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      className={cn("group", className)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <NeonBorder color={project.color} className="h-full">
        <PixelCorners className="bg-card p-5 h-full flex flex-col">
          <div className="aspect-video w-full mb-4 overflow-hidden pixel-corners bg-background flex items-center justify-center">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
          
          <NeonText color={project.color} tag="h3" className="font-arcade text-sm mb-2">
            {project.title}
          </NeonText>
          
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          
          <p className="text-sm text-white mb-2">
            <span className="text-gray-400">Role: </span>
            {project.role}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-background text-xs px-2 py-1 pixel-corners text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-auto flex gap-3">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn("flex items-center gap-1 text-xs hover:neon-text-blue")}
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn("flex items-center gap-1 text-xs hover:neon-text-blue")}
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </PixelCorners>
      </NeonBorder>
    </motion.div>
  );
}
