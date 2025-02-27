import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./css/TowerDefense.css"

const TOWER_COST = 50;
const ENEMY_SPEED = 2;
const ENEMY_SPAWN_INTERVAL = 2000;
const BULLET_SPEED = 5;
const TOWER_RANGE = 150;

const TowerDefense = ({ isOpen, onClose }) => {
  const [money, setMoney] = useState(200);
  const [towers, setTowers] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);
  const gameAreaRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const enemyInterval = setInterval(() => {
      setEnemies((prev) => [...prev, { x: 0, y: Math.random() * 300, health: 3 }]);
    }, ENEMY_SPAWN_INTERVAL);

    return () => clearInterval(enemyInterval);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const gameLoop = setInterval(() => {
      setEnemies((prev) =>
        prev.map((enemy) => ({ ...enemy, x: enemy.x + ENEMY_SPEED }))
      );

      setBullets((prev) =>
        prev.map((bullet) => ({ ...bullet, x: bullet.x + BULLET_SPEED }))
      );
    }, 50);

    return () => clearInterval(gameLoop);
  }, [isOpen]);

  // Tower Shooting Logic
  useEffect(() => {
    if (!isOpen) return;

    const shootingInterval = setInterval(() => {
      setBullets((prevBullets) => {
        const newBullets = [];

        towers.forEach((tower) => {
          const target = enemies.find(
            (enemy) =>
              Math.hypot(enemy.x - tower.x, enemy.y - tower.y) < TOWER_RANGE
          );

          if (target) {
            newBullets.push({ x: tower.x, y: tower.y, targetX: target.x, targetY: target.y });
          }
        });

        return [...prevBullets, ...newBullets];
      });
    }, 1000); // Towers shoot every second

    return () => clearInterval(shootingInterval);
  }, [isOpen, towers, enemies]);

  const placeTower = (e) => {
    if (money < TOWER_COST) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    setTowers([...towers, { x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setMoney(money - TOWER_COST);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="game-modal" overlayClassName="game-overlay">
      <div className="game-container" ref={gameAreaRef} onClick={placeTower}>
        <div className="hud">Money: ${money}</div>
        {towers.map((tower, index) => (
          <div key={index} className="tower" style={{ left: tower.x, top: tower.y }} />
        ))}
        {enemies.map((enemy, index) => (
          <div key={index} className="enemy" style={{ left: enemy.x, top: enemy.y }} />
        ))}
        {bullets.map((bullet, index) => (
          <div key={index} className="bullet" style={{ left: bullet.x, top: bullet.y }} />
        ))}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default TowerDefense;
