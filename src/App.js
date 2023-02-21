import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamPage from "./TeamPage";
import WhoWeArePage from "./WhoWeArePage";
import Contact from "./Contact";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/our-team" element={<TeamPage />}></Route>
        <Route exact path="/who-we-are" element={<WhoWeArePage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
