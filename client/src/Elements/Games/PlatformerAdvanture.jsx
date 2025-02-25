import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const GRAVITY = 1;
const JUMP_FORCE = -15;
const SPEED = 5;
const SCREEN_CENTER = 250; // Keeps player at the center

const PlatformerAdventure = ({ isOpen, onClose }) => {
  const [player, setPlayer] = useState({ x: 50, y: 250, vy: 0, onGround: false });
  const [keys, setKeys] = useState({ left: false, right: false, jump: false });
  const [cameraX, setCameraX] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [platforms, setPlatforms] = useState([
    { x: 0, y: 350, width: 400, height: 20 },
    { x: 450, y: 320, width: 400, height: 20 },
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setKeys((prev) => ({ ...prev, left: true }));
      if (e.key === "ArrowRight") setKeys((prev) => ({ ...prev, right: true }));
      if (e.key === "ArrowUp") setKeys((prev) => ({ ...prev, jump: true }));
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") setKeys((prev) => ({ ...prev, left: false }));
      if (e.key === "ArrowRight") setKeys((prev) => ({ ...prev, right: false }));
      if (e.key === "ArrowUp") setKeys((prev) => ({ ...prev, jump: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setPlayer((prev) => {
        let newX = prev.x;
        let newY = prev.y + prev.vy;
        let newVy = prev.vy + GRAVITY;
        let onGround = false;

        if (keys.left) newX -= SPEED;
        if (keys.right) newX += SPEED;

        if (newX > SCREEN_CENTER) {
          setCameraX((prevCam) => prevCam + SPEED);
          newX = SCREEN_CENTER;
        }

        for (let platform of platforms) {
          if (
            newY + 50 >= platform.y &&
            prev.y + 50 <= platform.y &&
            newX + 50 > platform.x - cameraX &&
            newX < platform.x + platform.width - cameraX
          ) {
            newY = platform.y - 50;
            newVy = 0;
            onGround = true;
          }
        }

        if (keys.jump && onGround) newVy = JUMP_FORCE;

        if (newY > 400) {
          setGameOver(true);
          return prev;
        }

        return { x: newX, y: newY, vy: newVy, onGround };
      });

      if (keys.right) {
        setScore((prev) => prev + 1);
      }

      setPlatforms((prev) => {
        if (prev[prev.length - 1].x - cameraX < 500) {
          const randomY = 200 + Math.random() * 200; // More randomness in height
          const randomWidth = 250 + Math.random() * 250; // More variation in width
          return [
            ...prev,
            { x: prev[prev.length - 1].x + 350 + Math.random() * 150, y: randomY, width: randomWidth, height: 20 },
          ];
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [keys, cameraX, gameOver]);

  const restartGame = () => {
    setPlayer({ x: 50, y: 250, vy: 0, onGround: false });
    setCameraX(0);
    setScore(0);
    setGameOver(false);
    setPlatforms([
      { x: 0, y: 350, width: 400, height: 20 },
      { x: 450, y: 320, width: 400, height: 20 },
    ]);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className="game-modal" 
      overlayClassName="game-overlay blur-background"
      style={{
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'transparent',
          overflow: 'hidden',
        }
      }}
    >
      <div className="game-container">
        <div className="score-display">Score: {score}</div>
        {gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <button onClick={restartGame}>Restart</button>
          </div>
        )}
        
        <motion.div
          className="player"
          animate={{ x: player.x, y: player.y }}
          transition={{ type: "tween", ease: "linear", duration: 0.03 }}
        />
        
        {platforms.map((p, index) => (
          <div key={index} className="platform" style={{ left: p.x - cameraX, top: p.y, width: p.width, height: p.height }} />
        ))}

        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default PlatformerAdventure;
