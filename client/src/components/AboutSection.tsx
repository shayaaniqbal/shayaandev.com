import { motion } from "framer-motion";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import profileImage from "@assets/picofme_1756676853859.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="blue" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            About Me
          </NeonText>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NeonBorder color="purple" className="h-full">
              <PixelCorners className="bg-card p-6 h-full">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <div className="w-40 h-40 rounded-lg overflow-hidden neon-border neon-border-purple pixel-corners">
                    <img 
                      src={profileImage} 
                      alt="Shayaan Iqbal - Unity Developer"
                      className="w-full h-full object-cover bg-gray-700" 
                    />
                  </div>
                  <div>
                    <NeonText color="purple" tag="h3" className="font-arcade text-lg mb-2">
                      Shayaan Iqbal
                    </NeonText>
                    <div className="text-sm text-gray-400 mb-2">Game Developer | Unity, Playable Ads & VR Dev</div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="inline-block px-2 py-1 bg-purple-900 bg-opacity-40 text-xs rounded pixel-corners text-purple-300">Unity</span>
                      <span className="inline-block px-2 py-1 bg-blue-900 bg-opacity-40 text-xs rounded pixel-corners text-blue-300">C#</span>
                      <span className="inline-block px-2 py-1 bg-pink-900 bg-opacity-40 text-xs rounded pixel-corners text-pink-300">Mobile Games</span>
                      <span className="inline-block px-2 py-1 bg-cyan-900 bg-opacity-40 text-xs rounded pixel-corners text-cyan-300">Multiplayer</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Unity Developer and Game Designer with 4 years of experience in the gaming industry. 
                    Skilled in playable ads, and creating engaging gameplay. Strong in programming, 
                    design, and project management, with a focus on building fun and innovative games.
                  </p>
                  
                  <p>
                    With expertise in Unity and C#, I've developed numerous mobile games for Android and iOS 
                    platforms. I excel in gameplay programming, multiplayer systems, AI implementation, 
                    and creating optimized game experiences that run smoothly across all devices.
                  </p>
                  
                  <p>
                    My strengths include team leadership, technical problem-solving, and implementing
                    efficient code structures. Currently specializing in interactive playable ads and 
                    multiplayer game development while mentoring junior developers.
                  </p>
                </div>
              </PixelCorners>
            </NeonBorder>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NeonBorder color="pink" className="h-full">
              <PixelCorners className="bg-card p-6 h-full">
                <NeonText color="pink" tag="h3" className="font-arcade text-lg mb-4">
                  Education & Background
                </NeonText>
                
                <div className="space-y-6">
                  <div>
                    <NeonText color="cyan" tag="h4" className="text-md font-arcade mb-2">
                      Education
                    </NeonText>
                    <p className="text-gray-300 mb-1">BS Computer Science</p>
                    <p className="text-gray-400 text-sm">Information Technology University, Lahore — 2017-2021</p>

                    <div className="mt-3">
                      <p className="text-gray-300 mb-1">Intermediate</p>
                      <p className="text-gray-400 text-sm">Punjab Group of Colleges, Okara — 2017</p>
                    </div>

                    <div className="mt-3">
                      <p className="text-gray-300 mb-1">Matric</p>
                      <p className="text-gray-400 text-sm">Falcon Public School, Okara — 2015</p>
                    </div>
                  </div>
                  
                  <div>
                    <NeonText color="cyan" tag="h4" className="text-md font-arcade mb-2">
                      Contact Information
                    </NeonText>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-pink-500 mr-2"></span>
                        Address: A3 block, Johar, Town, Lahore, Pakistan
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 mr-2"></span>
                        Phone: +923017689696
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-purple-500 mr-2"></span>
                        Email: shayaan.dev@gmail.com
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <NeonText color="cyan" tag="h4" className="text-md font-arcade mb-2">
                      Languages
                    </NeonText>
                    <ul className="text-gray-300 space-y-2">
                      <li>Urdu (Native)</li>
                      <li>English (Fluent)</li>
                    </ul>

                    <div className="mt-4">
                      <a 
                        href="/ShayaanIqbalCV.pdf" 
                        download="ShayaanIqbalCV.pdf"
                        className="inline-block px-4 py-2 bg-pink-900 bg-opacity-40 text-pink-300 rounded pixel-corners hover:bg-opacity-60 transition-all"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </PixelCorners>
            </NeonBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
