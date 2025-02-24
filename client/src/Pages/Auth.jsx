import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const AuthPage = ({ type }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (type === "signup" && !formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Enter a valid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${type === "login" ? "Logged in" : "Signed up"} successfully!`);
      navigate("/home");
    }
  };

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
        whileHover={{ scale: 1.1 }}
        style={{
          color: "#0ff",
          textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
        }}
      >
        {type === "login" ? "Log In" : "Sign Up"}
      </motion.h1>

      <Card
        className="text-white p-4 shadow-lg"
        style={{
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 0 15px #0ff",
          background: "linear-gradient(135deg, #00bcd4, #008b8b, #00ffff)",
        }}
      >
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {type === "signup" && (
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="bg-dark border-secondary text-white placeholder-light"
                  style={{ color: "#ffffff" }}
                />
                {errors.username && (
                  <div className="text-danger mt-1">{errors.username}</div>
                )}
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-dark border-secondary text-white placeholder-light"
                style={{ color: "#ffffff" }}
              />
              {errors.email && (
                <div className="text-danger mt-1">{errors.email}</div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="bg-dark border-secondary text-white placeholder-light"
                style={{ color: "#ffffff" }}
              />
              {errors.password && (
                <div className="text-danger mt-1">{errors.password}</div>
              )}
            </Form.Group>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 10px #0ff" }}
              whileTap={{ scale: 0.9 }}
              className="fw-bold btn-lg w-100"
              style={{
                background: "#00ffff",
                color: "#000",
                border: "none",
                padding: "12px 30px",
                fontSize: "1.2rem",
                borderRadius: "10px",
              }}
              type="submit"
            >
              {type === "login" ? "Log In" : "Sign Up"}
            </motion.button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthPage;
