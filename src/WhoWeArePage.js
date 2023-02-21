import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function WhoWeArePage() {
  return (
    <div id="who-we-are-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1
            className="cursive text-center text-primary text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            who we are
          </h1>
        </div>
      </div>
      <div className="lg:py-10 md:py-8 py-6"></div>
      <div className="content-center pt-4">
        <section id="who-we-are" className="md:px-28 px-10" data-aos="fade-up">
          <p className="text-lg text-primary">
            Whiz Fin provides accessible resources to educate people in need and
            young adults on personal finance and life skills. We plan on
            achieving this through: <br />
            <br />
            <ul className="list-disc ml-14">
              <li>
                social media, where we upload weekly posts educating our
                audience on crucial concepts
              </li>
              <li>
                webinars, where we invite professionals and reach out to various
                communities/ audiences
              </li>
              <li>
                programs/ activities, where we host fun activities that
                encourage the young to learn more about money skills
              </li>
            </ul>
            <br />
            <span className="ml-10">
              <i>and more!</i>
            </span>{" "}
            <br />
            <br />
            The idea for this organization surfaced during quarantine, where we
            witnessed numerous individuals lose jobs, in turn increasing poverty
            levels exponentially. A big factor that ruined people’s lives was
            the lack of financial resources/ literacy– people weren’t prepared
            for a pandemic that wiped their jobs out. <br />
            <br />
            At WhizFin, we hope to help alleviate the lasting impact COVID had
            on society, especially underdeveloped countries by increasing asset
            building and constructing a cushion that people can fal back on
            during unprecedented times.
          </p>
        </section>
        <div className="lg:py-10 md:py-8 py-6"></div>
        <section id="core-values" className="bg-accent">
          <div className="lg:py-10 md:py-8 py-6"></div>
          <h1
            className="text-center text-white text-4xl lg:text-5xl mb-10"
            data-aos="fade-up"
          >
            Our Core Values
          </h1>
          <div
            className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 gap-4 lg:px-28 px-10 text-white"
            data-aos="fade-up"
          >
            <div>
              <h1 className="text-2xl">Diversity</h1>
              <p>
                No matter what, inclusivity is something we strongly embrace–
                absolutely everyone is welcome on the team!
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Collaboration</h1>
              <p>
                Achieving something isn’t possible without teamwork, and most
                importantly, an open mind! All ideas are welcome and will always
                be heard, and if possible, implemented!
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Knowledge</h1>
              <p>
                Even as highschoolers, we make sure to constantly educate
                ourselves before teaching our findings to the community. So you
                can rest assured that any information coming your way is always
                fact checked!
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Commitment</h1>
              <p>
                As cheesy as it sounds, our team never gives up! We always
                strive to do more and better to the community!
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Passion</h1>
              <p>
                Last, but certainly not least, passion is what drives us to do
                what we do!
              </p>
            </div>
          </div>
          <div className="lg:py-10 md:py-8 py-6"></div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default WhoWeArePage;
