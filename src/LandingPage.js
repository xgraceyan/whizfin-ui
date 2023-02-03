import React from "react";
import Navbar from "./components/Navbar";

import { FaUser, FaCheckCircle, FaWalking, FaUserTie } from "react-icons/fa";
import Footer from "./components/Footer";
import SignUpCard from "./components/SignUpCard";

function LandingPage() {
  return (
    <div id="landing-page">
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
      <div className="bg-white pb-4">
        <div className="container mx-auto mt-16 mb-10 lg:px-10 px-6">
          <h1
            className="text-center text-primary text-4xl lg:text-5xl"
            data-aos="fade-up"
          >
            Why Join Us?
          </h1>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
            data-aos="fade-up"
          >
            <div className="lg:py-12 md:py-10 mx-auto text-center">
              <div class="max-w-sm p-6 py-10 ">
                <FaWalking className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 class="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Self-Paced Program
                </h5>
                <p class="font-normal text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium necessitatibus obcaecati distinctio perferendis
                  illum aperiam atque animi deserunt rem corporis.
                </p>
              </div>
            </div>

            <div className="lg:py-12 md:py-10 py-8 mx-auto text-center">
              <div className="max-w-sm p-6 py-10">
                <FaCheckCircle className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Simple Online Enrollment
                </h5>
                <p className="font-normal text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium necessitatibus obcaecati distinctio perferendis
                  illum aperiam atque animi deserunt rem corporis.
                </p>
              </div>
            </div>

            <div className="lg:py-12 md:py-10 py-8 mx-auto text-center">
              <div className="max-w-sm p-6 py-10">
                <FaUserTie className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Professional Mentors
                </h5>
                <p className="font-normal text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium necessitatibus obcaecati distinctio perferendis
                  illum aperiam atque animi deserunt rem corporis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SignUpCard />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
