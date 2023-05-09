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
  navigation,
}) => {
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="w-full flex justify-center justify-items-center items-center m-2"
    >
      <section className="max-w-[50rem] m-5 flex flex-col md:flex-row border-2 rounded-md shadow-md">
        <img
          className="object-cover md:max-w-[20rem] rounded-l-md"
          src={require("../assets/icons_assets/restaurant chef B.jpg")}
          alt=""
        />
        <section className="flex flex-col justify-items-center items-center gap-5 p-5">
          <section className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-md md:text-xl font-semibold text-center">
              Online Reservation at Little Lemon
            </h1>
            <p className="text-xs md:text-sm text-center">
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
            navigation={navigation}
          />
        </section>
      </section>
    </section>
  );
};

export default BookingPage;
