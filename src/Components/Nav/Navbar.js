import React, { useState } from "react";
import Avatar from "../Avatar";
import navItem from "../../Assets/Data/navdata";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../Assets/images/logo.png";
import logoSecondary from "../../Assets/images/logo-secondary.png";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [imageRef, setImage] = useState(logo);

  function handleBurger(e) {
    const element = document.querySelector(".menu-responsive");
    if (e.target.checked) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  }

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (nav) {
      if (window.scrollY > 45) {
        nav.classList.add("animateMenu");
        nav.classList.add("secondary-nav");
        setImage(logoSecondary);
      } else {
        nav.classList.remove("animateMenu");
        nav.classList.remove("secondary-nav");
        setImage(logo);
      }
    }
  });
  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full py-2 navbar">
        <nav className="w-full flex justify-between px-6 sm:px-12 md:px-16">
          <a href="/">
            <Avatar imageReference={imageRef} />
          </a>
          <div className="hidden md:flex justify-end items-center">
            <ul className="flex justify-center items-center gap-5 ">
              {navItem?.map((item, index) => {
                return (
                  <li key={index} className="px-3">
                    <a href={item.link} className="satoshi-500">
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="ml-4">
              <li className="flex justify-center items-center ">
                <FaUserCircle className="text-[20px] mr-1" />
                <Link to="/signin" className="ml-1 satoshi-500" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className=" flex justify-center items-center md:hidden">
            <input
              type="checkbox"
              id="openSidebarMenu"
              onChange={handleBurger}
            />
            <label
              htmlFor="openSidebarMenu"
              className="sidebarIconToggle pr-4 md:hidden"
            >
              <div className="spinner top"></div>
              <div className="spinner middle"></div>
              <div className="spinner bottom"></div>
            </label>
          </div>

          <ul className="menu-responsive d-none ">
            {navItem.map((item, index) => {
              return (
                <li key={index} className="py-4">
                  <a href={item.link} className="satoshi-500">
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="flex justify-center items-center mt-3">
              <FaUserCircle className="text-[20px] mr-1" />
              <Link to="/signin" className="ml-1 satoshi-500" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="w-full h-[55px]"></div>
    </>
  );
};

export default Navbar;
