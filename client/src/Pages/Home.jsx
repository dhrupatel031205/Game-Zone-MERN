import React from "react";
import Navbar from "../Elements/Navbar";
import Carousel from "../Elements/Carousel";
import Footer from "../Elements/Footer";

export default function Home() {
  return (
    <>
      <div className="gaming-background">
        <Navbar />
        <Carousel />
        <Footer />  
      </div>
    </>
  );
}
