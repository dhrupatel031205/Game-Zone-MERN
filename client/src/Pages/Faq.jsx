import React from "react";
import GamingNavbar from "../Elements/Navbar";
import FAQSection from "../Elements/FAQSection";
import Footer from "../Elements/Footer";

export default function Faq() {
  return (
    <>
      <div className="gaming-background">
        <GamingNavbar></GamingNavbar>
        <FAQSection></FAQSection>
        <Footer/>
      </div>
    </>
  );
}
