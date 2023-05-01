import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#41644a] text-white grid grid-cols-3 sm:flex space-around justify-center justify-items-center sm:gap-20 py-3 mt-10 w-full">
      <section>
        <ul>
          <h1 className="font-semibold text-xs sm:text-sm pb-2">Navigation</h1>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Menu</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/booking">Reservations</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Order Online</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="font-semibold text-xs sm:text-sm pb-2">Contact</h1>
        <ul>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Address</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Phone Number</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Email</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="font-semibold text-xs sm:text-sm pb-2">
          Social Media Links
        </h1>
        <ul>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li className="text-[12px] sm:text-xs">
            <NavLink to="/">Instagram</NavLink>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
