import React, { useState } from "react";
import NavigationComponent from "../Components/NavigationComponent";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AiFillDownCircle, AiFillSafetyCertificate } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoTicketSharp } from "react-icons/io5";
import FooterComponent from "../Components/FooterComponent";
import { IoTime } from "react-icons/io5";
import { IoSpeedometer } from "react-icons/io5";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import { FaBus } from "react-icons/fa";

const SelectMenu = ({ label, options, selected, setSelected }) => (
  <div className="flex flex-col gap-1 relative">
    <h1 className=" text-xs text-stone-400">{label}</h1>
    <Menu>
      <MenuButton className="w-60 inline-flex items-center justify-between gap-2 rounded-none bg-stone-200 py-3 px-6 text-sm font-semibold text-stone-800 focus:outline-none hover:bg-stone-300">
        <span>{selected}</span>
        <AiFillDownCircle className="size-4 fill-stone-800/60" />
      </MenuButton>
      <MenuItems className="absolute mt-1 shadow-xl w-60 origin-top-right rounded-none border border-gray-300 bg-white p-1 text-sm text-gray-800 focus:outline-none z-50">
        {options.map((option) => (
          <MenuItem key={option}>
            {({ active }) => (
              <button
                className={`group flex w-full items-center gap-2 rounded-none py-1.5 px-3 ${
                  active ? "bg-stone-200" : ""
                }`}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  </div>
);

function BookingPage() {
  const [selectedBus, setSelectedBus] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [travelDate, setTravelDate] = useState(new Date());

  const busOptions = [
    "Abood Bus Service",
    "Kimbinyiko Bus Service",
    "Shabiby Coach",
    "Ally Star",
    "Happy Nation Coach",
  ];

  const cityOptions = ["Dodoma", "Arusha", "Mwanza", "Mbeya", "Kilimanjaro"];

  return (
    <div>
      <ScrollToTop />
      <NavigationComponent />

      {/*  */}
      <div className="bg-stone-100">
        <div className="md:max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 py-10">
            <div className="w-full relative">
              <img
                className=" h-96 w-full object-cover object-center"
                src="https://plus.unsplash.com/premium_photo-1677419807331-072575b7f26d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwYnVzfGVufDB8fDB8fHww"
                alt="Bus service"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <header className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white text-3xl">
                <p className=" flex items-center  gap-3 ">
                  {" "}
                  <span> Travel Details </span>{" "}
                  <span>
                    {" "}
                    <FaBus />{" "}
                  </span>{" "}
                </p>
                <div className=" h-1 w-20 bg-stone-200 rounded-full"></div>
              </header>
            </div>
            <div className="w-full flex flex-col gap-4 items-center">
              {/* <SelectMenu
                label="Select Bus"
                options={busOptions}
                selected={selectedBus}
                setSelected={setSelectedBus}
              /> */}
              <SelectMenu
                label="Departure City"
                options={cityOptions}
                selected={departureCity}
                setSelected={setDepartureCity}
              />
              <SelectMenu
                label="Destination City"
                options={cityOptions}
                selected={destinationCity}
                setSelected={setDestinationCity}
              />

              <div className="flex flex-col gap-1">
                <h1>Travel Date</h1>
                <DatePicker
                  selected={travelDate}
                  onChange={(date) => setTravelDate(date)}
                  className="w-60 inline-flex items-center justify-between gap-2 rounded-none bg-stone-200 py-3 px-6 text-sm font-semibold text-stone-800 focus:outline-none hover:bg-stone-300"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()} // Set minimum date to today
                />
              </div>

              <div className="mt-2">
                <Link
                  to={"/booklist"}
                  className="w-60 bg-stone-800 text-white px-6 py-3 flex gap-3 items-center justify-center capitalize"
                >
                  <FaBus /> <span>Search for a bus</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row text-white mb-10">
        <div className="w-full bg-stone-400 flex items-center py-6 px-6 gap-6">
          <IoTime className="text-4xl" />
          <div>
            <h1 className=" text-xl">Save Time</h1>
            <p className="text-xs text-stone-200">
              Book your tickets in minutes without the need to stand in long
              queues at bus stops.
            </p>
          </div>
        </div>

        <div className="w-full bg-stone-700 flex items-center py-6 px-6 gap-6">
          <AiFillSafetyCertificate className="text-4xl" />
          <div>
            <h1 className="text-xl">Safe Travel</h1>
            <p className="text-xs text-stone-200">
              Enjoy a secure and hassle-free booking experience from the comfort
              of your home.
            </p>
          </div>
        </div>

        <div className="w-full bg-stone-800 flex items-center py-6 px-6 gap-6">
          <IoSpeedometer className="text-4xl" />
          <div>
            <h1 className="text-xl">Speed and Convenience</h1>
            <p className="text-xs text-stone-200">
              Quickly find and book buses with just a few clicks, saving you
              valuable time and effort.
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default BookingPage;
