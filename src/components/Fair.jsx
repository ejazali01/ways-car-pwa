import React from "react";
import cars from "../config/db";
import { FaRegCircleUser } from "react-icons/fa6";
import { TfiBag } from "react-icons/tfi";


const Fair = () => {

  return (
    <>
      <div className="container w-full px-4 md:px-0 sm:py-10 md:py-20 max-w-screen-xl md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl  m-auto ">
        <h2 className="text-4xl  mb-10 text-gray-500 roboto-thin font-normal">
          Get your fixed fare
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 roboto-thin font-normal p-2 ">
          {cars.map((car) => (
            <div
              key={car?.id}
              className="bg-white shadow-md hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300 rounded overflow-hidden roboto-thin font-normal"
            >
              <h3 className="text-lg font-normal  roboto-thin text-center border-b-2 border-gray-300 py-2 mx-4 text-gray-700">{car?.type}</h3>
              <img
                src={car?.image}
                alt={car?.name}
                className="w-full h-28 object-contain roboto-thin font-normal"
              />
              <div className="p-4">
                
                <p className="text-gray-700 mb-4 roboto-thin font-normal text-center">{car?.name}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaRegCircleUser className="text-lg"/>
                  <span className="roboto-thin font-normal text-xs">Passenger {car?.passengers}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <TfiBag className="text-lg" />
                  <span className="roboto-thin font-normal text-xs">Luggage x {car?.luggage}</span>
                </div>
                <button className="bg-[#010111d9] roboto-thin font-normal text-white py-2 px-4 rounded hover:bg-[#010111] w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fair;
