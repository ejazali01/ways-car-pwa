import React from "react";

const Drawer = ({ drawerRef, open }) => {
  return (
    <>
      {/* <!-- drawer component --> */}
      <div
        ref={drawerRef}
        id="drawer-body-scrolling"
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full "
        } bg-white w-full transition-all ease-out duration-500  `}
        tabindex="-1"
        aria-labelledby="drawer-body-scrolling-label"
        style={{ transition: "transform 500ms ease-in-out" }}
      >
        <div className="flex items-center">
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
          <button
            type="button"
            data-drawer-hide="drawer-body-scrolling"
            aria-controls="drawer-body-scrolling"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center "
            onClick={() =>
              (drawerRef.current.style.transform = "translateX(100%)")
            }
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="py-4 ">
          <ul id="dropdown-example" className=" py-2 ">
            <li className="flex items-center w-full p-1 text-black font-semibold text-2xl transition duration-75 rounded-lg pl-11 group ">
              CLASSES
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Overview
              </a>
            </li>
          </ul>

          <ul id="dropdown-example" className=" py-2 ">
            <li className="flex items-center w-full p-1 text-black font-semibold text-2xl transition duration-75 rounded-lg pl-11 group ">
              PASSENGERS
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Airport pickup
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Hourly rate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Classy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Sign In /Register
              </a>
            </li>
          </ul>

          <ul id="dropdown-example" className=" py-2 ">
            <li className="flex items-center w-full p-1 text-black font-semibold text-2xl transition duration-75 rounded-lg pl-11 group ">
              BUSINESS
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Prebook for
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Sign In /Register
              </a>
            </li>
          </ul>

          <ul id="dropdown-example" className=" py-2 ">
            <li className="flex items-center w-full p-1 text-black font-semibold text-2xl transition duration-75 rounded-lg pl-11 group ">
              CHAUFFEURS
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Join WAYS Chauffeurs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:underline underline-offset-4"
              >
                Sign In /Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
