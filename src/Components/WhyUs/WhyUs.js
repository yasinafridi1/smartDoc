import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { whyUsCardsData } from "../../Assets/Data/cardsData";
import Card from "./Card";

const WhyUs = () => {
  return (
    <div data-aos="fade-up" className="w-full pt-4 pb-6 px-16">
      <SectionHeader
        headertext="Why Us ?"
        sectionId="whyus"
        customClasses="!text-[--black]"
      />
      <h3 className="satoshi-700 mt-4 text-[18px]">
        Built for Creatives, by Creatives
      </h3>
      <p className="text-[14px] xl:text-[16px] mt-3">
        SMART DOC is an AI OCR (Optical Character Recognition) software,
        expertly designed to revolutionize how you manage and process
        unstructured documents. Imagine a world where scanned PDFs and images no
        longer require countless hours of manual data entry.
      </p>

      <p className="text-[14px] xl:text-[16px] mt-3">
        Elevate your document management strategy with Smart Doc Enterprise. Our
        state-of-the-art solution efficiently converts physical paperwork into
        easily manageable digital formats, utilizing advanced OCR extraction
        technology. Seamlessly integrating with CRM and ERP systems, Smart Doc
        Enterprise ensures swift and accurate data transfer, eliminating the
        need for cumbersome manual entry processes.
      </p>

      <div className="flex justify-between items-stretch flex-wrap gap-10 mt-8 pb-3">
        {whyUsCardsData.map((item, index) => {
          return (
            <Card
              key={index}
              header={item.header}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
