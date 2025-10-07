import { motion } from "framer-motion";
import NeonText from "./NeonText";
import PixelCorners from "./PixelCorners";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <NeonText color="purple" tag="h1" className="text-4xl md:text-5xl font-arcade mb-4">
                Game <NeonText color="blue">Developer</NeonText>
              </NeonText>
              <NeonText color="pink" tag="p" className="text-xl md:text-2xl font-arcade">
                Unity & AR/VR Specialist
              </NeonText>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-300 mb-8 max-w-lg"
            >
              Game Developer with 4 years of experience in the gaming industry. Skilled in AR/VR, playable ads, and creating engaging gameplay. Strong in programming, design, and project management, with a focus on building fun and innovative games.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <PixelCorners className="px-6 py-3 font-arcade text-sm bg-card neon-border neon-border-purple text-white hover:neon-text-purple transition-all">
                  View Projects
                </PixelCorners>
              </a>
              <a href="#contact">
                <PixelCorners className="px-6 py-3 font-arcade text-sm bg-card neon-border neon-border-blue text-white hover:neon-text-blue transition-all">
                  Contact Me
                </PixelCorners>
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <svg 
                viewBox="0 0 300 300" 
                width="300" 
                height="300" 
                className="animate-pixel-float"
              >
                {/* Arcade Cabinet SVG */}
                <rect x="60" y="30" width="180" height="240" fill="#1E1E2F" className="neon-border-purple" />
                <rect x="75" y="45" width="150" height="100" fill="#0C0C14" />
                <rect x="90" y="155" width="120" height="80" fill="#0C0C14" />
                <rect x="95" y="245" width="110" height="20" fill="#0C0C14" />
                
                {/* Pixel Character */}
                <g transform="translate(125, 90)">
                  <rect x="0" y="0" width="50" height="50" fill="#9D00FF" />
                  <rect x="10" y="10" width="10" height="10" fill="#00EEFF" />
                  <rect x="30" y="10" width="10" height="10" fill="#00EEFF" />
                  <rect x="15" y="30" width="20" height="5" fill="#FF0099" />
                </g>
                
                {/* Controls */}
                <circle cx="110" cy="195" r="15" fill="#FF0099" />
                <circle cx="190" cy="195" r="15" fill="#00EEFF" />
                <rect x="140" y="185" width="20" height="20" fill="#9D00FF" />
              </svg>
              
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10"></div>
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
