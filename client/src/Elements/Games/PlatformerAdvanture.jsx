import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import "./css/PlatformerAdvanture.css";

const GRAVITY = 1;
const JUMP_FORCE = -15;
const SPEED = 5;
const CLIMB_SPEED = 4;

const PlatformerAdventure = ({ isOpen, onClose }) => {
  const [player, setPlayer] = useState({ x: 150, y: 350, vy: 0, onGround: true });
  const [keys, setKeys] = useState({ left: false, right: false, jump: false });
  const [cameraY, setCameraY] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [platforms, setPlatforms] = useState([
    { x: 100, y: 350, width: 250, height: 20 },
    { x: 300, y: 250, width: 200, height: 20 },
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
    };

    const handleKeyUp = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
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

        if (keys["ArrowLeft"]) newX -= SPEED;
        if (keys["ArrowRight"]) newX += SPEED;

        for (let platform of platforms) {
          if (
            prev.y + 50 <= platform.y &&
            newY + 50 >= platform.y &&
            newX + 50 > platform.x &&
            newX < platform.x + platform.width
          ) {
            newY = platform.y - 50;
            newVy = 0;
            onGround = true;
          }
        }

        if (keys["ArrowUp"] && onGround) newVy = JUMP_FORCE;

        if (newY > 600) {
          setGameOver(true);
          return { x: 150, y: 350, vy: 0, onGround: true };
        }

        setCameraY(newY < 250 ? newY - 250 : 0);
        return { x: newX, y: newY, vy: newVy, onGround };
      });

      setPlatforms((prev) => {
        if (prev[prev.length - 1].y - cameraY > 100) {
          return [
            ...prev,
            { x: 100 + Math.random() * 300, y: prev[prev.length - 1].y - 150, width: 200, height: 20 },
          ];
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [keys, cameraY, gameOver]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="game-modal" overlayClassName="game-overlay">
      <div className="game-container">
        <div className="score-display">Score: {score}</div>
        {gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <button onClick={() => {
              setGameOver(false);
              setPlayer({ x: 150, y: 350, vy: 0, onGround: true });
              setScore(0);
              setCameraY(0);
              setPlatforms([
                { x: 100, y: 350, width: 250, height: 20 },
                { x: 300, y: 250, width: 200, height: 20 },
              ]);
            }}>Restart</button>
          </div>
        )}
        
        <motion.div className="player" animate={{ x: player.x, y: player.y - cameraY }} transition={{ duration: 0.03 }} />
        
        {platforms.map((p, index) => (
          <div key={index} className="platform" style={{ left: p.x, top: p.y - cameraY, width: p.width, height: p.height }} />
        ))}
      </div>
    </Modal>
  );
};

export default PlatformerAdventure;