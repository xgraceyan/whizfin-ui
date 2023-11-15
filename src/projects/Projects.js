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
          className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-10"
          data-aos="fade-up"
        >
          <div className="md:col-span-3">
            <ProjectCard
              image={"project_photos/webinar_1.jpg"}
              id={1}
              title="Financial Literacy Webinar"
              date="20 JULY 2023"
              text="WhizFin partnered up with VT Seva Bay Area to host a financial literacy webinar featuring Richa Basarkar, a finance and data science major at UIUC! In this webinar, we covered financial skills and how to manage funds in college."
            />
          </div>
          <div className="md:col-span-2">
            <ProjectCard
              image={"project_photos/bake_sale.jpg"}
              id={2}
              title="Bake Sale!"
              date="23 JULY 2023"
              text="WhizFin held a bake sale raising nearly $300 to fund a scholarship for Evergreen Valley College! We sold cupcakes, loaves, brownies, and more!"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
