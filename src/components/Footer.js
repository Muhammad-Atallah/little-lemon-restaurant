import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#41644a] text-white flex space-around justify-center gap-20 py-3">
      <section>
        <ul>
          <h1 className="font-semibold text-sm">Navigation</h1>
          <li className="text-xs">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Menu</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/booking">Reservations</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Order Online</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="font-semibold text-sm">Contact</h1>
        <ul>
          <li className="text-xs">
            <NavLink to="/">Address</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Phone Number</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Email</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <h1 className="font-semibold text-sm">Social Media Links</h1>
        <ul>
          <li className="text-xs">
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li className="text-xs">
            <NavLink to="/">Instagram</NavLink>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
