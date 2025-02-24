import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="gaming-background min-vh-100 d-flex flex-column align-items-center justify-content-center text-center"
      
    >
      <motion.h1
        className="display-4 fw-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: "#00ffff",
          textShadow: "2px 2px 8px rgba(0, 255, 255, 0.8)",
        }}
      >
        Thank You for Visiting!
      </motion.h1>
      <motion.p
        className="text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        We hope you had an amazing time. See you again soon!
      </motion.p>
      <motion.a
        href="/"
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
        Home Page
      </motion.a>
    </Container>
  );
};

export { LogoutPage };
