import React from "react";
import logo from "../assets/icons_assets/Logo .svg";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className="py-3 border-b-2">
      <section className="flex justify-between max-w-[1400px] m-auto px-10">
        <img src={logo} alt="logo" />
        <div>
          <Nav />
        </div>
      </section>
    </header>
  );
};

export default Header;
