import React from "react";

const MenuButton = ({
  buttonText,
  buttonColor,
  setMenu,
  setMenuTitle,
  data,
}) => {
  const handleMenu = () => {
    setMenu(data);
    setMenuTitle(buttonText);
  };
  return (
    <button
      aria-label={buttonText}
      className={
        buttonColor === "yellow"
          ? "text-[12px] sm:text-sm p-2 rounded-[16px] bg-[#F4CE14] text-black "
          : "text-[12px] sm:text-sm p-2 rounded-[16px] bg-[#41644a] text-white"
      }
      onClick={handleMenu}
    >
      {buttonText}
    </button>
  );
};

export default MenuButton;
