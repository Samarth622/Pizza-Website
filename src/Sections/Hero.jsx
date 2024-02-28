import React, { useEffect } from "react";
import banner4 from "../assets/images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 h-[800px] bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${banner4})` }}
    >
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
        Life is a combination <br /> of Pizza & Magic
      </h1>
      <p data-aos="zoom-in" className="text-xl text-white font-lg">
        Pizza is an Italian food that was created in Italy (The Naples area).
        <br /> It is made with different toppings.
      </p>
      <button
        data-aos="flip-up"
        className="bg-orange-500 text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black"
      >
        ORDER NOW
      </button>
    </section>
  );
}

export default Hero;
