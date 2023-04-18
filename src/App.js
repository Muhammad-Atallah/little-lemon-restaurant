import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { Route, Routes } from "react-router-dom";
import { useReducer, useState } from "react";

const initialState = [
  { time: "17:00" },
  { time: "18:00" },
  { time: "19:00" },
  { time: "20:00" },
  { time: "21:00" },
  { time: "22:00" },
];

const reducer = (state, action) => {
  console.log(state);
  return [...state];
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const updateTimes = (date) => {
  //   setAvailableTimes([
  //     { time: "17:00" },
  //     { time: "18:00" },
  //     { time: "19:00" },
  //     { time: "20:00" },
  //     { time: "21:00" },
  //     { time: "22:00" },
  //   ]);
  // };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/booking"
            element={<BookingPage state={state} dispatch={dispatch} />}
          />
        </Routes>
      </main>
      <section className="mb-auto flex flex-col">
        <section className="w-full self-end">
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
