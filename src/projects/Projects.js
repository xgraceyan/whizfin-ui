import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <div id="articles-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1
            className="cursive text-center text-primary text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            projects
          </h1>
        </div>
      </div>

      <div className="content-center p-4 py-10 lg:px-28 md:px-10 px-16">
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10"
          data-aos="fade-up"
        >
          <ProjectCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
