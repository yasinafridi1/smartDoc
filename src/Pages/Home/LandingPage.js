import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import Banner from "../../Components/Banner/Banner";
import PlayGround from "../../Components/PlayGround/PlayGround";
// import UseCase from "../../Components/UseCase/UseCase";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Packages from "../../Components/Packages/Packages";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import Usage from "../../Components/usage";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PlayGround />
      <Usage />
      <WhyUs />
      <Packages />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
