import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function TeamPage() {
  return (
    <div id="team-page">
      <div className="bg-secondary">
        <Navbar />
        <div className="container mx-auto mt-16 pb-8">
          <h1
            className="cursive text-center text-primary text-7xl lg:text-8xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            meet the team
          </h1>
        </div>
      </div>
      <div className="lg:py-10 md:py-8 py-6"></div>
      <div className="content-center p-4 px-10 pb-20 lg:space-x-8 md:space-x-5 space-x-3">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center items-stretch"
          data-aos="fade-up"
        >
          <div className="mx-auto rounded-lg shadow-lg">
            <div class="max-w-sm">
              <img
                src="team_photos/roshni.jpg"
                alt="Roshni"
                className="object-cover rounded-lg"
              />
              <div className="p-8">
                <h5 class="text-3xl font-bold tracking-tight text-primary">
                  Roshni
                </h5>
                <p className="uppercase text-accent mb-5">Founder, President</p>
                <p class="font-normal text-primary">
                  Hey! I'm Roshni (she/her), the Founder and President of
                  WhizFin! I firmly believe that financial literacy is a crucial
                  aspect of life and that it should be instilled in our
                  community, especially among the youth. It's never too late to
                  start building your future. <br /> <br /> fun fact: I love
                  ketchup but I hate tomatoes :DD
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto rounded-lg shadow-lg">
            <div className="max-w-sm">
              <img
                src="team_photos/arshia.jpg"
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="p-8">
                <h5 class="text-3xl font-bold tracking-tight text-primary">
                  Arshia
                </h5>
                <p className="uppercase text-accent mb-5">
                  Co-Founder, Vice President
                </p>
                <p class="font-normal text-primary">
                  Hi! I'm Arshia (she/her), the Co-founder and Vice President of
                  Whizfin. I think that learning about finance and other life
                  skills is so important especially as a young adult. I hope we
                  can provide resources for the youth to learn about personal
                  finance and help our community grow. <br /> <br /> Fun fact: I
                  love to crochet!
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto rounded-lg shadow-lg">
            <div class="max-w-sm">
              <img
                src="team_photos/haasini.jpg"
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="p-8">
                <h5 class="text-3xl font-bold tracking-tight text-primary">
                  Haasini
                </h5>
                <p className="uppercase text-accent mb-5">Secretary</p>
                <p class="font-normal text-primary">
                  Hi, I'm Sri Haasini Saripella, the secretary of Whizfin. I
                  joined so I could get a better understanding of Finance and to
                  help teach our community the importance of saving money and
                  spending it in better ways. <br /> <br /> fun fact: I have pet
                  chickens!
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg md:mt-8">
            <div class="max-w-sm">
              <img
                src="team_photos/ravi.jpg"
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="p-8">
                <h5 class="text-3xl font-bold tracking-tight text-primary">
                  Ravi
                </h5>
                <p className="uppercase text-accent mb-5"></p>
                <p class="font-normal text-primary"></p>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg md:mt-8">
            <div class="max-w-sm">
              <img
                src="team_photos/grace.jpg"
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="p-8">
                <h5 class="text-3xl font-bold tracking-tight text-primary">
                  Grace
                </h5>
                <p className="uppercase text-accent mb-5">Website Developer</p>
                <p class="font-normal text-primary">
                  Hi! I'm Grace (she/her) and I'm the developer of WhizFin's
                  website. I joined WhizFin because I believe it's a great way
                  to teach the community about finance, especially to the
                  younger audience who will need this important information as
                  they progress through life. <br /> <br /> Fun fact: I play the
                  flute!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;
