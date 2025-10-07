import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  links: { name: string; href: string }[];
}

export default function Header({ links }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-background bg-opacity-90 backdrop-blur-sm border-b border-primary" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3 relative flex items-center justify-center neon-border neon-border-purple pixel-corners bg-card overflow-hidden">
            <span className="font-arcade text-lg neon-text-purple">S</span>
          </div>
          <h1 className="font-arcade text-xl neon-text-purple">Shayaan's Portfolio</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {links.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="block px-4 py-2 font-arcade text-xs text-white hover:neon-text-blue hover:bg-card pixel-corners transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden neon-border neon-border-blue pixel-corners p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 neon-text-blue" />
          ) : (
            <Menu className="w-6 h-6 neon-text-blue" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background bg-opacity-95 backdrop-blur-md border-b border-primary">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="block px-4 py-3 font-arcade text-xs text-white hover:neon-text-blue hover:bg-card pixel-corners transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
