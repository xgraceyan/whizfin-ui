import React from "react";
import Navbar from "./components/Navbar";

function LandingPage() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container mx-auto mt-20 mb-10 ">
        <h1 className="text-center cursive text-primary text-8xl lg:text-9xl">
          whizfin
        </h1>
        <p className="text-center text-primary lg:text-3xl text-xl -mt-5">
          501(c)3 educating people on <br></br> personal finance
        </p>
        <div className="lg:py-16 md:py-12 py-10"></div>
        <div className="content-center text-center lg:space-x-8 md:space-x-5 space-x-3">
          <button className="btn-secondary">button 1</button>
          <button className="btn-primary">button 2</button>
        </div>
        <div className="lg:py-16 md:py-12 py-10"></div>
      </div>
    </div>
  );
}

export default LandingPage;
