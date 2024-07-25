import React from "react";
import { FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function FooterComponent() {
  return (
    <footer className=" bg-stone-600 px-4 md:px-0 ">
      <div className=" max-w-7xl mx-auto py-3 text-white flex items-center justify-between">
        <h1> BusXon</h1>

        <div className=" flex items-center gap-4 ">
          <Link to={'https://x.com/blax_dev'}>
            <FaXTwitter />
          </Link>

          <FaFacebook />

          <FaYoutube />

          <FaPinterest />
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
