import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Features/LandingPage";
import BookingPage from "./Features/BookingPage";
import ContactUs from "./Features/ContactUs";
import BookList from "./Features/BookList";
import BusFormat from "./Features/BusFormat";
import Checkout from "./Features/Checkout";
import AboutUs from "./Features/AboutUs";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/bus-format" element={<BusFormat />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}
