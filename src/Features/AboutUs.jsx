import React from "react";
import NavigationComponent from "../Components/NavigationComponent";
import FooterComponent from "../Components/FooterComponent";
import ScrollToTop from "../Components/ScrollToTop";
import { AiFillRightCircle } from "react-icons/ai";

function AboutUs() {
  return (
    <div>
      <ScrollToTop />
      <NavigationComponent />

      {/* Overlay Section */}
      <div className="relative bg-stone-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row gap-14 text-stone-200 py-10">
          <div className="flex flex-col items-center md:items-start w-full justify-center px-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="h-1 w-32 bg-stone-200 mt-2 mb-4 rounded-full"></div>
            <p className="mb-6">
              Welcome to BusXon, your trusted travel partner. We are committed to providing the best travel experience with our reliable and comfortable bus services. Our mission is to make your journey safe, enjoyable, and memorable.
            </p>
            <p className="mb-6">
              Our team of dedicated professionals works tirelessly to ensure you receive top-notch service from booking to arrival. We value your comfort and satisfaction above all else.
            </p>
            <p className="mb-6">
              Join us on this journey and discover why BusXon is the preferred choice for travelers.
            </p>
          </div>

          <div className="flex gap-4 w-full justify-center">
            <img
              className="h-96 w-32 md:w-52 object-cover object-left"
              src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bus service"
            />

            <img
              className="h-80 w-32 object-cover object-right mt-20"
              src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bus service"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-stone-200 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 hover:shadow-lg flex flex-col items-center text-center">
              <img
                className="h-32 w-32 rounded-full object-cover mb-4"
                src="https://media.istockphoto.com/id/2030298859/photo/arab-man-looking-away.webp?b=1&s=170667a&w=0&k=20&c=JbEvvwmynsk5_q_6BVQs7BvzCO472ZFw-ZYQb7y1fSo="
                alt="Team member"
              />
              <h3 className="text-xl font-bold mb-2">Saly Mpemba</h3>
              <p className="text-stone-600 mb-4">CEO & Founder</p>
              <p>
                Saly leads the company with a vision to revolutionize the travel
                industry. His experience and dedication are the backbone of
                BusXon.
              </p>
            </div>
            <div className="bg-white p-6 hover:shadow-lg flex flex-col items-center text-center">
              <img
                className="h-32 w-32 rounded-full object-cover mb-4"
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team member"
              />
              <h3 className="text-xl font-bold mb-2">James Smith</h3>
              <p className="text-stone-600 mb-4">Chief Operating Officer</p>
              <p>
                James ensures everything runs smoothly, overseeing operations
                with efficiency and a keen eye for detail.
              </p>
            </div>
            <div className="bg-white p-6 hover:shadow-lg flex flex-col items-center text-center">
              <img
                className="h-32 w-32 rounded-full object-cover mb-4"
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team member"
              />
              <h3 className="text-xl font-bold mb-2">Jane Johnson</h3>
              <p className="text-stone-600 mb-4">Head of Customer Service</p>
              <p>
                Jane is dedicated to providing excellent customer support,
                ensuring your experience with BusXon is seamless and
                enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default AboutUs;
