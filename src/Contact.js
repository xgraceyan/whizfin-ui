import React from "react";
import Navbar from "./components/Navbar";

function Contact() {
  return (
    <div id="contact-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1
            className="cursive text-center text-primary text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            contact
          </h1>
        </div>
      </div>
      <div className="lg:py-10 md:py-8 py-6"></div>
      <div className="content-center p-4 lg:px-52 px-20 pb-20 text-center">
        <h5 className="text-primary lg:text-5xl text-4xl hover:underline mb-6">
          <a href="https://linktr.ee/whizfin" target="_blank">
            LinkTree
          </a>
        </h5>
        <h5 className="text-primary lg:text-5xl text-4xl hover:underline mb-6">
          <a href="https://instagram.com/whizfin" target="_blank">
            Instagram
          </a>
        </h5>
        <h5 className="text-primary lg:text-5xl text-4xl hover:underline">
          <a href="mailto:contact.whizfin@gmail.com">Email</a>
        </h5>
        <p className="text-accent">contact.whizfin@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
