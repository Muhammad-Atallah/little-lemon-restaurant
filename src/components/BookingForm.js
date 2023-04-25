import React, { useState } from "react";

const BookingForm = ({
  state,
  dispatch,
  name,
  setName,
  email,
  setEmail,
  time,
  setTime,
  date,
  setDate,
  guests,
  setGuests,
  occasion,
  setOccasion,
  submitAPI,
  bookingDetails,
  setBookingDetails,
  navigation,
}) => {
  const handleChange = (e) => {
    const action = { id: e.target.id, value: e.target.value };
    dispatch(action);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const resetFormValues = () => {
    console.log("Hello");
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    setName("");
    setEmail("");
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setBookingDetails({
      name: name,
      email: email,
      time: time,
      date: date,
      guests: guests,
      occasion: occasion,
    });

    setTimeout(() => {
      submitAPI(bookingDetails)
        ? navigation("/confirmedBooking")
        : console.log("Form Rejected");
    }, 500);

    setTimeout(() => {
      resetFormValues();
    }, 2000);
  };

  return (
    <form
      onChange={handleChange}
      onSubmit={handleForm}
      className="flex flex-col gap-5 self-center"
      action=""
    >
      <article className="flex flex-col gap-1  justify-center items-center">
        <label className="font-semibold text-xs md:text-sm" htmlFor="res-date">
          Full Name
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 p-1 text-xs w-56"
          type="text"
          id="res-name"
          value={name}
          required
          minLength="2"
        />
      </article>
      <article className="flex flex-col gap-1  justify-center items-center">
        <label className="font-semibold text-xs md:text-sm" htmlFor="res-date">
          Email
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target);
          }}
          className="border-2 p-1 text-xs w-56"
          type="email"
          id="res-email"
          data-testid="res-email"
          value={email}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </article>

      <article className="flex flex-col gap-1  justify-center items-center">
        <label className="font-semibold text-xs md:text-sm" htmlFor="res-date">
          Choose date
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          className="border-2 p-1 text-xs"
          type="date"
          id="res-date"
          value={date}
          required
        />
      </article>
      <article className="flex flex-col gap-1 text-sm justify-center items-center">
        <label className="font-semibold text-xs md:text-sm" htmlFor="res-time">
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
          {state?.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>
      </article>
      <article className="flex flex-col gap-1 text-sm justify-center items-center">
        <label className="font-semibold text-xs md:text-sm" htmlFor="guests">
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
        <label className="font-semibold text-xs md:text-sm" htmlFor="occasion">
          Occasion
        </label>
        <select
          onChange={(e) => setOccasion(e.target.value)}
          className="border-2 p-1 text-xs"
          id="occasion"
          value={occasion}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </article>
      {/* <NavLink to="/confirmedBooking"> */}
      <input
        className="text-sm justify-center cursor-pointer border-2 py-2 px-3 rounded-[16px] mt-2 bg-[#F4CE14]"
        aria-label="make reservation"
        type="submit"
        value="Make Your reservation"
        // onClick={(e) => {
        //   handleForm(e);
        //   setBookingDetails({
        //     name: name,
        //     email: email,
        //     time: time,
        //     date: date,
        //     guests: guests,
        //     occasion: occasion,
        //   });
        //   submitAPI(bookingDetails)
        //     ? navigation("/confirmedBooking")
        //     : console.log("Form Rejected");
        // }}
      />
      {/* </NavLink> */}
    </form>
  );
};

export default BookingForm;
