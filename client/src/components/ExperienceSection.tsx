import { motion } from "framer-motion";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="purple" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Work Experience
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            My professional journey in game development.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-8 last:mb-0"
            >
              <NeonBorder 
                color={index % 3 === 0 ? "purple" : index % 3 === 1 ? "blue" : "pink"}
                className="relative"
              >
                <PixelCorners className="bg-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <NeonText 
                        color={index % 3 === 0 ? "purple" : index % 3 === 1 ? "blue" : "pink"} 
                        tag="h3" 
                        className="font-arcade text-md mb-2"
                      >
                        {job.title}
                      </NeonText>
                      <h4 className="text-white font-medium">{job.company}</h4>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-background text-sm font-mono text-gray-300 pixel-corners">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div>
                    <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <span className="inline-block w-2 h-2 bg-cyan-500 mt-1.5 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </PixelCorners>
              </NeonBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
