import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({
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
}) => {
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="w-full h-screen flex justify-center items-center"
    >
      <section className="max-w-[50rem]  m-4 flex border-2 rounded-md">
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
          <BookingForm
            state={state}
            dispatch={dispatch}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            submitAPI={submitAPI}
            bookingDetails={bookingDetails}
            setBookingDetails={setBookingDetails}
          />
        </section>
      </section>
    </section>
  );
};

export default BookingPage;
