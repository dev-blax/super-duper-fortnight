import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import NavigationComponent from "../Components/NavigationComponent";
import { Link } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import ScrollToTop from "../Components/ScrollToTop";

const seats = Array.from({ length: 50 }, (_, i) => ({
  number: i + 1,
  isAvailable: true,
}));

function BusFormat() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const renderSeats = () => {
    return seats.map((seat) => {
      const isSelected = selectedSeat && selectedSeat.number === seat.number;
      const seatClass = isSelected
        ? "bg-stone-500 text-white"
        : "bg-gray-300 text-black";

      return (
        <div
          key={seat.number}
          className={`relative flex  items-center justify-center p-4 m-1 cursor-pointer ${seatClass}`}
          onClick={() => handleSeatClick(seat)}
        >
          <span className="absolute top-1 left-1 text-xs">{seat.number}</span>
          <MdEventSeat />
        </div>
      );
    });
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < seats.length; i += 4) {
      rows.push(
        <div key={i} className="flex">
          {renderSeats().slice(i, i + 2)}
          <div className="w-10 h-10 m-1" />
          {renderSeats().slice(i + 2, i + 4)}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>

      <ScrollToTop />  
      <NavigationComponent />
      <div className=" bg-stone-200 py-6">
        <div className=" flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className=" w-full relative ">
            <img
              className=" w-full object-cover object-left"
              src="https://images.pexels.com/photos/21050842/pexels-photo-21050842/free-photo-of-interior-of-bus-on-street.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="some-alt"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <header className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white text-3xl">
              <p className=" flex items-center  gap-3 "> <span> Select Your </span> <span> <MdEventSeat /> </span> </p>
              <div className=" h-1 w-20 bg-stone-200 rounded-full"></div>
            </header>
          </div>
          <div className="flex flex-col items-center py-4 w-full">
            <div className="grid grid-rows-12 gap-2">{renderRows()}</div>
            {selectedSeat && (
              <div className=" mt-4 text-center">
                <Link
                  to={"/checkout"}
                  className="mt-2 px-4 py-2 bg-stone-500 text-white hover:shadow-sm capitalize"
                >
                  Proceed to Booking for seat no: {selectedSeat.number}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default BusFormat;
