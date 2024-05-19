import React from "react";

const Transfers = () => {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto  py-20 px-2">
        <h2 className="text-4xl mb-10 text-gray-500 roboto-thin font-normal">
          Airport transfers
        </h2>

        <div className="flex justify-between items-center flex-wrap ">
          <div className="shadow sm:shadow-md  p-4 rounded w-full sm:max-w-[32%]">
            <h1 className="py-2 border-b border-gray-400 text-2xl roboto-regular">
              Elegance
            </h1>
            <h3 className="roboto-regular py-3 text-sm">
              Embrace style and luxury with our Airport Transfer service. Our
              expert chauffeurs ensure your airport journey is seamless and
              comfortable.
            </h3>
          </div>

          <div className="shadow sm:shadow-md p-4 rounded w-full sm:max-w-[32%]">
            <h1 className="py-2 border-b border-gray-400 text-2xl roboto-regular">
              Promptitude
            </h1>
            <h3 className="roboto-regular py-3 text-sm">
              Our service relies on punctuality and efficiency. Count on us for
              timely and reliable airport transfers, ensuring your journeys are
              always on schedule
            </h3>
          </div>

          <div className="shadow sm:shadow-md p-4 rounded w-full sm:max-w-[32%]">
            <h1 className="py-2 border-b border-gray-400 text-2xl roboto-regular">
              Discretion
            </h1>
            <h3 className="roboto-regular py-3 text-sm">
              Our Chauffeurs will emphasize the commitment to maintaining the
              confidentiality and privacy of the passengers.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
