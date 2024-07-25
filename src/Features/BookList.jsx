import React from "react";
import NavigationComponent from "../Components/NavigationComponent";
import { Link } from "react-router-dom";
import { MdEventSeat } from "react-icons/md";
import FooterComponent from "../Components/FooterComponent";
import "./Booklist.css";
import ScrollToTop from "../Components/ScrollToTop";

const BusCard = ({
  image,
  classType,
  availability,
  features,
  title,
  description,
}) => (
  <div>
    <div className="relative">
      <img
        className="h-52 w-full object-cover object-left"
        src={image}
        alt={`${title} bus`}
      />
      <p className="absolute top-2 right-2 bg-stone-600/80 text-white px-3 py-1.5 text-xs">
        {classType}
      </p>
      <div className="bg-stone-600/80 w-full text-white flex gap-10 text-xs absolute bottom-0 px-4 py-2">
        <p>{availability}</p>
        <p>{features}</p>
      </div>
    </div>
    <div className="flex flex-col bg-stone-800 text-white p-8">
      <h1 className=" uppercase mb-2">{title}</h1>
      <p className=" text-xs">{description}</p>
      <div className="mt-5">
        <Link to={'/bus-format'} className="border border-stone-700 px-6 py-3 flex items-center gap-3 justify-center">
          <span>Reserve A Seat</span>
          <MdEventSeat className="text-xl" />
        </Link>
      </div>
    </div>
  </div>
);

function BookList() {
  const busData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963208071-9a65b048ebaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww",
      classType: "Business Class",
      availability: "24 Seats",
      features: "WiFi, Charging Ports",
      title: "Kimbinyiko Classic",
      description:
        "Experience a comfortable journey with Kimbinyiko Classic. Enjoy amenities like WiFi and charging ports for your convenience.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
      classType: "Luxury Class",
      availability: "50 Seats",
      features: "Reclining Seats, Refreshments",
      title: "Abood Coach",
      description:
        "Travel in luxury with Abood Coach. Enjoy reclining seats and complimentary refreshments during your journey. Safe Travels hola..",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547886597-7e87e5288619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
      classType: "Economy Class",
      availability: "30 Seats",
      features: "Air Conditioning, TV",
      title: "HappyNation Express",
      description:
        "Affordable and comfortable travel with HappyNation Express. Features include air conditioning and TV for entertainment.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963208071-9a65b048ebaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww",
      classType: "Business Class",
      availability: "24 Seats",
      features: "WiFi, Charging Ports",
      title: "Kimbinyiko Classic",
      description:
        "Experience a comfortable journey with Kimbinyiko Classic. Enjoy amenities like WiFi and charging ports for your convenience.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963542752-9a8a1d72fb28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
      classType: "Luxury Class",
      availability: "50 Seats",
      features: "Reclining Seats, Refreshments",
      title: "Abood Coach",
      description:
        "Travel in luxury with Abood Coach. Enjoy reclining seats and complimentary refreshments during your journey. Safe Travels hola..",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547886597-7e87e5288619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
      classType: "Economy Class",
      availability: "30 Seats",
      features: "Air Conditioning, TV",
      title: "HappyNation Express",
      description:
        "Affordable and comfortable travel with HappyNation Express. Features include air conditioning and TV for entertainment.",
    },
  ];

  return (
    <div>
      <ScrollToTop />
      <NavigationComponent />

      <div className=" bg-booklist bg-stone-200 py-5 bg-cover bg-top relative">
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <header className="text-center text-2xl capitalize">
          Available Buses
        </header>
        <div className="h-1 w-20 bg-stone-700 mx-auto my-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl pb-10 px-4 md:px-0">
          {busData.map((bus, index) => (
            <BusCard key={index} {...bus} />
          ))}
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default BookList;
