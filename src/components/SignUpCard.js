import React from "react";
import { FaAngleRight } from "react-icons/fa";

function SignUpCard() {
  return (
    <div className="w-full p-4 py-8 my-4 text-center bg-white border border-gray-200 rounded-lg">
      <div data-aos="fade-up">
        <h5 className="mb-2 text-3xl font-bold text-primary">
          Sign up to become a member now!
        </h5>
        <p className="mb-10 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date with WhizFin news and join our email list!
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary hover:underline text-lg"
          >
            Learn more &nbsp;
            <FaAngleRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
