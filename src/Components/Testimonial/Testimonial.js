import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { testimonialData } from "../../Assets/Data/cardsData";
import Card from "./Card";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: testimonialData.length > 3,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 50,
    responsive: [
      {
        breakpoint: 1238,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full pt-2 pb-6 px-16">
      <SectionHeader
        headertext="Testimonial"
        sectionId="testimonial"
        customClasses="!text-[--black] !mt-10"
      />
      <div className="slider-container mt-12 mb-4">
        <Slider {...settings}>
          {testimonialData.map((review, index) => {
            return <Card data={review} key={index} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
