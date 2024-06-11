import React from "react";

const Card = ({ header, description, icon }) => {
  return (
    <div className="min-w-max flex justify-start items-stretch">
      <div className="bg-[--black] p-2 text-[--white] text-[25px] rounded-md">
        {icon}
      </div>
      <div className="ml-2">
        <h6 className="text-[14px] satoshi-500">{header}</h6>
        <h6 className="text-[14px] satoshi-500">{description}</h6>
      </div>
    </div>
  );
};

export default Card;
