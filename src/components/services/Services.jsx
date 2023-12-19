import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
        Our services encompass comprehensive Full Stack Development, 
        covering both front-end and back-end expertise. We specialize in crafting seamless, 
        user-centric web applications tailored to meet your unique business needs..
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
