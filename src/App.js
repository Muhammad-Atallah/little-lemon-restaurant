import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
