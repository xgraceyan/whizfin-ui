import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamPage from "./TeamPage";
import WhoWeArePage from "./WhoWeArePage";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import Articles from "./articles/Articles";
import Projects from "./projects/Projects";
import SignUp from "./auth/SignUp";
import LogIn from "./auth/LogIn";
import CreateArticle from "./articles/CreateArticle";
import ArticlePage from "./articles/ArticlePage";

function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/our-team" element={<TeamPage />}></Route>
        <Route exact path="/who-we-are" element={<WhoWeArePage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/login" element={<LogIn />}></Route>
        <Route exact path="/create-article" element={<CreateArticle />}></Route>
        <Route exact path="/article/:id" element={<ArticlePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
