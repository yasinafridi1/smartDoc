import React from "react";

const Button = ({ text, onClick, customClasses }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-2 satoshi-500 py-2 px-8 bg-[--black] text-[--golden] rounded-md transition-all ease-in-out duration-500 hover:bg-[--golden] hover:text-[--black] ${customClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
