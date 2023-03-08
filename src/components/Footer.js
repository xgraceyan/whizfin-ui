import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Footer() {
  return (
    <footer className="px-8 pb-2 p-4 bg-primary sm:p-6 grid self-end">
      <div className="mx-12 my-2">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <h1 className="text-center cursive text-white text-5xl lg:text-7xl">
                whizfin
              </h1>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              WhizFin
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <span className="text-gray-200">Follow Us!</span>
            <a
              href="https://www.instagram.com/whizfin/"
              target="_blank"
              className="text-gray-200 hover:text-gray-300 ease-in-out my-auto"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-gray-300 ease-in-out my-auto"
            >
              <FaFacebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://linktr.ee/whizfin"
              target="_blank"
              className="text-gray-200 hover:text-gray-300 ease-in-out my-auto"
            >
              <SiLinktree />
              <span className="sr-only">LinkTree</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
