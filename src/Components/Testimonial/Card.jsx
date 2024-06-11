import React from "react";
// import { FaStar } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Card = ({ data }) => {
  return (
    <div className="border px-6 py-3 mx-3 flex-grow max-w-[550px] rounded-md ">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="ml-3">
            <h5 className="satoshi-700 text-[12px] sm:text-[13px] md:text-[14px]">
              {data.name}
            </h5>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <MdOutlineStar
              key={index}
              className={`${
                index < data.starCount ? "text-[#FFA800]" : "text-[--black]"
              } text-[14px]`}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-6 ">
        <BiSolidQuoteAltLeft className="inline-flex text-[18px] mr-1" />
        <p className="inline text-[12px] sm:text-[13px] font-indie">
          {data.message}
        </p>
        <BiSolidQuoteAltRight className="inline" />
      </div>
      <div className="flex justify-end items-center mt-3">
        <p className="text-[12px] sm:text-[13px] satoshi-500">
          {data.designation}
        </p>
      </div>
    </div>
  );
};

export default Card;
