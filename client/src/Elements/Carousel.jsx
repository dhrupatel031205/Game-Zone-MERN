import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

const slides = [
  {
    image: "https://media.istockphoto.com/id/2176615569/photo/interior-of-a-gamer-room-lit-with-neon-lights.jpg?s=2048x2048&w=is&k=20&c=hauGNcFJslM8MrExo6z90jcN6-m_VAP65liXorCxVLY=",
    title: "Welcome to Gaming Zone",
    text: "The ultimate battleground for gamers!",
  },
  {
    image: "https://media.istockphoto.com/id/1616658763/photo/room-with-computer-monitor-gaming-pc-video-camera-and-headphones-with-empty-chair.jpg?s=612x612&w=0&k=20&c=VEUjDDmvt9eivcba8JVnS1yPfk1VsTJcvCu0TMB-9Jk=",
    title: "Play & Compete",
    text: "Join tournaments and become a legend.",
  },
  {
    image: "https://media.istockphoto.com/id/1412888417/photo/esports-championship-arena.jpg?s=612x612&w=0&k=20&c=nzrZFu0t1OgjPooYWGzA19mWS35dAE6gropFD0rG5fY=",
    title: "Experience Next-Gen Gaming",
    text: "Immerse yourself in futuristic gaming adventures.",
  },
];

const GamingCarousel = () => {
  return (
    <Carousel fade interval={3000} className="gaming-carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <motion.img
            src={slide.image}
            className="d-block w-100 carousel-image"
            alt={`Slide ${index + 1}`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <Carousel.Caption>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="carousel-title"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="carousel-text"
            >
              {slide.text}
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default GamingCarousel;
