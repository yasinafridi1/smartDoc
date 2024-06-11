import React from "react";
// import { FaCheck } from "react-icons/fa6";

const EnterPriseCard = ({ data }) => {
  return (
    <div className="rounded-md bg-[--white] flex-grow basis-[330px] max-w-[500px] packageCard">
      <div className="w-full h-[50px] brownGradient"></div>
      <div className="px-4 pb-3 pt-5">
        <h1 className="satoshi-900 text-[27px] uppercase text-center mb-8">
          {data.name}
        </h1>
        {/* <p className="text-[15px] mt-1">{data.description}</p> */}
        {data?.packageitems?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center text-left my-8"
            >
              {/* <FaCheck className="text-[16px]" /> */}
              <h6 className="ml-3 text-[18px]">{item}</h6>
            </div>
          );
        })}

        <button className="w-full py-2 bg-[--black] text-[--golden] mt-6 rounded-md satoshi-700">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default EnterPriseCard;
