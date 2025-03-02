import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GRAVITY = 0.5;
const JUMP_FORCE = -10;
const SPEED = 5;

export default function PlatformGame() {
  const [player, setPlayer] = useState({ x: 50, y: 300, velocityY: 0 });
  const [keys, setKeys] = useState({ left: false, right: false, up: false });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setKeys((keys) => ({ ...keys, left: true }));
      if (e.key === "ArrowRight") setKeys((keys) => ({ ...keys, right: true }));
      if (e.key === "ArrowUp") setKeys((keys) => ({ ...keys, up: true }));
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") setKeys((keys) => ({ ...keys, left: false }));
      if (e.key === "ArrowRight") setKeys((keys) => ({ ...keys, right: false }));
      if (e.key === "ArrowUp") setKeys((keys) => ({ ...keys, up: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setPlayer((prev) => {
        let newY = prev.y + prev.velocityY;
        let velocityY = prev.velocityY + GRAVITY;
        let newX = prev.x;

        if (keys.left) newX -= SPEED;
        if (keys.right) newX += SPEED;
        if (keys.up && prev.y >= 300) velocityY = JUMP_FORCE;

        return { x: newX, y: newY > 300 ? 300 : newY, velocityY };
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [keys]);

  return (
    <div className="relative w-full h-screen bg-blue-200 overflow-hidden">
      <motion.div
        className="absolute w-10 h-10 bg-red-500 rounded"
        animate={{ left: player.x, top: player.y }}
        transition={{ ease: "linear", duration: 0.03 }}
      />
      <div className="absolute bottom-0 w-full h-10 bg-green-700"></div>
    </div>
  );
}
