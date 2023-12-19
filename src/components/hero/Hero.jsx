import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white z-0">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Tallha Rana Rajput
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Freelance web & <br /> Full stack Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
               
A Full Stack Developer excels in both front-end and back-end web development, 
designing interfaces and implementing server-side logic.
Their expertise ensures seamless integration and delivery of robust web applications.
              </p>
              <a
                href="https://wa.me/03091132455"
                className="inline-block primary-btn !my-3"
              >
                Hire Me Whatsapp
              </a>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div className="hero-img">
            <img
              src={personImg}
              className="w-full mx-auto backdrop-blur-sm z-0"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
