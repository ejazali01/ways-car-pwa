import React from "react";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="w-full ">
          <img
            src="../../assets/footer_bg.svg"
            alt="footer"
            className="object-contain"
          />
        </div>

        <div className="bg-[#010110] w-full -mt-1">
          <div className="w-full px-4 sm:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl max-w-screen-xl m-auto  ">
            <div className="text-white  pt-8 ">
              <img src="../../assets/WAYS logo white trsparent.svg" alt="ways logo" className="w-36" />
            </div>
            <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />

            <footer className=" ">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="w-full  ">
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 text-sm md:text-md">
                    <div className="">
                      <h2 className="mb-6 text-xl font-semibold  uppercase text-white">
                        CLASSES
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-normal">
                        <li className="mb-3">
                          <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                          >
                            Overview
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-xl font-semibold  uppercase text-white">
                        PASSENGERS
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-normal">
                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Airport Pickup
                          </a>
                        </li>
                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Hourly Rate
                          </a>
                        </li>

                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Classy
                          </a>
                        </li>

                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Sign in / Register
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-xl font-semibold  uppercase text-white">
                        BUSINESS
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-normal">
                        <li className="mb-3">
                          <a href="#" className="hover:underline ">
                            For Your business
                          </a>
                        </li>
                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Sign in / Register
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-xl font-semibold uppercase text-white">
                        CHAUFFEURS
                      </h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-normal">
                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Join WAYS Chauffeurs
                          </a>
                        </li>
                        <li className="mb-3">
                          <a href="#" className="hover:underline">
                            Sign in / Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs md:text-sm mt-6 lg:mt-12 mb-6 gap-6 text-gray-500 dark:text-gray-400 font-normal">
                  <a href="#" className="hover:underline">
                    <h2>FAQ</h2>
                  </a>
                  <a href="#" className="hover:underline">
                    <h2>Contact Us</h2>
                  </a>

                  <a href="#" className="hover:underline">
                    <h2>Help</h2>
                  </a>
                </div>
                <hr className="my-4 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-4" />
                <div className="flex justify-end">
                  <a href="#">
                    <img
                      src="../../assets/app-store.png"
                      alt="app-store"
                      className="object-contain w-24 h-10 border rounded-lg hover:border-none cursor-pointer"
                    />
                  </a>
                </div>
                <hr className="my-4 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-4" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="flex mt-4 sm:justify-center items-center sm:mt-0 text-xs md:text-sm">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <span className="">Terms & Conditions</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                    >
                      <span className="">Privacy Policy</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                    >
                      <span className="">Cookies Policy</span>
                    </a>
                  </div>
                  <span className="flex items-center gap-1 md:text-sm text-xs text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="#" className="hover:underline">
                      Copyright WAYScars™
                    </a>
                    <span>© 2022</span>. All Rights Reserved.
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
