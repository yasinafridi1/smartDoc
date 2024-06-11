import React from "react";
// import Button from "../Button/Button";
// import banner from "../../Assets/images/laptop.png";

const Banner = () => {
  return (
    <div className="flex justify-center gap-20 items-center py-24 px-16">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="satoshi-900 text-[25px] sm:text-[30px] md:text-[34px] lg:text-[38px]">
          Easy, Efficient, and Accurate AI-powered OCR System
        </h1>
        <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-5 satoshi-500">
          Extract & Structure your document's data with precision and speed.
        </h4>
        {/* <Button customClasses={"mt-8"} text="Get Started" /> */}
      </div>
      {/* <div className="w-1/2 flex justify-end items-center">
        <img
          className="w-[70%] h-[280px] object-contain"
          src={banner}
          alt="Banner"
        />
      </div> */}
    </div>
  );
};

export default Banner;
