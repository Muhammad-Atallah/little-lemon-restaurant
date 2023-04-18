import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ state, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  const handleChange = (e) => {
    const action = { id: "res-date", value: e.target.value };
    dispatch(action);
  };

  return (
    <section
      style={{ "font-family": "Karla" }}
      className="w-full h-screen flex justify-center items-center"
    >
      <section className="max-w-[50rem] max-h-[30rem] h-[30rem] m-4 flex border-2 rounded-md">
        <img
          className="object-cover max-w-[20rem] rounded-l-md"
          src={require("../assets/icons_assets/restaurant chef B.jpg")}
          alt=""
        />
        <section className="flex flex-col justify-center items-center gap-5 p-5">
          <section className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-xl font-semibold">
              Online Reservation at Little Lemon
            </h1>
            <p className="text-sm text-center">
              You can reserve a table in our restaurant during weekdays and
              weekends for a maximum of 10 people.
            </p>
          </section>
          <form
            onChange={handleChange}
            onSubmit={handleForm}
            className="flex flex-col gap-5"
            action=""
          >
            <article className="flex flex-col gap-1  justify-center items-center">
              <label className="font-semibold text-sm" htmlFor="res-date">
                Choose date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                className="border-2 p-1 text-xs"
                type="date"
                id="res-date"
                value={date}
              />
            </article>
            <article className="flex flex-col gap-1 text-sm justify-center items-center">
              <label className="font-semibold text-sm" htmlFor="res-time">
                Choose time
              </label>
              <select
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                className="border-2 p-1 text-xs"
                id="res-time"
                value={time}
              >
                {state.map((availableTime) => (
                  <option>{availableTime.time}</option>
                ))}
              </select>
            </article>
            <article className="flex flex-col gap-1 text-sm justify-center items-center">
              <label className="font-semibold text-sm" htmlFor="guests">
                Number of guests
              </label>
              <input
                onChange={(e) => setGuests(e.target.value)}
                className="border-2 p-1 text-xs"
                type="number"
                placeholder="10"
                min="1"
                max="10"
                id="guests"
                value={guests}
              />
            </article>
            <article className="flex flex-col gap-1 text-sm justify-center items-center">
              <label className="font-semibold text-sm" htmlFor="occasion">
                Occasion
              </label>
              <select
                onChange={(e) => setOccasion(e.target.value)}
                className="border-2 p-1 text-xs"
                id="occasion"
                value={occasion}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </article>

            <input
              className="text-sm justify-center cursor-pointer border-2 py-2 px-3 rounded-[16px] mt-2 bg-[#F4CE14]"
              type="submit"
              value="Make Your reservation"
            />
          </form>
        </section>
      </section>
    </section>
  );
};

export default BookingPage;
