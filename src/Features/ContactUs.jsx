import React from "react";
import NavigationComponent from "../Components/NavigationComponent";
import { AiFillRightCircle, AiFillPhone } from "react-icons/ai";
import FooterComponent from "../Components/FooterComponent";
import ScrollToTop from "../Components/ScrollToTop";

function ContactUs() {
  const phoneNumber = "+255695424038";
  return (
    <div>

      <ScrollToTop />
      <NavigationComponent />

      {/* Overlay Section */}
      <div className="relative bg-stone-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row gap-14 text-stone-200 py-10">
          <div className="flex gap-4 w-full justify-center">
            <img
              className="h-96 w-32 md:w-52 object-cover object-center"
              src="https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bus service"
            />

            <img
              className="h-80 w-32 object-cover object-right mt-20"
              src="https://images.pexels.com/photos/8067767/pexels-photo-8067767.jpeg?auto=compress&cs=tinysrgb&w=600g"
              alt="Bus service"
            />
          </div>

          <div className="w-full flex flex-col justify-center px-6">
            <h1 className="text-4xl font-bold mb-4">
              Connect With Us Anytime, Anywhere
            </h1>

            <div className=" h-1 w-32 bg-stone-200 mt-2 mb-4 rounded-full" > </div>

            <p className="mb-6">
              Have any questions or need assistance? Our team is here to help
              you with all your travel needs. Whether it's booking tickets,
              planning routes, or any other inquiries, we are just a click away.
            </p>

            <div>
            <a href={`tel:${phoneNumber}`} className="px-6 py-3 flex items-center justify-center gap-4 border border-stone-200 text-stone-200">
              <span> Give Us A Phone Call </span>
              <AiFillPhone />
            </a>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <FooterComponent />
    </div>
  );
}

export default ContactUs;
