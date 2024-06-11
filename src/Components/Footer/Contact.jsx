import React from "react";
import Avatar from "../Avatar";
import ContactHeader from "./ContactHeader";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import IconWrapper from "./IconWrapper";
import logoSecondary from "../../Assets/images/logo-secondary.png";

const Contact = () => {
  return (
    <div className="pt-4 pb-6 px-16 text-[--white]">
      <Avatar imageReference={logoSecondary} />
      <div className="flex justify-between items-stretch mt-10 gap-5 flex-wrap">
        <div className="flex-grow basis-[240px] ">
          <ContactHeader text="contact us" />
          <div className="w-full mt-5">
            <IconWrapper
              icon={<FaLocationDot className="text-[18px]" />}
              text="200 Columbia Street San 
Diego, CA 92101"
            />

            <IconWrapper
              icon={<MdEmail className="text-[18px]" />}
              text="yassine.andaloussi@dsfanalytics.com"
            />

            <IconWrapper
              icon={<FaPhoneAlt className="text-[18px]" />}
              text="+1 (224) 433-3904"
            />
          </div>
        </div>

        <div className="flex-grow basis-[240px] ">
          <ContactHeader text="QUICK LINKS" />
          <div className="w-full mt-5">
            <IconWrapper text="Terms & Conditions" />

            <IconWrapper text="About Smart DOC " />

            <IconWrapper text="Frequently asked questions" />
          </div>
        </div>

        <div className="flex-grow basis-[240px] ">
          <ContactHeader text="follow" />
          <p className="mt-3">Sign up to get the latest news on our product</p>
          <div className="flex justify-start items-stretch mt-2">
            <input
              type="text"
              className="py-1 px-2"
              placeholder="Enter your email"
            />
            <button className="text-[15px] satoshi-700 border bg-[--black] text-[--white] px-3">
              Subscribe
            </button>
          </div>

          <div className="mt-3">
            <h4 className="satoshi-900 text-[16px]">Social Media</h4>
            <div className="flex justify-start items-center gap-6 mt-3">
              <FaFacebookSquare className="text-[28px]" />
              <FaLinkedin className="text-[28px]" />
              <FaSquareXTwitter className="text-[28px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
