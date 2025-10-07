import NeonText from "./NeonText";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-20 py-10 px-4 border-t border-primary bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 mr-2 relative flex items-center justify-center neon-border neon-border-purple pixel-corners bg-card">
              <span className="font-arcade text-sm neon-text-purple">S</span>
            </div>
            <NeonText color="purple" tag="h2" className="font-arcade text-md">
              Shayaan's Portfolio
            </NeonText>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-gray-400 hover:neon-text-blue text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:neon-text-blue text-sm">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:neon-text-blue text-sm">
              Skills
            </a>
            <a href="#experience" className="text-gray-400 hover:neon-text-blue text-sm">
              Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:neon-text-blue text-sm">
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-xs">
              © {currentYear} Game Developer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
