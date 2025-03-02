import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import TicTacToe from "../Elements/Games/TicTacToe.jsx"; // Import Tic Tac Toe Game
import FlappyBird from "../Elements/Games/FlappyBird.jsx"; // Import Flappy Bird Game
// import Game2048 from "../Elements/Games/Game2048"; // Import 2048 Game

const games = [
  {
    id: 1,
    title: "Tic Tac Toe",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1920px-Tic_tac_toe.svg.png",
    description: "Classic X and O strategy game.",
  },
  {
    id: 2,
    title: "Flappy Bird",
    image:
      "https://wallpapers.com/images/high/flappy-bird-background-rniur917946zgmu2.webp",
    description: "Tap to fly and avoid obstacles.",
  },
  {
    id: 3,
    title: "2048",
    image:
      "https://cdn.dribbble.com/userupload/9032216/file/original-35cca59e61020dcd4fc68fff76f5b8a7.png?resize=1024x1024&vertical=center",
    description: "Merge numbers to reach 2048.",
  },
];

const GamesSection = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openGame = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeGame = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  return (
    <Container
      className="p-5"
      style={{
        background: "#000428",
        color: "#fff",
        boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
        marginBottom: "50px",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
        style={{
          textShadow: "0px 0px 12px rgba(0, 255, 255, 1)",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Games
      </motion.h2>

      <Row className="mt-4">
        {games.map((game) => (
          <Col key={game.id} md={4} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openGame(game)}
            >
              <Card
                className="game-card text-center"
                style={{
                  background: "#111",
                  color: "#00ffff",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)",
                  cursor: "pointer",
                }}
              >
                <Card.Img
                  variant="top"
                  src={game.image}
                  alt={game.title}
                  style={{ borderRadius: "15px 15px 0 0", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>{game.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {isModalOpen && selectedGame && (
        <div className="game-modal-overlay">
          <div className="game-modal">
            {selectedGame.title === "Tic Tac Toe" && (
              <TicTacToe isOpen={true} onClose={closeGame} />
            )}

            {selectedGame.title === "Flappy Bird" && (
              <FlappyBird isOpen={true} onClose={closeGame} />
            )}

            {selectedGame.title === "2048" && (
              <Game2048 isOpen={true} onClose={closeGame} />
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default GamesSection;
