import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <Container
      fluid
      className="gaming-background min-vh-100 d-flex flex-column align-items-center justify-content-center text-center"
    >
      <motion.h1
        className="display-3 fw-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
        style={{
          color: "#fff",
          textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
        }}
      >
        Welcome to the Gaming Zone
      </motion.h1>

      <motion.p
        className="lead text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Dive into the ultimate gaming experience! Join now and play with gamers worldwide.
      </motion.p>

      <Card
        className="bg-dark border-0 text-white shadow-lg p-4 w-50"
        style={{ borderRadius: "15px", boxShadow: "0 0 15px #0ff" }}
      >
        <Card.Body className="d-flex flex-row justify-content-center">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px #008b8b" }}
            whileTap={{ scale: 0.9 }}
            className="fw-bold btn btn-md me-3"
            style={{
              background: "#008b8b",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
          >
            Log In
          </motion.a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px #0ff" }}
            whileTap={{ scale: 0.9 }}
            className="fw-bold btn btn-md"
            style={{
              background: "#00ffff",
              color: "#000",
              border: "none",
              padding: "10px 20px",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
          >
            Sign Up
          </motion.a>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main;