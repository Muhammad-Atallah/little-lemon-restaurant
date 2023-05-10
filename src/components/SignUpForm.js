import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState();

  const navigation = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    console.log("submitted");
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
          className="border-2 p-1 text-xs w-56 rounded-md"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </article>
      <article className="flex flex-col gap-1  justify-center items-center">
        <label
          className="font-semibold text-xs md:text-sm text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border-2 p-1 text-xs w-56 rounded-md"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="(?=.*[a-z]).{8,16}"
        />
        <p className="text-[11px]">Password must be at least 8 characters</p>
      </article>

      <article className="flex flex-col gap-1  justify-center items-center">
        <input
          className="text-sm justify-center cursor-pointer border-2 py-2 px-3 rounded-[16px] mt-2 bg-[#F4CE14] text-black"
          type="submit"
          value="Sign Up"
        />
      </article>
      <article className="flex justify-center gap-2 items-center">
        <h1 className="font-semibold text-xs"> Already have an account?</h1>
        <NavLink to="/login" className="font-bold text-xs text-black">
          Log in
        </NavLink>
      </article>
    </form>
  );
};

export default SignUpForm;
