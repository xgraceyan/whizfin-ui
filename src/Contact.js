import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BsInstagram } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

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

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="content-center p-4 lg:px-28 md:px-10 px-16 bg-accent text-white text-center">
          <div className="lg:py-10 md:py-8 py-6" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl mb-10">Contact Us</h1>
            <form>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="mb-6">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-bold text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="text-input-primary"
                    placeholder="Name"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-bold text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-input-primary"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm font-bold text-white"
                >
                  Please leave us a message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="text-input-primary"
                  placeholder="Message"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                class=" hover:bg-accent !py-2 btn-primary mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="content-center p-4 lg:px-52 px-20 pb-20 text-primary">
          <div className="lg:py-10 md:py-8 py-6" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl mb-10 text-center">
              Our Socials
            </h1>
            <h1 className="text-2xl font-normal mb-6" id="instagram">
              <span>
                <BsInstagram className="text-4xl inline-block mr-8" />
              </span>
              Instagram -{" "}
              <span className="italic text-accent hover:underline">
                <a href="https://www.instagram.com/whizfin/" target="_blank">
                  @whizfin
                </a>
              </span>
            </h1>
            <h1 className="text-2xl font-normal mb-6" id="linktree">
              <span>
                <SiLinktree className="text-4xl inline-block mr-8" />
              </span>
              LinkTree -{" "}
              <span className="italic text-accent hover:underline">
                <a href="https://linktr.ee/whizfin" target="_blank">
                  @whizfin
                </a>
              </span>
            </h1>
            <h1 className="text-2xl font-normal" id="linktree">
              <span>
                <HiOutlineMail className="text-4xl inline-block mr-8" />
              </span>
              Email -{" "}
              <span className="italic text-accent hover:underline">
                <a href="mailto:contact.whizfin@gmail.com" target="_blank">
                  contact.whizfin@gmail.com
                </a>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
