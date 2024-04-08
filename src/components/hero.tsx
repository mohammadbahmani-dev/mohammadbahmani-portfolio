import React from "react";
import Button from "./button";

const HeroSection = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="lg:bg-yellow-500 bg-[#111] self-stretch flex items-center min-h-[100%] justify-center ">
      <div className=" relative overflow-hidden xl:w-[90%] w-[100%] lg:max-xl:px-10 h-screen ">
        <div className="grid grid-cols-12 relative bottom-20 z-10 h-full ">
          <div className="w-full h-full xl:col-span-3  col-span-3 "></div>
          <div className="col-span-9  bg-[#111] -rotate-6 scale-125 lg:shadow"></div>
        </div>
        <div className="lg:h-full grid grid-cols-12 justify-items-center items-center gap-5 lg:gap-0 absolute lg:max-xl:px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white w-full">
          <div className=" col-span-4 h-[90%] w-[100%] bg-white rounded-[30px] shadow ml-4 hidden lg:block"></div>
          <div className="w-[250px] h-[250px] rounded-full border-4 border-[#252525] col-span-12 lg:hidden"></div>
          <div className="text-lg md:text-xl lg:text-2xl lg:col-span-8 col-span-12 flex flex-col justify-center  gap-5 w-[70%]">
            <h1 className="text-4xl font-bold leading-tight max-lg:text-center ">
              <span className="text-yellow-500"> I'M MOHAMMAD BAHMANI.</span>
              <br />
              SOFTWARE ENGINEER
            </h1>
            <p className="text-base font-thin max-lg:text-center ">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div className="max-lg:text-center">
              <Button text="more about me"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
