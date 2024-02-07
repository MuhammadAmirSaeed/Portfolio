import React from "react";
import { Styles } from "../Styles";
import Profile from "../assets/edit-removebg-preview.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${Styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Generate Line with dote */}
          <div className="w-5 h-5 rounded-full bg-purple-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full sm:mt-0 mt-5 ">
          <div>
            <img
              src={Profile}
              alt="profile"
              className=" border-spacing-96 rounded-full"
              height={700}
              width={700}
            />
          </div>
          <div className="">
            <h1 className={`${Styles.heroHeadText}`}>
              Hi I'm <span className=" text-purple-600">Amir Saeed</span>
            </h1>
            <p className={`${Styles.heroSubText} mt-2 text-white-100`}>
              I'm <span className=" text-purple-600">MERN Stack </span>
              Developer. <span className=" text-purple-600">
                React
              </span> and <span className=" text-purple-600">Node</span> Lover.{" "}
              <div className="">
                {" "}
                A passionate developer who loves to create innovative digital
                solutions and build user friendly applications.
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
