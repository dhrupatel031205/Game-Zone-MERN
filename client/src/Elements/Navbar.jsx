import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navItemVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgba(0, 255, 255, 1)",
    transition: { duration: 0.3 },
  },
};

const GamingNavbar = () => {
  const location = useLocation(); // Get current URL path

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar expand="lg" className="px-3 gaming-navbar">
        {/* Left Side: Logo */}
        <Navbar.Brand href="/home" className="text-white fw-bold d-flex align-items-center">
          <motion.img src={logo} alt="Logo" width="120" height="100" className="me-2 rounded-circle" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          {/* Center: Navigation Links */}
          <Nav className="text-center">
            {[
              { name: "Home", link: "/home" },
              { name: "Games", link: "/games" },
              { name: "Contact Us", link: "/contactus" },
              { name: "FAQ", link: "/faq" },
              { name: "Profile", link: "/profile" },
            ].map((item, index) => (
              <motion.div key={index} variants={navItemVariants} whileHover="hover">
                <Nav.Link
                  href={item.link}
                  className={`nav-item-custom ${location.pathname === item.link ? "active-link" : ""}`}
                >
                  {item.name}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Right Side: Logout Button */}
        <Nav className="ms-auto">
          <motion.div variants={navItemVariants} whileHover="hover">
            <Nav.Link href="/logout" className="nav-logout">
              Logout
            </Nav.Link>
          </motion.div>
        </Nav>
      </Navbar>
    </motion.nav>
  );
};

export default GamingNavbar;
