import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is GameZone?", answer: "GameZone is a platform where you can find and play various coding-related games." },
  { question: "Is GameZone free to use?", answer: "Yes! GameZone is completely free for all users." },
  { question: "Do I need an account to play games?", answer: "Some games require an account for progress tracking, while others can be played without signing in." },
  { question: "Can I submit my own games?", answer: "Yes, developers can submit their games by contacting us through the support page." },
  { question: "What technologies are used in these games?", answer: "Our games are built using JavaScript, React, Python, and other modern web technologies." },
  { question: "How do I report a bug?", answer: "You can report bugs through our feedback form in the contact section." },
  { question: "Is there a multiplayer option?", answer: "Some games support multiplayer mode using WebSockets and real-time servers." },
  { question: "Can I play on mobile devices?", answer: "Yes, our games are optimized for both desktop and mobile devices." },
  { question: "Do you have leaderboards?", answer: "Yes, competitive games have leaderboards to track high scores." },
  { question: "How often are new games added?", answer: "We add new games regularly based on community feedback and trends." }
];

const FAQSection = () => {
  return (
    <Container className="p-5 mt-5 mb-5" style={{ background: "linear-gradient(135deg, #000428, #004e92)", color: "#fff", borderRadius: "15px", boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.7)" }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
        style={{ textShadow: "0px 0px 15px rgba(0, 255, 255, 1)", fontSize: "2.5rem", fontWeight: "bold" }}
      >
        FAQs
      </motion.h2>
      <Row className="mt-4">
        {faqs.map((faq, index) => (
          <Col key={index} md={6} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card style={{ background: "#111", color: "#ffffff", borderRadius: "15px", boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold", textShadow: "0px 0px 10px rgba(0, 255, 255, 1)" }}>{faq.question}</Card.Title>
                  <Card.Text>{faq.answer}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FAQSection;