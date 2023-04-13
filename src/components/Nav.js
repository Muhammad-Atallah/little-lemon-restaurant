import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-sm pt-1">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
