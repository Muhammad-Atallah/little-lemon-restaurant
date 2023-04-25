import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ buttonText, buttonColor }) => {
  return (
    <NavLink to="/booking">
      <button
        aria-label={buttonText}
        className={
          buttonColor === "yellow"
            ? "p-2 rounded-[16px] bg-[#F4CE14] text-black text-sm"
            : "p-2 rounded-[16px] bg-[#41644a] text-white text-sm"
        }
      >
        {buttonText}
      </button>
    </NavLink>
  );
};

export default Button;
