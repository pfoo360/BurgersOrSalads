import React from "react";

const How = () => {
  return (
    <div className="m-2 w-auto max-w-[1024px] lg:mx-auto">
      <div className="m-2">
        <h1 className=" text-xl text-gray-700 font-bold">How To Use</h1>
        <p className="ml-4 mb-2 text-gray-600">
          Simply type the food(s) you want to eat.
        </p>
        <p className="ml-4 text-gray-600">
          Select how far you are willing to travel.
        </p>
        <p className="ml-4 mb-4 text-xs text-gray-500 text-opacity-40">
          {`Distance has to be <100,000 meters or equivalent.`}
        </p>
        <p className="ml-4 mb-2 text-gray-600">
          Hit{" "}
          <span className="bg-purple-500 text-white font-bold text-center px-4 py-1 rounded">
            Submit
          </span>
          {"    "}
          and the app will find a restaurant corresponding to one of your
          food(s) for you!
        </p>
      </div>
      <div className="mx-2 my-2 mt-8">
        <h1 className=" text-xl text-gray-700 font-bold">Credits</h1>
        <p className="ml-4 text-gray-600 mb-2">
          The backend queries the Foursquare Places API to find an appropiate
          restaurant.
        </p>
        <p className="ml-4 text-gray-600 mb-2">
          Special thanks to Foursquare for making this app possible!
        </p>
      </div>
    </div>
  );
};

export default How;
