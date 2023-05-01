import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./data/apiFunctions";
import MenuPage from "./pages/MenuPage";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

console.log(initializeTimes());

const updateTimes = (date) => {
  return fetchAPI(new Date(date));
};

const reducer = (state, action) => {
  if (action.id === "res-date") {
    return updateTimes(action.value);
  } else {
    return [...state];
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initializeTimes());

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    time: "",
    date: "",
    guests: 1,
    occasion: "",
  });

  const navigation = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route
            path="booking"
            element={
              <BookingPage
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
            }
          />
          <Route
            path="confirmedBooking"
            element={
              <ConfirmedBooking
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
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
