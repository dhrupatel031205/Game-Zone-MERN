import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./Pages/Main"; // Landing Page
import AuthPage from "./Pages/Auth";   // Login & Signup
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Contactus from "./Pages/Contactus";
import Faq from "./Pages/Faq";
import Profile from "./Pages/Profile";
import { LogoutPage } from "./Pages/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/games" element={<Games></Games>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/faq" element={<Faq></Faq>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/logout" element={<LogoutPage></LogoutPage>} />
      </Routes>
    </Router>
  );
}

export default App;
