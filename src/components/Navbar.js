import React, { useState } from "react";

function Navbar() {
  let [open, setOpen] = useState();
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
              <h1
                className="cursive block h-8 w-auto lg:hidden text-primary"
                alt="Your Company"
                style={{ fontSize: "2rem" }}
              >
                whizfin
              </h1>
              <h1
                className="cursive hidden h-8 w-auto lg:block text-primary"
                alt="Your Company"
                style={{ fontSize: "2rem" }}
              >
                whizfin
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="text-primary px-3 py-2 rounded-md text-sm font-medium font-bold"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-accent  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Who We Are
                </a>

                <a
                  href="#"
                  className="text-accent  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Resources
                </a>

                <a
                  href="#"
                  className="text-accent  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Team
                </a>

                <a
                  href="#"
                  className="text-accent  hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
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
              href="#"
              className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Home
            </a>

            <a
              href="#"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Who We Are
            </a>

            <a
              href="#"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </a>

            <a
              href="#"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Team
            </a>

            <a
              href="#"
              className="text-primary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        ) : (
          false
        )}
      </div>
    </nav>
  );
}

export default Navbar;
