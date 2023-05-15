import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    navigation("/login");
  };
  return (
    <form onSubmit={handleForm} className="flex flex-col gap-6">
      <article className="flex flex-col gap-1 justify-center items-center">
        <label
          className="font-semibold text-xs md:text-sm text-white"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border-2 p-1 text-xs w-56 rounded-md text-black"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </article>
      <article className="flex flex-col gap-1  justify-center items-center">
        <input
          className="text-sm justify-center cursor-pointer border-2 py-2 px-3 rounded-[16px] mt-2 bg-[#F4CE14] text-black"
          type="submit"
          value="Submit"
        />
      </article>
      <article className="flex justify-center text-black items-center">
        <IoChevronBackOutline size={15} />
        <NavLink to="/login" className="font-bold text-xs text-black">
          Back to login
        </NavLink>
      </article>
    </form>
  );
};

export default ResetPasswordForm;
