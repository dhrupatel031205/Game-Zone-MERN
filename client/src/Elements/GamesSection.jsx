import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import PlatformerAdventure from "../Elements/Games/PlatformerAdvanture"; // Import Platformer Game
import TowerDefense from "../Elements/Games/TowerDefense"; // Import Tower Defense Game

const games = [
  { 
    id: 1, 
    title: "Platformer Adventure", 
    image: "https://cdn.vectorstock.com/i/500p/69/85/seamless-old-classical-retro-video-game-background-vector-23996985.avif", 
    description: "Side-scrolling platformer like Mario." 
  },
  { id: 2, title: "Tower Defense", image: "https://cdn.vectorstock.com/i/500p/63/68/medieval-guard-stand-at-castle-gates-game-scene-vector-43976368.avif", description: "Strategic tower placement to stop enemies." },
  { id: 3, title: "Dungeon Crawler", image: "https://t4.ftcdn.net/jpg/10/00/35/75/240_F_1000357544_ETIXmPZVNPsGwnvH7H2bupxDUlaVocUZ.jpg", description: "Explore procedurally generated dungeons." }
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
    <Container className="p-5" style={{ background: "#000428", color: "#fff", boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)", marginBottom: "50px" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
        style={{ textShadow: "0px 0px 12px rgba(0, 255, 255, 1)", fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Games
      </motion.h2>

      <Row className="mt-4">
        {games.map((game) => (
          <Col key={game.id} md={4} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} onClick={() => openGame(game)}>
              <Card className="game-card text-center" style={{ background: "#111", color: "#00ffff", borderRadius: "15px", boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)", cursor: "pointer" }}>
                <Card.Img variant="top" src={game.image} alt={game.title} style={{ borderRadius: "15px 15px 0 0", height: "200px" }} />
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
            {selectedGame.title === "Platformer Adventure" && (
              <PlatformerAdventure isOpen={true} onClose={closeGame} />
            )}

            {selectedGame.title === "Tower Defense" && (
              <TowerDefense isOpen={true} onClose={closeGame} />
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default GamesSection;