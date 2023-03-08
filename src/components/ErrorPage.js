import React from "react";
import Navbar from "./Navbar";

function ErrorPage() {
  return (
    <div id="error-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1 className="cursive text-center text-primary text-7xl lg:text-8xl">
            404
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
