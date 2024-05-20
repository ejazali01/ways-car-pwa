import React, { useRef, useState } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const [open, setOpen] = useState();
  const drawerRef = useRef();

  const ToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-white z-10 fixed w-full py-2 text-gray-500 shadow-md  border-gray-200 ">
        <div className="px-10 max-w-screen-sm md:px-2 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl  m-auto flex flex-wrap items-center justify-between  roboto-regular">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../assets/WAYS trsp black.svg"
              alt="ways logo"
              className="w-28"
            />
          </a>
          {/* mobile view */}
          <button
            onClick={ToggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block  roboto-regular md:w-auto roboto-regular"
            id="navbar-default"
          >
            <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-gray-600">
              <li>
                <a
                  href="#"
                  className="block  roboto-regular py-2 px-3 rounded text-gray-600 hover:text-gray-800  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  roboto-regular py-2 px-3 rounded text-gray-600 hover:text-gray-800  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  roboto-regular py-2 px-3 rounded text-gray-600 hover:text-gray-800  "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  roboto-regular py-2 px-3 rounded text-gray-600 hover:text-gray-800  "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  roboto-regular py-2 px-3 rounded text-gray-600 hover:text-gray-800  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && <Drawer drawerRef={drawerRef} open={open} />}
    </>
  );
};

export default Navbar;
