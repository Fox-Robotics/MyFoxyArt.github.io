import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import img1 from "../images/examples/example (1).jpeg";
import img2 from "../images/examples/example (2).jpeg";
import img3 from "../images/examples/example (3).jpeg";
import img4 from "../images/examples/example (4).jpeg";
import img5 from "../images/examples/example (5).jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const generateImageHandler = (e) => {
    e.preventDefault();

    window.location.href = "/#/foxyimage?q=" + searchText;
  };
  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-fox-pattern">
      <Header />

      <main className="flex flex-col w-full items-center">
        <div className="relative">
          <h1 className="font-bold text-2xl mb-9 square-decoration">
            IMAGE GENERATOR
          </h1>
        </div>
        <section className="flex flex-col-reverse md:flex-row gap-x-10 gap-y-7 items-center justify-start px-2">
          <form className="flex flex-col items-center sm:items-start">
            <p className="font-bold text-xl">INTRODUCE YOUR SEARCH</p>
            <input
              type="text"
              className="border-2 outline-0 w-[30rem] px-3 py-1 my-1 text-xl focus:border-cetys-yellow"
              onChange={textChangeHandler}
            />
            <p>A unique result each time</p>

            <button
              type="submit"
              className="text-xl font-semibold bg-anemia-yellow px-6 py-1 rounded-sm mt-6 transform hover:scale-105"
              onClick={generateImageHandler}
            >
              GENERATE MY FOXY IMAGE
            </button>
          </form>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            className="max-w-xs mt-2 sm:mt-0"
          >
            <div>
              <img src={img1} width={400} layout="fill" />
            </div>
            <div>
              <img src={img2} width={300} layout="fill" />
            </div>
            <div>
              <img src={img3} width={300} layout="fill" />
            </div>
            <div>
              <img src={img4} width={300} layout="fill" />
            </div>
            <div>
              <img src={img5} width={300} layout="fill" />
            </div>
          </Carousel>
        </section>
      </main>

      <Footer />
    </div>
  );
}
