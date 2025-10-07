import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import { Button } from "@/components/ui/button";

interface GameObject {
  id: number;
  x: number;
  y: number;
  type: 'target' | 'obstacle';
  captured?: boolean;
}

export default function MiniGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameObjects, setGameObjects] = useState<GameObject[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [highScore, setHighScore] = useState(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gameIntervalRef = useRef<number | null>(null);
  
  // Initialize the game
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    generateGameObjects();
    
    // Start the game timer
    gameIntervalRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          endGame();
          return 0;
        }
        return prevTime - 1;
      });
      
      // Occasionally generate new objects
      if (Math.random() > 0.7) {
        generateGameObjects(1); // Add one new object
      }
    }, 1000);
  };
  
  // End the game
  const endGame = () => {
    setIsPlaying(false);
    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
      gameIntervalRef.current = null;
    }
    
    // Update high score if needed
    if (score > highScore) {
      setHighScore(score);
    }
  };
  
  // Generate game objects
  const generateGameObjects = (count = 5) => {
    if (!gameAreaRef.current) return;
    
    const newObjects: GameObject[] = [];
    const { width, height } = gameAreaRef.current.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.3 ? 'target' : 'obstacle';
      newObjects.push({
        id: Date.now() + i,
        x: Math.random() * (width - 40),
        y: Math.random() * (height - 40),
        type
      });
    }
    
    setGameObjects(prev => [...prev, ...newObjects]);
  };
  
  // Track cursor position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gameAreaRef.current || !isPlaying) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  // Handle clicking on objects
  const handleObjectClick = (id: number, type: 'target' | 'obstacle') => {
    if (!isPlaying) return;
    
    if (type === 'target') {
      // Increase score for targets
      setScore(prev => prev + 10);
      setGameObjects(prev => 
        prev.map(obj => 
          obj.id === id ? { ...obj, captured: true } : obj
        )
      );
      
      // Remove captured objects after a short delay
      setTimeout(() => {
        setGameObjects(prev => prev.filter(obj => obj.id !== id));
      }, 300);
    } else {
      // Decrease score and time for obstacles
      setScore(prev => Math.max(0, prev - 5));
      setTimeLeft(prev => Math.max(0, prev - 2));
      
      // Remove the obstacle
      setGameObjects(prev => prev.filter(obj => obj.id !== id));
    }
  };
  
  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
    };
  }, []);
  
  return (
    <section id="mini-game" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <NeonText color="cyan" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Mini-Game: Pixel Hunt
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            Test your reflexes! Click on the pixel targets and avoid the obstacles. You have 30 seconds.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <NeonBorder color="purple">
            <PixelCorners className="bg-card p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6">
                  <div>
                    <span className="text-gray-400 text-sm">Score:</span>
                    <NeonText color="pink" tag="span" className="ml-2 font-arcade">
                      {score}
                    </NeonText>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Time:</span>
                    <NeonText 
                      color={timeLeft < 10 ? "pink" : "blue"} 
                      tag="span" 
                      className="ml-2 font-arcade"
                      pulse={timeLeft < 10}
                    >
                      {timeLeft}s
                    </NeonText>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">High Score:</span>
                  <NeonText color="purple" tag="span" className="ml-2 font-arcade">
                    {highScore}
                  </NeonText>
                </div>
              </div>
              
              <div 
                ref={gameAreaRef}
                className="w-full h-80 bg-background border border-primary rounded-md relative overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                {isPlaying ? (
                  <>
                    {/* Game objects */}
                    {gameObjects.map(obj => (
                      <motion.div
                        key={obj.id}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: obj.captured ? 1.5 : 1,
                          opacity: obj.captured ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className={`absolute cursor-pointer ${
                          obj.type === 'target' 
                            ? 'bg-cyan-500 neon-border neon-border-cyan' 
                            : 'bg-pink-500 neon-border neon-border-pink'
                        }`}
                        style={{ 
                          width: obj.type === 'target' ? '20px' : '25px',
                          height: obj.type === 'target' ? '20px' : '25px',
                          left: `${obj.x}px`, 
                          top: `${obj.y}px`,
                          borderRadius: obj.type === 'target' ? '0' : '50%'
                        }}
                        onClick={() => handleObjectClick(obj.id, obj.type)}
                      />
                    ))}
                    
                    {/* Player cursor */}
                    <motion.div
                      className="absolute pointer-events-none w-6 h-6 neon-border neon-border-cyan"
                      style={{
                        left: `${cursorPosition.x - 12}px`,
                        top: `${cursorPosition.y - 12}px`,
                        border: '2px solid',
                        transform: 'rotate(45deg)'
                      }}
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <NeonText color="cyan" tag="h3" className="text-xl font-arcade mb-4">
                      {score > 0 ? `Game Over! Score: ${score}` : 'Ready to Play?'}
                    </NeonText>
                    <Button 
                      onClick={startGame}
                      className="font-arcade bg-background hover:bg-card neon-border neon-border-cyan hover:neon-text-cyan transition-all pixel-corners"
                    >
                      {score > 0 ? 'Play Again' : 'Start Game'}
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>Instructions:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Click square pixels to earn 10 points</li>
                  <li>Avoid circular obstacles (-5 points, -2 seconds)</li>
                  <li>Try to get the highest score before time runs out!</li>
                </ul>
              </div>
            </PixelCorners>
          </NeonBorder>
        </div>
      </div>
    </section>
  );
}