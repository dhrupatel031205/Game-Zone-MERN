import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react"; 

const Auth = ({ type }) => {
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Reset previous errors
  
    if (validateForm()) {
      try {
        const response = await axios.post(`http://localhost:5000/api/${type}`, formData, {
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.data.token) {
          console.log("Token received:", response.data.token); // Debugging step
          localStorage.setItem("token", response.data.token);
          alert(`${type === "login" ? "Logged in" : "Signed up"} successfully!`);
          navigate("/profile");
        } else {
          console.log("No token received from server.");
        }
      } catch (error) {
        console.error("Error:", error.response?.data?.message || error.message);
        setServerError(error.response?.data?.message || "An error occurred. Please try again.");
      }
    }
  };
  
  return (
    <Container fluid className="gaming-background min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
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
          {serverError && <div className="alert alert-danger">{serverError}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <Form onSubmit={handleSubmit}>
            {type === "signup" && (
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="bg-dark border-secondary text-white"
                />
                {errors.username && <div className="text-danger mt-1">{errors.username}</div>}
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-dark border-secondary text-white"
              />
              {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="bg-dark border-secondary text-white"
              />
              {errors.password && <div className="text-danger mt-1">{errors.password}</div>}

              <Button
                variant="link"
                className="position-absolute end-0 top-50 translate-middle-y me-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} color="#fff" /> : <Eye size={20} color="#fff" />}
              </Button>
            </Form.Group>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="fw-bold btn-lg w-100"
              type="submit"
              style={{ background: "#00ffff", color: "#000" }}
            >
              {type === "login" ? "Log In" : "Sign Up"}
            </motion.button>
          </Form>

          <div className="mt-3">
            {type === "login" ? (
              <p className="text-white">
                Don't have an account?{" "}
                <Link to="/signup" className="text-warning fw-bold">Sign up here</Link>
              </p>
            ) : (
              <p className="text-white">
                Already have an account?{" "}
                <Link to="/login" className="text-warning fw-bold">Log in here</Link>
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Auth;
