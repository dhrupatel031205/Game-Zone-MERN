import React from "react";
import Navbar from "../Elements/Navbar";
import Carousel from "../Elements/Carousel";
import Recommendations from "../Elements/Recommendation"; // Ensure the correct import path
import Footer from "../Elements/Footer";

export default function Home() {
  return (
    <>
      <div className="gaming-background">
        <Navbar />
        <Carousel />
        {/* <Recommendations /> */}
        <Footer />  
      </div>
    </>
  );
}
