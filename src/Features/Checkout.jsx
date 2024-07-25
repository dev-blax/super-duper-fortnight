import React from "react";
import NavigationComponent from "../Components/NavigationComponent";
import { Link } from "react-router-dom";
import { BsTicketPerforatedFill } from "react-icons/bs";
import "./ticket.css";
import FooterComponent from "../Components/FooterComponent";
import ScrollToTop from "../Components/ScrollToTop";

function Checkout() {
  return (
    <div>
      <ScrollToTop />
      <NavigationComponent />

      <div className=" bg-stone-200 py-5">
      <div className=" flex flex-col items-center md:flex-row mx-auto max-w-7xl ">
        <div className="w-full h-[500px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/18029608/pexels-photo-18029608/free-photo-of-seats-in-bus.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <header className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl">
            <BsTicketPerforatedFill />
            <span> Checkout </span>
          </header>
        </div>
        <div className=" w-full flex flex-col items-center justify-center py-10 px-2 md:px-0">
          <div className="relative bg-white shadow-lg w-full max-w-md mx-auto p-8">
            <header className="text-center text-xl mb-4">Checkout</header>

            <div className="ticket-container relative bg-stone-100 p-6 border-2 border-stone-300 text-stone-400">
              <div className="ticket-half-circle left-0 top-0"></div>
              <div className="ticket-half-circle right-0 top-0"></div>

              <div className="border-b-2 border-dashed border-stone-300 my-4"></div>

              <div>
                <header className="font-semibold text-lg mb-2 text-stone-600">
                  Personal Details
                </header>
                <p className="mb-1">
                  Name: <span className=" text-stone-600">James Michale</span>
                </p>
                <p className="mb-1">
                  Phone:{" "}
                  <span className="text-stone-600">+255-765-123-567</span>
                </p>
              </div>

              <div className="border-b-2 border-dashed border-stone-300 my-4"></div>

              <div>
                <header className="font-semibold text-lg mb-2">
                  Travel Details
                </header>
                <p className="mb-1">
                  Bus: <span className="text-stone-600">Kimbinyiko Coach</span>
                </p>
                <p className="mb-1">
                  Seat No: <span className="text-stone-600">46</span>
                </p>
                <p className="mb-1">
                  Travel Date:{" "}
                  <span className="text-stone-600">28 July 2024</span>
                </p>
                <p className="mb-1">
                  Departure:{" "}
                  <span className="text-stone-600">Dar-es-salaam</span>
                </p>
                <p className="mb-1">
                  Destination: <span className="text-stone-600">Dodoma</span>
                </p>
                <p className="mb-1">
                  Cost Price: <span className="text-stone-600">45,000/=</span>
                </p>
              </div>
            </div>

            
          </div>

          <div>
          <button className=" text-stone-200 bg-stone-800 px-6 py-3 mt-5 mx-auto">
              {" "}
              Proceed To Payment{" "}
            </button>
          </div>
        </div>
      </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Checkout;
