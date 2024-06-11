import React from "react";

const IconWrapper = ({ icon, text }) => {
  return (
    <div className="flex justify-start items-center mt-2 gap-3">
      {icon ? icon : null}
      <h6 className="text-[14px]">{text}</h6>
    </div>
  );
};

export default IconWrapper;
