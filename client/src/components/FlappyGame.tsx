import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NeonText from './NeonText';
import { Button } from '@/components/ui/button';

// Game constants
const GRAVITY = 0.25;
const JUMP_FORCE = -5;
const PIPE_SPEED = 1.5;
const PIPE_WIDTH = 60;
const PIPE_GAP = 180;
const PIPE_SPAWN_RATE = 3000; // ms
const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;

interface Bird {
  y: number;
  velocity: number;
  width: number;
  height: number;
}

interface Pipe {
  id: number;
  x: number;
  topHeight: number;
  passed: boolean;
}

export default function FlappyGame() {
  const gameRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const lastPipeSpawnRef = useRef<number>(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bird, setBird] = useState<Bird>({
    y: GAME_HEIGHT / 2 - 15,
    velocity: 0,
    width: 30,
    height: 30
  });
  
  // Add a smaller collision area for the bird to make the game more forgiving
  const getBirdCollisionArea = (bird: Bird) => {
    // Reduce the collision area by 4 pixels on each side
    return {
      left: GAME_WIDTH / 2 - bird.width / 2 + 4,
      right: GAME_WIDTH / 2 + bird.width / 2 - 4,
      top: bird.y + 4,
      bottom: bird.y + bird.height - 4
    };
  };
  const [pipes, setPipes] = useState<Pipe[]>([]);
  
  // Handle game physics and logic
  const updateGameState = (timestamp: number) => {
    if (!gameStarted) return;
    
    let currentBird = bird;
    
    // Update bird position
    setBird(prevBird => {
      const newY = prevBird.y + prevBird.velocity;
      const newVelocity = prevBird.velocity + GRAVITY;
      
      // Check floor and ceiling collision, with a 5px buffer for the floor
      if (newY <= 0 || newY >= GAME_HEIGHT - prevBird.height + 5) {
        setGameOver(true);
        return prevBird;
      }
      
      const updatedBird = {
        ...prevBird,
        y: newY,
        velocity: newVelocity
      };
      
      currentBird = updatedBird; // Store current bird for collision detection
      return updatedBird;
    });
    
    // Spawn new pipes
    if (timestamp - lastPipeSpawnRef.current > PIPE_SPAWN_RATE) {
      lastPipeSpawnRef.current = timestamp;
      
      // Random pipe opening position but with limited variation to make it more playable
      const minTopHeight = 80; // Minimum top pipe height
      const maxTopHeight = GAME_HEIGHT - PIPE_GAP - 80; // Maximum top pipe height
      const topHeight = Math.floor(Math.random() * (maxTopHeight - minTopHeight)) + minTopHeight;
      
      setPipes(prevPipes => [
        ...prevPipes,
        {
          id: Date.now(),
          x: GAME_WIDTH,
          topHeight,
          passed: false
        }
      ]);
    }
    
    // Update pipes position and check collisions
    setPipes(prevPipes => {
      const updatedPipes = prevPipes
        .map(pipe => {
          // Check if bird passed the pipe (for scoring)
          if (!pipe.passed && pipe.x + PIPE_WIDTH < GAME_WIDTH / 2 - currentBird.width / 2) {
            setScore(s => s + 1);
            return { ...pipe, passed: true };
          }
          
          // Move pipe to the left
          return { ...pipe, x: pipe.x - PIPE_SPEED };
        })
        .filter(pipe => pipe.x + PIPE_WIDTH > 0); // Remove pipes that are off-screen
      
      // Check pipe collisions using the current bird position
      const birdCollision = getBirdCollisionArea(currentBird);
      
      for (const pipe of updatedPipes) {
        const pipeLeft = pipe.x;
        const pipeRight = pipe.x + PIPE_WIDTH;
        
        // If bird is within the horizontal bounds of pipe
        if (birdCollision.right > pipeLeft && birdCollision.left < pipeRight) {
          // Check collision with top pipe
          if (birdCollision.top < pipe.topHeight) {
            setGameOver(true);
            break;
          }
          
          // Check collision with bottom pipe
          if (birdCollision.bottom > pipe.topHeight + PIPE_GAP) {
            setGameOver(true);
            break;
          }
        }
      }
      
      return updatedPipes;
    });
    
    requestRef.current = requestAnimationFrame(updateGameState);
  };
  
  // Start game animation loop
  useEffect(() => {
    if (gameStarted && !gameOver) {
      requestRef.current = requestAnimationFrame(updateGameState);
      return () => cancelAnimationFrame(requestRef.current!);
    }
  }, [gameStarted, gameOver]);
  
  // Handle jump on click/tap
  const handleJump = () => {
    if (gameOver) return;
    
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    setBird(prevBird => ({
      ...prevBird,
      velocity: JUMP_FORCE
    }));
  };
  
  // Restart game
  const restartGame = () => {
    setBird({
      y: GAME_HEIGHT / 2 - 15,
      velocity: 0,
      width: 30,
      height: 30
    });
    setPipes([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
    lastPipeSpawnRef.current = 0;
  };
  
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
            Pixel Flyer Mini-Game
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            Take a break and challenge yourself with this mini-game. Click or tap to make the bird fly through the gaps in the pipes.
          </p>
        </motion.div>
        
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="relative w-full max-w-md bg-black overflow-hidden rounded-md">
            <div className="absolute inset-0 border-2 border-gray-700"></div>
            <div className="absolute inset-0 border border-gray-600 m-1"></div>
            <div 
              ref={gameRef} 
              className="w-full h-full relative cursor-pointer select-none" 
              onClick={handleJump}
              style={{ height: GAME_HEIGHT + 'px' }}
            >
              {/* Game background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-500 z-0" />
              
              {/* Bird */}
              <motion.div
                className="absolute z-10 flex items-center justify-center"
                style={{
                  width: bird.width + 'px',
                  height: bird.height + 'px',
                  left: `calc(50% - ${bird.width / 2}px)`,
                  top: bird.y + 'px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50% 50% 20% 20%',
                  transform: `rotate(${bird.velocity * 3}deg)`,
                  transition: 'transform 0.1s'
                }}
              >
                <div className="absolute w-2 h-2 bg-black rounded-full" style={{ left: '70%', top: '30%' }} />
                <div 
                  className="absolute"
                  style={{
                    width: '8px',
                    height: '10px',
                    backgroundColor: 'orange',
                    right: '-3px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
                  }}
                />
              </motion.div>
              
              {/* Pipes */}
              {pipes.map(pipe => (
                <div key={pipe.id} className="absolute" style={{ left: pipe.x + 'px', top: 0, height: '100%' }}>
                  {/* Top pipe */}
                  <div 
                    className="absolute top-0 bg-gradient-to-r from-green-700 to-green-500" 
                    style={{ width: PIPE_WIDTH + 'px', height: pipe.topHeight + 'px', borderBottom: '4px solid #1c1c1c' }}
                  />
                  {/* Bottom pipe */}
                  <div 
                    className="absolute bg-gradient-to-r from-green-700 to-green-500" 
                    style={{ 
                      width: PIPE_WIDTH + 'px', 
                      top: pipe.topHeight + PIPE_GAP + 'px',
                      bottom: 0,
                      borderTop: '4px solid #1c1c1c'
                    }}
                  />
                </div>
              ))}
              
              {/* Game info overlay */}
              {(!gameStarted || gameOver) && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-20 p-6">
                  {!gameStarted ? (
                    <>
                      <NeonText color="pink" tag="h3" className="text-xl font-arcade mb-6">
                        Click to Start
                      </NeonText>
                      <p className="text-gray-300 mb-4 text-center">
                        Click or tap to make the bird fly through the pipes. Each pipe passed equals one point!
                      </p>
                    </>
                  ) : (
                    <>
                      <NeonText color="pink" tag="h3" className="text-xl font-arcade mb-6">
                        Game Over!
                      </NeonText>
                      <p className="text-gray-300 mb-2">Your Score: {score}</p>
                      <Button onClick={restartGame} className="mt-4 font-arcade">
                        Play Again
                      </Button>
                    </>
                  )}
                </div>
              )}
              
              {/* Score */}
              {gameStarted && !gameOver && (
                <div className="absolute top-4 left-4 z-20">
                  <NeonText color="pink" tag="span" className="text-lg font-arcade">
                    {score}
                  </NeonText>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <NeonText color="cyan" tag="h4" className="text-lg mb-2">How to Play</NeonText>
            <p className="text-gray-300 text-sm mb-2">• Click or tap the game area to make the bird jump</p>
            <p className="text-gray-300 text-sm mb-2">• Navigate through the gaps between pipes</p>
            <p className="text-gray-300 text-sm mb-2">• Each pipe passed gives you one point</p>
            <p className="text-gray-300 text-sm">• Don't hit the pipes or the ground!</p>
          </div>
        </div>
      </div>
    </section>
  );
}