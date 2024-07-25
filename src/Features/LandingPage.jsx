import React from "react";
import {
  FaPlane,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import NavigationComponent from "../Components/NavigationComponent";
import FooterComponent from "../Components/FooterComponent";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

export default function LandingPage() {
  return (
    <div>
      <ScrollToTop />
      <NavigationComponent />

      <div className="relative bg-img flex items-center justify-center h-screen md:h-96 bg-left md:bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center gap-3">
          <h1 className="text-2xl text-white font-medium capitalize">
            Welcome To BusXon
          </h1>
          <p className="text-stone-200 text-center">
            Your journey starts here. Book your bus tickets effortlessly and
            travel with confidence.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Link to="/booking" className="bg-stone-800 text-white px-6 py-3">
              Go to booking
            </Link>
            <Link to="/contact" className="bg-white text-stone-800 px-6 py-3">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-14  max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-5 items-center mb-14  ">
        <div className="w-full flex flex-col gap-6 px-3 md:px-0">
          <p className="text-3xl font-medium capitalize text-gray-500">
            BusXon offers the <span className="text-red-600">Fastest</span> and
            most <span className="text-blue-500">Reliable</span> bus ticketing
            service in <span>Tanzania</span>
          </p>

          <p>
            Experience the convenience of online bus ticketing with BusXon.
            Easily book your tickets and save time, ensuring a smooth and
            efficient travel experience.
          </p>

          <p>
            Our platform guarantees safe and secure transactions, giving you
            peace of mind. Travel with confidence knowing that your journey is
            handled by professionals.
          </p>

          <div>
            <Link to={'/about'} className="bg-stone-300 px-6 py-2 capitalize">
              More About Us
            </Link>
          </div>
        </div>

        <div className=" w-full flex gap-3 justify-center">
          <img
            className=" h-96 w-48 object-cover object-center"
            src="/images/dark.jpg"
            alt="transport-image"
          />

          <img
            className=" h-96 w-48 object-cover object-right mt-10"
            src="/images/dark.jpg"
            alt="transport-image"
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
