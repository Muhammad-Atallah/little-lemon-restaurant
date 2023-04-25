import React, { useState } from "react";
import logo from "../assets/icons_assets/Logo .svg";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  const [burgerButtonState, setBurgerButtonState] = useState(false);
  const [burgerMenuState, setBurgerMenuState] = useState(false);
  const handleBurgerButton = () => {
    setBurgerButtonState(!burgerButtonState);
    setBurgerMenuState(!burgerButtonState);
  };
  return (
    <header
      className={
        burgerMenuState
          ? "py-3 overflow-hidden fixed bg-white w-full z-50"
          : "py-3 overflow-hidden bg-white w-full z-50"
      }
    >
      <ul
        className={
          burgerMenuState
            ? "flex flex-col items-center py-16 text-sm bg-white text-black z-50 w-[100vw] h-[100vh] translate-y-[45px] fixed transition duration-500 ease-in-out"
            : "flex flex-col items-center py-16 text-sm bg-white text-black z-50 w-[100vw] h-[100vh] translate-y-[45px] translate-x-[100%] fixed transition duration-500 ease-in-out"
        }
      >
        <NavLink onClick={handleBurgerButton} className="w-full" to="/">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            Home
          </li>
        </NavLink>

        <NavLink onClick={handleBurgerButton} className="w-full" to="/">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            About
          </li>
        </NavLink>

        <NavLink onClick={handleBurgerButton} className="w-full" to="/">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            Menu
          </li>
        </NavLink>

        <NavLink onClick={handleBurgerButton} className="w-full" to="/booking">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            Reservations
          </li>
        </NavLink>

        <NavLink onClick={handleBurgerButton} className="w-full" to="/">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            Order Online
          </li>
        </NavLink>

        <NavLink onClick={handleBurgerButton} className="w-full" to="/">
          <li className="w-full border-b-[1px] border-gray-200 text-center p-2">
            Login
          </li>
        </NavLink>
      </ul>

      <section className="flex justify-between max-w-[1400px] m-auto px-10 items-center h-[2rem]">
        <img src={logo} alt="logo" />
        <div>
          <nav className="flex flex-row-reverse gap justify-center items-center ">
            {burgerButtonState ? (
              <AiOutlineClose
                onClick={handleBurgerButton}
                className="md:hidden cursor-pointer transition duration-500 ease-in-out"
                size={30}
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleBurgerButton}
                className="md:hidden cursor-pointer transition duration-500 ease-in-out"
                size={30}
              />
            )}
            <ul className="hidden md:flex gap-6 text-xs lg:text-sm ">
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
        </div>
      </section>
    </header>
  );
};

export default Header;
