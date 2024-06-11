import React from "react";
import usageData from "../../Assets/Data/usageData";

const Index = () => {
  return (
    <div data-aos="fade-up" className="w-full pt-4 pb-6 px-6 sm:px-12 md:px-16">
      <h1 className="satoshi-900 text-[20px] sm:text-[23px] md:text-[25px] lg:text-[27px] text-center">
        How to Use the SmartDoc Web App
      </h1>
      <p className="text-[14px] xl:text-[16px] mt-3">
        Welcome to SmartDoc's Quick Playground! This guide will help you make
        the most out of our AI-powered OCR tool by ensuring you upload
        good-quality photos or scans of your documents. Remember, the better the
        quality of your uploads, the better the OCR and extraction results.
      </p>
      <h4 className="satoshi-700 mt-4 text-[20px] sm:text-[24px] md:text-[26px]">
        Step-by-Step Guide
      </h4>
      {usageData.map((item, index) => {
        return (
          <ol key={index} className="mt-4">
            <li>
              <h3 className="satoshi-700 text-[18px] sm:text-[20px]">
                {`${index + 1}. ${item.title}`}
              </h3>
              {item.paragrapgh && (
                <p className="text-[13px] sm:text-[14px] md:text-[16px] mt-3">
                  {item.paragrapgh}
                </p>
              )}
              {item.listItems.length ? (
                <ul className="list-disc ml-10">
                  {item.listItems.map((listItem, index) => {
                    return (
                      <li key={index} className="my-4">
                        <span className="satoshi-700 text-[13px] sm:text-[14px] md:text-[16px]">
                          {listItem.heading}
                        </span>
                        <p className="inline ml-1 text-[13px] sm:text-[14px] md:text-[16px]">
                          {listItem.body}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          </ol>
        );
      })}
    </div>
  );
};

export default Index;
