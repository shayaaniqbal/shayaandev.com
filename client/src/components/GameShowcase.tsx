import { useState } from "react";
import { motion } from "framer-motion";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import { Button } from "@/components/ui/button";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  gif: string;
  technologies: string[];
  color: "purple" | "blue" | "pink" | "cyan";
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "cosmic-battle",
    title: "Cosmic Battle",
    description: "A fast-paced space shooter with procedurally generated levels and advanced particle effects.",
    features: [
      "Real-time combat system with dynamic enemy AI",
      "Procedurally generated levels ensuring unique gameplay",
      "Advanced particle system for immersive visual effects",
      "Progressive difficulty scaling based on player performance"
    ],
    gif: "https://i.imgur.com/Vt5z0iq.gif",
    technologies: ["Unity", "C#", "ShaderGraph"],
    color: "purple"
  },
  {
    id: "pixel-adventure",
    title: "Pixel Adventure",
    description: "A retro-inspired platformer with pixel-perfect controls and challenging level design.",
    features: [
      "Pixel-perfect collision and movement controls",
      "Unique character abilities that unlock progressively",
      "Metroidvania-inspired level design with secrets",
      "Original chiptune soundtrack that adapts to gameplay"
    ],
    gif: "https://i.imgur.com/PdRcYx4.gif",
    technologies: ["GameMaker", "GML", "Pixel Art"],
    color: "blue"
  },
  {
    id: "neon-racer",
    title: "Neon Racer",
    description: "A high-speed racing game set in a cyberpunk world with physically accurate vehicle dynamics.",
    features: [
      "Advanced vehicle physics simulation",
      "Dynamic weather and time-of-day system",
      "Procedural track generation with unique challenges",
      "Online multiplayer with up to 16 players"
    ],
    gif: "https://i.imgur.com/PGFFtHj.gif",
    technologies: ["Unreal Engine", "C++", "Blueprints"],
    color: "pink"
  }
];

export default function GameShowcase() {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem>(showcaseItems[0]);
  
  return (
    <section id="mini-game" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="cyan" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Gameplay Showcase
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            Dive into the dynamic worlds and gameplay mechanics I've created. These demonstrations highlight my approach to game design and development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <NeonBorder color={selectedItem.color}>
              <PixelCorners className="bg-card p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <NeonText color={selectedItem.color} tag="h3" className="font-arcade text-xl mb-2">
                      {selectedItem.title}
                    </NeonText>
                    <p className="text-gray-300">{selectedItem.description}</p>
                  </div>
                  
                  <div className="flex-grow relative mb-4 bg-background rounded-md overflow-hidden aspect-video">
                    <img 
                      src={selectedItem.gif} 
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-primary pointer-events-none"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItem.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 rounded text-xs neon-text-${selectedItem.color} bg-background`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-white font-arcade text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedItem.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <span className={`inline-block w-2 h-2 bg-${selectedItem.color}-500 mt-1.5 mr-2 flex-shrink-0`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </PixelCorners>
            </NeonBorder>
          </div>
          
          <div>
            <NeonBorder color="cyan">
              <PixelCorners className="bg-card p-6 h-full">
                <NeonText color="cyan" tag="h3" className="font-arcade text-md mb-6">
                  Select Demo
                </NeonText>
                
                <div className="space-y-4">
                  {showcaseItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setSelectedItem(item)}
                        className={`w-full justify-start text-left font-arcade text-sm bg-background hover:bg-card border border-primary
                          ${selectedItem.id === item.id ? `neon-text-${item.color} neon-border neon-border-${item.color}` : 'text-gray-300'}`}
                      >
                        {item.title}
                      </Button>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <NeonText color="cyan" tag="h4" className="font-arcade text-sm mb-4">
                    About These Demos
                  </NeonText>
                  <p className="text-gray-300 text-sm">
                    These projects showcase different aspects of my game development skills, from physics simulation to procedural generation and AI systems.
                  </p>
                  <p className="text-gray-300 text-sm mt-4">
                    Each demo represents a fully realized game concept with complete mechanics, polished visuals, and optimized performance.
                  </p>
                </div>
              </PixelCorners>
            </NeonBorder>
          </div>
        </div>
      </div>
    </section>
  );
}