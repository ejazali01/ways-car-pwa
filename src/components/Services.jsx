import React, { useRef } from "react";

const Services = () => {
  // Licensed Chauffeur Service
  const parentDivRef_1 = useRef(null);
  const childDivRef_1 = useRef(null);

  const parentDivRef_2 = useRef(null);
  const childDivRef_2 = useRef(null);

  const handleMouseEnter = (id) => {
    if (id === "id_1") {
      parentDivRef_1.current.appendChild(childDivRef_1.current);
      childDivRef_1.current.style.display = "block";
      childDivRef_1.current.style.transition = "all 1s ease-in-out";
    }
    if (id === "id_2") {
      parentDivRef_2.current.appendChild(childDivRef_2.current);
      childDivRef_2.current.style.display = "block";
      childDivRef_2.current.style.transition = "all 1s ease-in-out";
    }
  };

  const handleMouseLeave = () => {
    if (parentDivRef_1.current && childDivRef_1.current) {
      childDivRef_1.current.style.display = "none";
    }
    if (parentDivRef_2.current && childDivRef_2.current) {
      childDivRef_2.current.style.display = "none";
    }
  };

  return (
    <>
      <div className="text-4xl  ">
        <div className=" w-full  bg-[url('../../assets/image_for_landing_page_top.webp')] bg-cover  ">
          <div className="bg-mybg w-full h-full">
            <div className=" max-w-md py-12 sm:py-20 sm:max-w-lg md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto px-4 sm:px-0">
              <div className=" w-full ">
                <div className=" p-4 pb-8 ">
                  <h1 className=" text-center text-[1.3rem] sm:text-[1.6rem] md:text-[2.3rem] roboto-regular text-gray-500 ">
                    Licensed Chauffeur Service
                  </h1>
                </div>

                <div className="w-full flex flex-wrap h-28 ">
                  <div
                    onMouseEnter={() => handleMouseEnter("id_1")}
                    onMouseLeave={handleMouseLeave}
                    ref={parentDivRef_1}
                    className="relative border-3 shadow-md  w-full md:w-1/2 h-full"
                  >
                    <div className=" bg-white border hover:bg-[#0E0F30] hover:text-white hover:transition-all hover:ease-in-out hover:duration-500 p-6 h-full flex items-center justify-center">
                      <h1 className="text-center text-[1rem] md:text-[1.2rem] font-normal roboto-medium ">
                        Fixed Fares Across the UK
                      </h1>
                    </div>
                    <div
                      ref={childDivRef_1}
                      className="  hidden absolute top-0 left-0 right-0 border bg-[#0E0F30] text-white transition-all ease-in-out duration-500 border-3 shadow-md  w-full h-full p-6 flex items-center justify-center"
                    >
                      <h1 className="text-center text-xs lg:text-sm font-normal roboto-medium ">
                        With our fixed fares, you can enjoy peace of mind,
                        knowing that the price you see is the price you pay,
                        regardless of traffic conditions or route changes.
                      </h1>
                    </div>
                  </div>

                  <div
                    ref={parentDivRef_2}
                    onMouseEnter={() => handleMouseEnter("id_2")}
                    onMouseLeave={handleMouseLeave}
                    className="relative  border-3 shadow-md w-full md:w-1/2 h-full"
                  >
                    <div className=" bg-white border hover:bg-[#0E0F30] hover:text-white hover:transition-all hover:ease-in-out hover:duration-500 p-6 h-full flex items-center justify-center ">
                      <h1 className="text-center text-[1rem] md:text-[1.2rem] font-normal roboto-medium">
                        Professional Chauffeurs
                      </h1>
                    </div>

                    <div
                      ref={childDivRef_2}
                      className="hidden hover:flex absolute top-0 left-0 right-0 border bg-[#0E0F30] text-white transition-all ease-in-out duration-500 w-full  items-center justify-center  h-full p-6 "
                    >
                      <h1 className="text-center text-xs lg:text-sm font-normal roboto-medium ">
                        Our skilled chauffeurs offer premium, punctual, and safe
                        transportation dedicated to your comfort. Whether for
                        business or leisure, trust our professionals to drive
                        you.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
