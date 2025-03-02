import React, { useState, useEffect } from "react";
import "./FlappyBird.css";

const FlappyBird = () => {
  const [birdY, setBirdY] = useState(200);
  const [gravity, setGravity] = useState(2);
  const [pipes, setPipes] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleJump = (e) => {
      if (e.code === "Space" && !isGameOver) {
        setBirdY((prevY) => Math.max(prevY - 40, 0));
      }
    };
    document.addEventListener("keydown", handleJump);
    return () => document.removeEventListener("keydown", handleJump);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;
    const gameInterval = setInterval(() => {
      setBirdY((prevY) => Math.min(prevY + gravity, 400));
    }, 30);
    return () => clearInterval(gameInterval);
  }, [gravity, isGameOver]);

  useEffect(() => {
    if (isGameOver) return;
    const pipeInterval = setInterval(() => {
      setPipes((prevPipes) => {
        const gap = 120; // Space between pipes
        const topPipeHeight = Math.floor(Math.random() * 150) + 50;
        const bottomPipeHeight = 400 - (topPipeHeight + gap);
        return [
          ...prevPipes,
          { x: 350, topHeight: topPipeHeight, bottomHeight: bottomPipeHeight },
        ];
      });
    }, 2000);
    return () => clearInterval(pipeInterval);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;
    const movePipesInterval = setInterval(() => {
      setPipes((prevPipes) =>
        prevPipes
          .map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
          .filter((pipe) => pipe.x > -60)
      );
    }, 30);
    return () => clearInterval(movePipesInterval);
  }, [isGameOver]);

  useEffect(() => {
    pipes.forEach((pipe) => {
      if (
        pipe.x < 60 &&
        pipe.x > 10 &&
        (birdY < pipe.topHeight || birdY > 400 - pipe.bottomHeight)
      ) {
        setIsGameOver(true);
      }
      if (pipe.x === 10) setScore((prevScore) => prevScore + 1);
    });
  }, [pipes, birdY]);

  const restartGame = () => {
    setBirdY(200);
    setPipes([]);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className="flappy-bird-container">
      <h2 className="game-title">Flappy Bird</h2>
      <div className="score">Score: {score}</div>
      <div className="game-area">
        <div className="bird" style={{ top: `${birdY}px` }}></div>
        {pipes.map((pipe, index) => (
          <React.Fragment key={index}>
            <div
              className="pipe top-pipe"
              style={{ left: `${pipe.x}px`, height: `${pipe.topHeight}px` }}
            ></div>
            <div
              className="pipe bottom-pipe"
              style={{ left: `${pipe.x}px`, height: `${pipe.bottomHeight}px` }}
            ></div>
          </React.Fragment>
        ))}
      </div>
      {isGameOver && (
        <div className="game-over">
          <p>Game Over! Score: {score}</p>
          <button className="restart-btn" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default FlappyBird;


