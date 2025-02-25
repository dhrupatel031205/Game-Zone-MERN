import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Container
      className="py-5 d-flex flex-column align-items-center"
      style={{
        background: "linear-gradient(135deg, #000428, #004e92)",
        color: "#fff",
        marginTop:"50px",
        boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "0px 0px 12px rgba(0, 255, 255, 1)",
          fontSize: "2.5rem",
          fontWeight: "bold",
          
        }}
      >
        Contact Us
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-4 mt-4"
        style={{
          background: "rgba(0, 0, 0, 0.85)",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={{
                background: "#111",
                color: "#00ffff",
                border: "1px solid #00ffff",
                boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.5)",
              }}
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{
                background: "#111",
                color: "#00ffff",
                border: "1px solid #00ffff",
                boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.5)",
              }}
            />
          </Form.Group>

          <Form.Group controlId="message" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              style={{
                background: "#111",
                color: "#00ffff",
                border: "1px solid #00ffff",
                boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.5)",
              }}
            />
          </Form.Group>

          <motion.div
            className="mt-4 text-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              type="submit"
              variant="info"
              className="fw-bold"
              style={{
                background: "#00ffff",
                color: "#000",
                border: "none",
                padding: "12px 25px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              }}
            >
              Submit
            </Button>
          </motion.div>
        </Form>
      </motion.div>
    </Container>
  );
};

export default ContactForm;