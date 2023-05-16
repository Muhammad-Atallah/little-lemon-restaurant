import React from "react";
import MarioAndAdrian from "../assets/icons_assets/Mario and Adrian b.jpg";
import restaurantImage from "../assets/icons_assets/restaurant.jpg";
import food from "../assets/icons_assets/food.jpg";

const About = () => {
  return (
    <div
      style={{ "font-family": "Karla" }}
      className="w-full min-h-[80vh] md:py-10"
    >
      <section className="max-w-[1400px] m-auto text-xs lg:text-sm justify-center justify-items-center flex flex-col gap-5">
        <section className="flex flex-col md:flex-row-reverse justify-center justify-items-center">
          <img
            className="w-[90%] md:w-[40%] m-2 lg:m-10 rounded-md shadow-md self-center"
            src={MarioAndAdrian}
            alt="Mario and Adrian"
          />
          <p className="w-[90%] self-center p-2 lg:p-10">
            Welcome to Little Lemon, a vibrant and inviting Mediterranean
            restaurant in the heart of Chicago. Founded and run by two
            passionate chefs, Mario and Adrian, our mission is to offer
            authentic, healthy, and fresh cuisine that celebrates the vibrant
            flavors of the Mediterranean. We pride ourselves on using only the
            freshest, locally-sourced ingredients to create our flavorful
            dishes, which include a range of traditional Mediterranean favorites
            such as fresh salads, hearty sandwiches, and flavorful entrees.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-center justify-items-center">
          <img
            className="w-[90%] md:w-[40%] m-2 lg:m-10 rounded-md shadow-md self-center"
            src={restaurantImage}
            alt="Little Lemon restaurant"
          />
          <p className="w-[90%] self-center p-2 lg:p-10">
            At Little Lemon, we believe that great food should be enjoyed in a
            warm and inviting atmosphere. Our restaurant is designed to provide
            a comfortable and welcoming environment where you can enjoy your
            meal with friends and family. Whether you're joining us for a casual
            lunch or a special dinner, we're committed to providing an
            unforgettable dining experience that celebrates the rich culinary
            traditions of the Mediterranean.
          </p>
        </section>
        <section className="flex flex-col md:flex-row-reverse justify-center justify-items-center">
          <img
            className="w-[90%] md:w-[40%] m-2 lg:m-10 rounded-md shadow-md self-center"
            src={food}
            alt="Little Lemon Salad"
          />
          <p className="w-[90%] self-center pt-2 px-2 lg:p-10">
            We're passionate about the food we serve, and we're dedicated to
            providing our customers with delicious, healthy Mediterranean fare
            that nourishes both the body and the soul. We invite you to come and
            experience the warm hospitality, fresh ingredients, and authentic
            flavors that make Little Lemon a must-visit destination for anyone
            seeking delicious, healthy Mediterranean cuisine.
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
