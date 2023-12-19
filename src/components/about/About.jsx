import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white z-index: 50">
      <div className="container md:w-[70%] sm:py-16 py-10 z-50">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
             
As a Full Stack Developer, 
my expertise lies in both front-end and back-end web development.
 I am proficient in various programming languages and frameworks, 
 allowing me to design user-friendly interfaces and implement robust server-side logic.
 I excel in the entire software development lifecycle,
 collaborating with cross-functional teams to deliver comprehensive and efficient web applications.
  My commitment to staying updated on industry trends and adopting 
  best practices ensures the successful creation and deployment of high-quality software solutions.
            </p>
            <div className="">
              <a
                href="https://tallah.netlify.app/"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Look My Cv
              </a>
              <a
                href="mailto:amzpro093@gmail.com"
                title="Call +123456789 "
                className="outline-btn my-6"
              >
                Contact Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
