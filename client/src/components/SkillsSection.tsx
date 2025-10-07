import { motion } from "framer-motion";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import SkillBar from "./SkillBar";
import { skillsData, skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-background bg-opacity-60">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="cyan" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Technologies & Skills
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            My technical toolkit and expertise in game development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <NeonBorder color={categoryIndex % 3 === 0 ? "purple" : categoryIndex % 3 === 1 ? "blue" : "pink"}>
                <PixelCorners className="bg-card p-6">
                  <NeonText 
                    color={categoryIndex % 3 === 0 ? "purple" : categoryIndex % 3 === 1 ? "blue" : "pink"} 
                    tag="h3" 
                    className="font-arcade text-md mb-6"
                  >
                    {category}
                  </NeonText>
                  
                  <div>
                    {skillsData
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <SkillBar 
                          key={skill.name} 
                          skill={skill} 
                          delay={index}
                        />
                      ))}
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
