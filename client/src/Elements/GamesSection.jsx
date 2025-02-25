import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const games = [
  { id: 1, title: "Platformer Adventure", image: "https://cdn.vectorstock.com/i/500p/69/85/seamless-old-classical-retro-video-game-background-vector-23996985.avif", description: "Side-scrolling platformer like Mario." },
  { id: 2, title: "Tower Defense", image: "https://cdn.vectorstock.com/i/500p/63/68/medieval-guard-stand-at-castle-gates-game-scene-vector-43976368.avif", description: "Strategic tower placement to stop enemies." },
  { id: 3, title: "Dungeon Crawler", image: "https://t4.ftcdn.net/jpg/10/00/35/75/240_F_1000357544_ETIXmPZVNPsGwnvH7H2bupxDUlaVocUZ.jpg", description: "Explore procedurally generated dungeons." },
  { id: 4, title: "Multiplayer Tic-Tac-Toe", image: "https://t3.ftcdn.net/jpg/11/97/97/46/240_F_1197974685_caqF5XWgZHm1UDSGlIm0xjBI3U7K0xx7.jpg", description: "Play Tic-Tac-Toe with friends online." },
  { id: 5, title: "Battleship AI", image: "https://t4.ftcdn.net/jpg/06/94/89/63/240_F_694896307_misDD4KTySSE994NxBb63wSX0o9PgzD9.jpg", description: "Classic Battleship with AI opponent." },
  { id: 6, title: "Memory Card Match", image: "https://t4.ftcdn.net/jpg/09/97/85/47/240_F_997854738_V7R58l3IloG2kxVaQpAQNjtZIsejVJDv.jpg", description: "Find matching card pairs in a fun challenge." },
  { id: 7, title: "Typing Speed Test", image: "https://t3.ftcdn.net/jpg/09/68/39/14/240_F_968391480_RTh1jcDRJEEGc34OYrUo1KNmReuF1tz0.jpg", description: "Measure typing speed and accuracy." },
  { id: 8, title: "Snake AI", image: "https://t3.ftcdn.net/jpg/10/93/26/80/240_F_1093268015_8lG8YvOYOgn0c6yuyB6BOW68ZpMSdkat.jpg", description: "An AI-powered Snake game challenge." },
  { id: 9, title: "Escape Room Puzzle", image: "https://t3.ftcdn.net/jpg/09/70/10/74/240_F_970107462_C8c0l1hLrJMdNFSoMYOAnXLQDY9HeDAo.jpg", description: "Solve puzzles to escape the room!" },
];

const GamesSection = () => {
  return (
    <Container className="p-5" style={{ background: "#000428", color: "#fff",boxShadow:"0px 0px 20px rgba(0, 255, 255, 0.8)",marginBottom :"50px" }}>
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
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="game-card text-center" style={{ background: "#111", color: "#00ffff", borderRadius: "15px", boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.7)" }}>
                <Card.Img variant="top" src={game.image} alt={game.title} style={{ borderRadius: "15px 15px 0 0", height:"200px" }} />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>{game.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesSection;
