import React from "react";
import { NavLink } from "react-router-dom";
import { GiScooter } from "react-icons/gi";

const SpecialCard = ({ dishName, dishPrice, dishDescription, dishImage }) => {
  return (
    <article className="flex flex-col max-w-[15rem] shadow-md">
      <section>
        <img
          className="w-full h-[12rem] rounded-t-[16px]"
          src={dishImage}
          alt={dishName}
        />
      </section>

      <section className="bg-[#EDEFEE] h-[12rem] flex flex-col gap-3 p-2 justify-center">
        <section className="flex justify-between">
          <h1 className="text-[18px] font-bold">{dishName}</h1>
          <h2 className="text-orange-500 text-sm">{dishPrice}</h2>
        </section>
        <p className="text-sm">{dishDescription}</p>
        <NavLink className="bg-[#EDEFEE] flex gap-2 items-center">
          <h3 className="text-sm font-semibold">Order a delivery</h3>
          <GiScooter />
        </NavLink>
      </section>
    </article>
  );
};

export default SpecialCard;
