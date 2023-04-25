import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [burgerButtonState, setBurgerButtonState] = useState(false);
  const [burgerMenuState, setBurgerMenuState] = useState(true);
  const handleBurgerButton = () => {
    setBurgerButtonState(!burgerButtonState);
  };

  return (
    <>
      {burgerMenuState && (
        <ul className="flex flex-col gap-6 text-sm bg-black opacity-50 z-50 w-[100vw] h-[100vh] relative">
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
      )}
    </>
  );
};

export default Nav;
