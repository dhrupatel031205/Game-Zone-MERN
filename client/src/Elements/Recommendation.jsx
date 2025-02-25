import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const games = [
  {
    title: "Cyber Quest",
    image:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Neon Racers",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Shadow Strike",
    image:
      "https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Recommendations = () => {
  return (
    <Container
      fluid
      className="p-2 text-center gaming-background"
    >
      <motion.h2
        className="text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "0px 0px 12px rgba(0, 255, 255, 1)",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Recommended Games
      </motion.h2>
      <Row className="justify-content-center">
        {games.map((game, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: "15px",
                  background: "rgba(0, 0, 0, 0.8)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
                  height :"400px"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card.Img
                    src={game.image}
                    alt={game.title}
                    style={{
                      borderRadius: "15px 15px 0 0",
                      boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.5)",
                      height : "350px"
                    }}
                  />
                </motion.div>
                <Card.Body>
                  <Card.Title
                    className="fw-bold text-center"
                    style={{
                      color: "#00ffff",
                      textShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {game.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recommendations;
