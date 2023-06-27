import React, { useState } from "react";
import { connect } from "react-redux";
import { redirect, useNavigate } from "react-router";
import { logOut } from "../store/actions/authActions";

function Navbar(props) {
  let [open, setOpen] = useState();
  console.log("navbar loaded");
  return (
    <nav className="bg-transparent" data-aos="fade-down" data-aos-delay="100">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a
                className="cursive block h-8 w-auto lg:hidden text-primary"
                alt="Your Company"
                style={{ fontSize: "2rem" }}
                id="mobile-logo"
                href="/"
              >
                <h1>whizfin</h1>
              </a>
              <a
                className="cursive hidden h-8 w-auto lg:block text-primary"
                alt="Your Company"
                style={{ fontSize: "2rem" }}
                id="logo"
                href="/"
              >
                <h1>whizfin</h1>
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="/"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="/who-we-are"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Who We Are
                </a>

                <a
                  href="/articles"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Articles
                </a>

                <a
                  href="/projects"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Projects
                </a>

                <a
                  href="/database"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Database
                </a>

                <a
                  href="/our-team"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Our Team
                </a>

                <a
                  href="/contact"
                  className="text-accent  hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-medium"
                >
                  Contact
                </a>

                {props.auth.uid ? (
                  <div className="text-accent ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-bold">
                    Hi, {props.profile.firstName}!
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        props.logOut();
                      }}
                      className="text-accent cursor-pointer hover:text-primary ease-in-out duration-200 px-3 py-2 rounded-md lg:text-sm text-xs font-bold"
                    >
                      (Log Out)
                    </a>
                  </div>
                ) : (
                  <div className="text-accent px-3 py-2 rounded-md lg:text-sm text-xs font-bold">
                    <a
                      href="/signup"
                      className="mr-4 hover:text-primary ease-in-out duration-200"
                    >
                      Sign Up
                    </a>

                    <a
                      href="/login"
                      className="hover:text-primary ease-in-out duration-200"
                    >
                      Log In
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        {open ? (
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="/"
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Home
            </a>

            <a
              href="/who-we-are"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Who We Are
            </a>

            <a
              href="/articles"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Articles
            </a>

            <a
              href="/projects"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="/our-team"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Team
            </a>

            <a
              href="/contact"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>

            {props.auth.uid ? (
              <div className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-bold">
                Hi, {props.profile.firstName}!
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    props.logOut();
                  }}
                >
                  (Log Out)
                </a>
              </div>
            ) : (
              <div className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-bold underline">
                <a href="/signup" className="mr-4">
                  Sign Up
                </a>

                <a href="/login">Log In</a>
              </div>
            )}
          </div>
        ) : (
          false
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
