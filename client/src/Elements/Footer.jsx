import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGamepad } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center footer-bg"
      style={{
        marginLeft :"50px",
        marginRight :"50px",
        background: "linear-gradient(135deg, #000428, #004e92)",
        boxShadow: "0 0 20px #00ffff",
        color: "#00ffff",
        textShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)",
        borderTop: "5px solid rgba(0, 255, 255, 0.6)",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <h6 className="fw-bold neon-text mb-3 mt-5 text-white">Quick Links</h6>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {[
            { name: "Home", link: "/home" },
            { name: "Games", link: "/games" },
            { name: "Leaderboard", link: "/leaderboard" },
            { name: "Contact Us", link: "/contact" },
            { name: "FAQ", link: "/faq" },
            { name: "Profile", link: "/profile" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="footer-link"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <h5 className="fw-bold neon-text mt-3 text-white">Follow Us</h5>
        <div className="d-flex justify-content-center gap-3">
          {[
            { icon: <FaFacebook />, link: "https://facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaYoutube />, link: "https://youtube.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="social-icon"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <hr style={{ borderTop: "1px solid rgba(0, 255, 255, 0.5)" }} />
        <motion.p className="mb-0 footer-text">
          &copy; 2025 <FaGamepad /> Neon Gaming Zone | All Rights Reserved
        </motion.p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
