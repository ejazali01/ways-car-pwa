import React from "react";

const ChauffeurService = () => {
  return (
    <>
      <div className="text-4xl w-full  ">
        <div className="w-full h-[30vh]  md:h-[58vh] opacity-65  bg-[url('../../assets/snipeed_Merc.jpg')] backdrop-grayscale-0 bg-contain sm:bg-cover bg-bottom bg-no-repeat  ">
          <div className="left-0 top-0 bottom-0 right-0 w-full">
            <div className=" max-w-sm md:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl  w-full mx-auto ">
              <div className="bg-mycolor bottom-[4%]   sm:bottom-[6%] md:bottom-[10%] p-2 px-6 sm:px-8 md:px-20 absolute  rounded ">
                <h1 className="lg:p-2  roboto-regular text-xs sm:text-[0.8rem] lg:text-[1.3rem] font-medium text-black ">
                  Wherever you require chauffeur service
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChauffeurService;
