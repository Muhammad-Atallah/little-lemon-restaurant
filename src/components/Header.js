import React from "react";
import logo from "../assets/icons_assets/Logo .svg";

const Header = (props) => {
  return (
    <header>
      <img className="" src={logo} alt="logo" />
      {props.children}
    </header>
  );
};

export default Header;
