import React from "react";
// import { Navbar } from 'react-bootstrap'
import Navbar from "../Elements/Navbar";
import  Carousel  from "../Elements/Carousel";

export default function Home() {
  return (
    <>
      <div className="gaming-background">
        <Navbar></Navbar>
        <Carousel></Carousel>
      </div>
    </>
  );
}
