import React from "react";
import image from "../assets/icons_assets/restauranfood.png";

const MainImage = () => {
  return (
    <img
      src={image}
      className="w-lg min-w-[15rem] w-[15rem] relative rounded-[16px]"
      alt="restaurant food"
    />
  );
};

export default MainImage;
