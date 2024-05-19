import React from "react";

const LandingPage = () => {
  return (
    <div className="text-4xl ">
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-screen bg-[url('../../assets/ways_chauffeur_open_door.webp')] bg-cover  ">
        <div className="absolute w-full bottom-10 md:bottom-12 lg:bottom-20 ">
          <div className="w-full px-4 sm:max-w-screen-sm md:px-2 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl  m-auto  ">
            <div className="bg-mycolor w-3/4 sm:w-1/2 p-4 px-8   lg:px-12 xl:p-12 xl:px-20 rounded  ">
              <div className="border-t border-b border-gray-400">
                <h1 className="p-3 sm:p-4 text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl  roboto-regular text-gray-800 ">
                  TOP CHAUFFEUR SERVICE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
