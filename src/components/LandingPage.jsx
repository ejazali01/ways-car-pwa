import React from "react";

const LandingPage = () => {
  return (
    <div className="text-4xl ">
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-screen bg-[url('../../assets/ways_chauffeur_open_door.webp')] bg-cover  ">
        <div className="absolute w-full left-0 top-0 ">
          <div className="w-full max-w-screen-xl mx-auto ">
            <div className="bg-mycolor p-8 px-12 md:p-12 md:px-20 rounded ">
              <div className="border-t border-b border-gray-400">
                <h1 className="p-4 text-2xl md:text-4xl lg:text-3xl  roboto-regular text-gray-800 ">
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
