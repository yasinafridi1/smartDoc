import React, { useState } from "react";
// import SectionHeader from "../SectionHeader/SectionHeader";
import { enterpriseCardData, packagesData } from "../../Assets/Data/cardsData";
import Card from "./Card";
import EnterPriseCard from "./EnterPriseCard";

const Packages = () => {
  const [packageType, setPackageType] = useState("small");
  return (
    <div
      id="packages"
      data-aos="fade-down"
      className="w-full pt-8 pb-8 px-8 sm:px-13 md:px-16px"
    >
      {/* <SectionHeader
        headertext="Subscription Plan"
        sectionId="packages"
        customClasses="!text-[--black] !mt-10"
      /> */}

      <div className=" mt-10 flex justify-center items-center px-2 py-2 bg-gray-300 rounded-full max-w-max mx-auto gap-4">
        <button
          onClick={() => {
            setPackageType("small");
          }}
          className={`${
            packageType === "small"
              ? "bg-[--black] text-[--golden]"
              : "bg-slate-200"
          } px-1 sm:px-6 md:px-8 py-2 satoshi-700  rounded-full transition-all ease-in-out duration-500 text-[12px] sm:text-[14px] md:text-[16px]`}
        >
          Individuals & Small Teams
        </button>
        <button
          onClick={() => {
            setPackageType("enterprise");
          }}
          className={`${
            packageType === "enterprise"
              ? "bg-[--black] text-[--golden]"
              : "bg-slate-200"
          } px-2 sm:px-6 md:px-8 py-2 satoshi-700  rounded-full transition-all ease-in-out duration-500 text-[12px] sm:text-[14px] md:text-[16px]`}
        >
          EnterPrise version
        </button>
      </div>

      {packageType === "enterprise" ? (
        <div className="flex justify-center items-stretch flex-wrap gap-10 mt-12 pb-3">
          <EnterPriseCard data={enterpriseCardData} />
        </div>
      ) : (
        <div className="flex justify-center items-stretch flex-wrap gap-10 mt-12 pb-3">
          {packagesData.map((pkg, index) => {
            return <Card data={pkg} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Packages;
