import React from "react";
import { FaCheck } from "react-icons/fa6";

const Card = ({ data }) => {
  return (
    <div className="rounded-md bg-[--white] w-[270px] packageCard  h-max">
      <div id={data.name} className="w-full h-[50px] brownGradient px-3">
        <h1 className="satoshi-900 text-[27px] uppercase text-center mb-8 text-[--white]">
          {data.name}
        </h1>
      </div>
      <div className="px-4 pb-3 pt-5">
        {/* <p className="text-[15px] mt-1">{data.description}</p> */}
        {data.packageitems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start items-center text-left my-8 border-b border-gray-400"
            >
              {/* <FaCheck className="text-[16px]" /> */}
              <h6 className="ml-1 text-[18px]">{item}</h6>
            </div>
          );
        })}

        <h1 className="satoshi-900 text-[28px] uppercase text-center mt-8">
          {data.price}
        </h1>
        <p className="text-[15px] mt-1 mb-4 text-center">{data.duration}</p>

        <button className="w-full py-2 bg-[--black] text-[--golden] mt-6 rounded-md satoshi-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Card;
