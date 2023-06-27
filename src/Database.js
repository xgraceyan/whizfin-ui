import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Database() {
  return (
    <div id="database-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1
            className="cursive text-center text-primary text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            database
          </h1>
        </div>
      </div>

      <div className="content-center p-4 py-10 lg:px-28 md:px-10 px-16">
        <iframe
          style={{ position: "relative", height: "600px", width: "100%" }}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrnX7Bk3a7zkDZMlHl9YxbuwyptWL5GIIGXOk-gYdnjFbe97QcRK842WzDwgE8c8nq3oewzSBrUNbZ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Database;
