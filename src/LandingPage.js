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
            <button className="btn-secondary">
              <a href="/who-we-are">Learn More</a>
            </button>
            <button className="btn-primary">Join</button>
          </div>
          <div className="lg:py-16 md:py-12 py-10"></div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto mt-16 mb-10 lg:px-10 px-6">
          <h1
            className="text-center text-primary text-4xl lg:text-5xl"
            data-aos="fade-up"
          >
            Why Join Us?
          </h1>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4\"
            data-aos="fade-up"
          >
            <div className="lg:py-12 md:py-10 mx-auto text-center">
              <div class="max-w-sm p-6 py-10 ">
                <FaWalking className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 class="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Self-Paced Course <br /> [COMING SOON]
                </h5>
                <p class="font-normal text-primary">
                  WhizFin plans on curating a finance course that educates the
                  general public crucial money management skills. This course
                  will have multiple units such as the stock market, real estate
                  and more!
                </p>
              </div>
            </div>

            <div className="lg:py-12 md:py-10 py-8 mx-auto text-center">
              <div className="max-w-sm p-6 py-10">
                <FaCheckCircle className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Make an Impact
                </h5>
                <p className="font-normal text-primary">
                  At WhizFin, we constantly strive to reach out to the community
                  and attempt to spread financial literacy. By joining us, you
                  will be combating rising poverty, unemployment and loans.
                </p>
              </div>
            </div>

            <div className="lg:py-12 md:py-10 py-8 mx-auto text-center">
              <div className="max-w-sm p-6 py-10">
                <FaUserTie className="text-center text-6xl mb-5 block mx-auto text-accent" />
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-primary">
                  Become
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

        <div className="content-center py-4 bg-primary">
          <div className="lg:py-10 md:py-8 py-6"></div>
          <h1
            className="text-center text-white text-4xl lg:text-5xl mb-10"
            data-aos="fade-up"
          >
            Our Academics
          </h1>
          <div className="lg:py-6 md:py-4 py-2"></div>
          <div
            className="grid grid-cols-1 lg:gap-10 gap-4 lg:px-28 md:px-20 px-10 text-white text-center items-center"
            data-aos="fade-up"
          >
            <div className="border border-white py-4 lg:mx-96 md:mx-30 mx-20">
              <h1 className="text-2xl mb-4">Coming Soon!</h1>
              <button className="btn-accent py-2 lg:px-10 px-8">Join</button>
            </div>
          </div>
          <div className="lg:py-10 md:py-8 py-6"></div>
        </div>
        <div className="lg:py-6 md:py-4 py-2"></div>
        <SignUpCard />
        <div className="lg:py-6 md:py-4 py-2"></div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
