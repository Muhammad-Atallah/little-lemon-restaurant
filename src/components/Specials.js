import React from "react";
import SpecialCard from "./SpecialCard";
import Button from "./Button";

const Specials = () => {
  const specialsData = [
    {
      dishName: "Greek Salad",
      dishPrice: "$12.99",
      dishDescription:
        "Fresh, crisp lettuce, juicy tomatoes, and tangy feta cheese tossed in a zesty vinaigrette. A classic Greek salad.",
      dishImage: require("../assets/icons_assets/greek salad.jpg"),
    },
    {
      dishName: "Bruchetta",
      dishPrice: "$5.99",
      dishDescription:
        "Enjoy the taste of Italy with our bruschetta - crispy bread, ripe tomatoes, garlic, and fresh basil. A perfect appetizer.",
      dishImage: require("../assets/icons_assets/bruchetta.jpg"),
    },
    {
      dishName: "Lemon Dessert",
      dishPrice: "$5.00",
      dishDescription:
        "Indulge in the zesty sweetness of our lemon dessert. Made with fresh lemon juice and a delicate pastry, it's a refreshing end to any meal.",
      dishImage: require("../assets/icons_assets/lemonDessert.jpg"),
    },
  ];
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="flex flex-col max-w-[1400px] m-auto px-10 mb-2 py-10 gap-10"
    >
      <section className="flex justify-between">
        <h1 className="text-[40px] font-semibold">This weeks specials!</h1>
        <Button buttonText="Online Menu" buttonColor="green" />
      </section>
      <section className="flex justify-around">
        {specialsData.map((special) => (
          <SpecialCard
            dishName={special.dishName}
            dishPrice={special.dishPrice}
            dishDescription={special.dishDescription}
            dishImage={special.dishImage}
          />
        ))}
      </section>
    </section>
  );
};

export default Specials;
