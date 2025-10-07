import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GameElement {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  type: 'unity' | 'unreal' | 'godot' | 'csharp' | 'cpp' | 'blender' | 'gamepad' | 'playstation' | 'xbox' | 'nintendo';
  speed: number;
}

export default function GameElements() {
  const [elements, setElements] = useState<GameElement[]>([]);
  
  useEffect(() => {
    // Define game dev tools/technologies
    const types = ['unity', 'unreal', 'godot', 'csharp', 'cpp', 'blender', 'gamepad', 'playstation', 'xbox', 'nintendo'];
    
    const newElements: GameElement[] = [];
    
    // Generate elements for each type (ensuring at least one of each)
    types.forEach((type, index) => {
      newElements.push({
        id: index,
        x: Math.random() * 100, // Random x position (percentage)
        y: Math.random() * 100, // Random y position (percentage)
        rotation: Math.random() * 10 - 5, // Very small random rotation (-5 to 5 degrees)
        size: 40 + Math.random() * 30, // Size between 40px and 70px
        type: type as GameElement['type'],
        speed: 10 + Math.random() * 20 // Slower animation speed (10-30)
      });
    });
    
    // Add fewer random elements for better performance
    for (let i = types.length; i < types.length + 2; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 10 - 5,
        size: 40 + Math.random() * 30,
        type: types[Math.floor(Math.random() * types.length)] as GameElement['type'],
        speed: 15 + Math.random() * 20 // Slower for performance
      });
    }
    
    setElements(newElements);
  }, []);
  
  const getElementIcon = (type: string) => {
    switch (type) {
      case 'unity':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.9 19.2 15.6 12l4.3-7.2L22 12l-2.1 7.2zm-9.5 2.5h-8l4-6.9 8 .1-4 6.8zm-4-15L15 6.8 11 12l4.3 5.2-8.7.1L2.5 12l3.9-5.3zm11.7 4.2L21.6 4H9.5l-1.4 2.3 6.5.1L12 12l-6.5-.1L7 14.4h12.2l3.9-3.5z" />
          </svg>
        );
      case 'unreal':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m-.531 3.404a8.563 8.563 0 0 1 8.592 8.56c0 4.04-2.802 7.43-6.576 8.33v-2.021c0-.615-.164-1.121-.246-1.293a6.008 6.008 0 0 0 1.007-3.125.575.575 0 0 0-.015-.142v-.009a58.14 58.14 0 0 0-.975-3.839c-.299-1.008-.607-1.963-.873-2.818-.293-.94-.574-1.843-.79-1.978-.355-.528-1.471-.935-2.112-.935h-.043c-.631 0-1.737.408-2.092.935-.216.135-.492 1.037-.79 1.978-.266.855-.584 1.81-.873 2.818-.35 1.206-.737 2.534-.98 3.839a.567.567 0 0 0 0 .15c0 1.11.348 2.214 1 3.136-.082.164-.24.67-.24 1.285v2.02c-3.77-.89-6.572-4.29-6.572-8.33a8.573 8.573 0 0 1 8.588-8.559" />
          </svg>
        );
      case 'godot':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.4 4.4H18.6V18.6H5.4V4.4M4.1 1.2C2.8 1.2 1.8 2.2 1.8 3.5V20.5C1.8 21.8 2.8 22.8 4.1 22.8H19.9C21.2 22.8 22.2 21.8 22.2 20.5V3.5C22.2 2.2 21.2 1.2 19.9 1.2H4.1M9.3 5.7L9.9 7.2C9 7.8 8.2 8.7 7.7 9.5C8 8.7 8.5 7.7 9.3 5.7M14.7 5.7C15.5 7.7 16 8.7 16.3 9.5C15.8 8.6 15 7.8 14.1 7.2L14.7 5.7M9.9 7.4L12 14.2L10.8 17.9C10.8 17.9 10.4 14.8 9.6 14.1C9 13.5 7.6 13.1 7.6 13.1C9.9 12 10.3 9.3 9.9 7.4M14.1 7.4C13.7 9.3 14.1 12 16.4 13.1C16.4 13.1 15 13.5 14.4 14.1C13.6 14.8 13.2 17.9 13.2 17.9L12 14.2L14.1 7.4Z" />
          </svg>
        );
      case 'csharp':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.5 15.97L11.91 18.41C11.65 18.55 11.23 18.68 10.66 18.8C10.1 18.93 9.43 19 8.66 19C6.45 18.96 4.79 18.3 3.68 17.04C2.56 15.77 2 14.16 2 12.21C2.05 9.9 2.72 8.13 4 6.89C5.32 5.64 6.96 5 8.94 5C9.69 5 10.34 5.07 10.88 5.19C11.42 5.31 11.82 5.44 12.08 5.59L11.5 8.08L10.44 7.74C10.04 7.64 9.58 7.59 9.05 7.59C7.89 7.58 6.93 7.95 6.18 8.69C5.42 9.42 5.03 10.54 5 12.03C5 13.39 5.37 14.45 6.08 15.23C6.79 16 7.79 16.4 9.07 16.41L10.4 16.29C10.83 16.21 11.19 16.1 11.5 15.97M13.89 19L14.5 15H13L13.34 13H14.84L15.16 11H13.66L14 9H15.5L16.11 5H18.11L17.5 9H19L19.61 5H21.61L21 9H22.5L22.16 11H20.66L20.34 13H21.84L21.5 15H20L19.39 19H17.39L18 15H16.5L15.89 19H13.89M16.67 13H18.17L18.5 11H17L16.67 13Z" />
          </svg>
        );
      case 'cpp':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 15.97L10.91 18.41C10.65 18.55 10.23 18.68 9.66 18.8C9.1 18.93 8.43 19 7.66 19C5.45 18.96 3.79 18.3 2.68 17.04C1.56 15.77 1 14.16 1 12.21C1.05 9.9 1.72 8.13 3 6.89C4.32 5.64 5.96 5 7.94 5C8.69 5 9.34 5.07 9.88 5.19C10.42 5.31 10.82 5.44 11.08 5.59L10.5 8.08L9.44 7.74C9.04 7.64 8.58 7.59 8.05 7.59C6.89 7.58 5.93 7.95 5.18 8.69C4.42 9.42 4.03 10.54 4 12.03C4 13.39 4.37 14.45 5.08 15.23C5.79 16 6.79 16.4 8.07 16.41L9.4 16.29C9.83 16.21 10.19 16.1 10.5 15.97M11 11V9H13V7H15V9H17V11H15V13H13V11M19 11V9H21V11M19 15V13H21V15" />
          </svg>
        );
      case 'blender':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.51 13.53c.24.15.54.23.9.23.35 0 .65-.08.9-.23.24-.16.37-.37.37-.63 0-.26-.13-.47-.37-.63-.25-.15-.55-.23-.9-.23-.36 0-.66.08-.9.23-.24.16-.36.37-.36.63 0 .26.12.47.36.63m-5.35-3.5l-.74 1.93L8.05 10m1.56-.39L7.9 14.27h7.06l-1.71-4.66M8.66 15.61h11.43c.29 0 .57-.13.76-.38.19-.26.22-.59.1-.88l-2.54-5.85c-.13-.32-.44-.53-.78-.53h-3.76Zm4.69-10.69c-3.43 0-6.36 1.14-7.98 2.98-.2.26-.56.69-.56.69L5.26 8l.16.14c.13.13.27.25.41.37-.23.85-.31 1.77-.31 2.7 0 5.31 5.14 9.04 11.33 9.04 6.18 0 11.3-3.73 11.3-9.04s-5.12-9.04-11.3-9.04c-.97 0-1.91.09-2.82.26.03-.1.05-.19.05-.29 0-.44-.36-.8-.8-.8Z" />
          </svg>
        );
      case 'gamepad':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.97 16c-2.21 0-4-1.79-4-4s1.79-4 4-4h8.06c2.21 0 4 1.79 4 4s-1.79 4-4 4H7.97zm8.06-6H7.97c-1.1 0-2 .9-2 2s.9 2 2 2h8.06c1.1 0 2-.9 2-2s-.9-2-2-2zM11 10h2v4h-2v-4zm-3 2h2v-2H8v2z" />
          </svg>
        );
      case 'playstation':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 7.67V17.51C8.25 17.25 7.22 16.94 6.5 16.61V6.79c.95.21 2.12.42 3.5.55c4.31.41 8.17-.19 8.5-1.34c.33-1.15-2.97-2.43-7.29-2.85c-1.64-.15-3.17-.15-4.4 0C3.56 3.5.61 4.5.09 5.79C.03 5.96 0 6.13 0 6.29C0 8.3 4.47 9.89 9.5 9.89c1.17 0 2.28-.06 3.3-.17v2.63c-.58.06-1.35.09-2.02.1v-2.64c-4.31.35-7.78-.44-7.78-1.92c0-1.02 1.68-1.83 4-2.25V17.5c-.82-.23-1.3-.52-1.3-1c0-1.05 2.19-1.8 3.8-2.13V12.3z" />
          </svg>
        );
      case 'xbox':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.58 17.65C5.15 16.46 4.5 14.08 4.5 12c0-2.05.65-4.41 2.08-5.61.81-.69 1.3-.35 1.3 .11 0 .27-.15 .51-.42 .82-.92 1.1-1.34 3.12-1.34 4.7 0 1.56 .42 3.58 1.34 4.69.27 .29 .42 .54 .42 .81 0 .47-.49 .81-1.3 .13m7.18-.13c0-.27 .15-.52 .41-.81 .93-1.11 1.33-3.13 1.33-4.69 0-1.58-.4-3.59-1.33-4.7-.26-.31-.41-.55-.41-.82 0-.46 .49-.8 1.28-.11C16.46 7.59 17.1 9.95 17.1 12c0 2.08-.65 4.46-2.04 5.65-.79 .68-1.28 .34-1.28-.13m-4-3.52c2.13 0 4.24 1.94 4.24-2c0-3.95-2.11-2-4.24-2s-4.24-1.95-4.24 2c0 3.94 2.11 2 4.24 2m0-10C6.22 4 3 7.8 3 12s3.22 8 6.76 8c2.91 0 3.74-2 4.24-2s1.33 2 4.24 2c3.54 0 6.76-3.8 6.76-8s-3.22-8-6.76-8c-2.91 0-3.74 2-4.24 2s-1.33-2-4.24-2z" />
          </svg>
        );
      case 'nintendo':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.04 20.4H4.67c-.45 0-.87-.27-.87-.71V3.9c0-.44 .42-.7 .87-.7h5.37c6.56 0 9.96 3.07 9.96 8.6 0 5.52-3.4 8.6-9.96 8.6M6.5 10.5H9c.83 0 1.5-.67 1.5-1.5S9.83 7.5 9 7.5H6.5v3m0 1.5v2.5c0 .83 .67 1.5 1.5 1.5h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-1.5v-1.5H6.5z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-gray-500 opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          initial={{ rotate: element.rotation, scale: 0.9 }}
          animate={{ 
            y: [0, -8, 0, 8, 0], 
            rotate: element.rotation,
            scale: [0.95, 1, 0.95]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 120 / element.speed,
            ease: "linear"
          }}
        >
          {getElementIcon(element.type)}
        </motion.div>
      ))}
    </div>
  );
}