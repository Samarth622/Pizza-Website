import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "flowbite-react";

function Faq() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="faq"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-14`}
    >
      <div
        id="left"
        className="flex flex-col justify-center items-center gap-12"
      >
        <h1
          className="text-6xl text-black font-bold text-center dark:text-white"
          data-aos="zoom-in"
        >
          Frequently Asked Questions
        </h1>
        <div data-aos="slide-up" className="w-full">
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">How is ‘A Pizza prepared?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                ‘A Pizza is prepared in our laboratory in Naples using ingredients found in the territory and following the traditional recipe created in 1889 by Pizza maker Raffaele Esposito. The pizzas are cooked in a wood burning oven and as soon as they come out they undergo a process of flash freezing that in just a few minutes takes them from a temperature of 90°C to -20°C. <br />

Thanks to this cryogenic system the pizzas maintain their organoleptic properties unaltered as well as the taste and aroma of the ingredients.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">Are ‘A Pizza pizzas simply frozen?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our pizzas are flash frozen cryogenically and then preserved frozen at a temperature of -18°C. <br />

The difference is very important because the cryogenic process brings a pizza fresh from the oven from a temperature of 90°C a -20°C in just a few minutes, maintaining unaltered  its organoleptic properties, as well as the taste and aroma of its ingredients.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">What ingredients are used in ‘A Pizza and what are their nutritional values?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                We use only genuine and high quality ingredients. Every tab of ‘A Pizza lists the specific ingredients. <br />

Concerning yeast, classic pizzas use starter yeast while brewer’s yeast is used for gluten free pizzas. <br />

The product cards found on our web site contain tabs listing the nutritional values.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">Can any of the ‘A Pizza ingredients be changed or eliminated?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Sorry, at this time it is not possible to change any of the ingredients. <br />

However, we will soon be producing additional flavors. Subscribe to our newsletter and follow us on the social networks to keep up with anything new.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">Why should I prefer your products to a fresh pizza?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                ‘A Pizza pizzas are never closed and delivery time between your freezer and your couch is just 10 minutes! <br />

In addition, our pizzas preserve the flavor and aroma of the True Neapolitan Pizza fresh from the oven, thanks to our innovative cryogenic process, contrary to traditional systems of normal freezing or deep freezing.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg ">How is it different from a regular pizzeria?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                ‘A Pizza is certainly not a pizzeria! <br />

We’re a company that uses an innovative cryogenic process to flash freeze pizzas fresh from the oven. Real, traditional Neapolitan pizzas cooked in a wood burning oven. This allows us to maintain the taste and aroma of the pizza that “reawakens” in your home oven unaltered.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <button data-aos="flip-up" className=" bg-orange-500 text-lg text-white px-4 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">CONTACT US</button>
      </div>
      <div id="image-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
        <img data-aos="zoom-in" src={faqimg1} alt="" className="w-[400px] h-[400px] rounded-xl" />
        <img data-aos="zoom-in" src={faqimg2} alt="" className="w-[400px] h-[400px] rounded-xl" />
        <img data-aos="zoom-in" src={faqimg3} alt="" className="w-[400px] h-[400px] rounded-xl" />
        <img data-aos="zoom-in" src={faqimg4} alt="" className="w-[400px] h-[400px] rounded-xl" />
      </div>
    </section>
  );
}

export default Faq;
