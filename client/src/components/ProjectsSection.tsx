import { useState } from "react";
import { motion } from "framer-motion";
import NeonText from "./NeonText";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "unity", label: "Unity" },
    { id: "unreal", label: "Unreal" },
    { id: "webgl", label: "WebGL" },
    { id: "mobile", label: "Mobile" }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="pink" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Projects Showcase
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            Check out my latest game development projects. Each demonstrates different skills, from gameplay programming to visual effects.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              className={`px-4 py-2 font-arcade text-xs ${
                activeFilter === filter.id
                  ? "neon-text-blue bg-card"
                  : "text-white hover:neon-text-blue hover:bg-card"
              } pixel-corners transition-all`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <NeonText color="blue" tag="p" className="font-arcade text-md">
              No projects found with this filter.
            </NeonText>
            <p className="text-gray-400 mt-2">
              Try selecting a different category.
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
