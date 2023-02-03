import React from "react";
import Navbar from "./components/Navbar";

function LandingPage() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container mx-auto mt-12 mb-10 ">
        <h1
          className="text-center cursive text-primary text-8xl lg:text-9xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          whizfin
        </h1>
        <p
          className="text-center text-primary lg:text-3xl text-xl -mt-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          501(c)3 educating people on <br></br> personal finance
        </p>
        <div className="lg:py-12 md:py-10 py-8"></div>
        <div
          className="content-center text-center lg:space-x-8 md:space-x-5 space-x-3"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <button className="btn-secondary">button 1</button>
          <button className="btn-primary">button 2</button>
        </div>
        <div className="lg:py-16 md:py-12 py-10"></div>
      </div>
    </div>
  );
}

export default LandingPage;
