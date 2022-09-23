import React from "react";
import Map from "./Map";

const ReqSuccess = ({ results }) => {
  const { selection, restaurant } = results;
  const { name, geocodes, location } = restaurant;
  return (
    <div className="bg-white w-auto mx-2 mt-2 py-4 max-w-[1024px] lg:mx-auto">
      <p className="w-auto bg-white flex justify-center text-gray-400 text-sm">{`you should try out the ${selection} at`}</p>
      <h1 className="bg-white flex justify-center items-center text-center text-6xl text-gray-700 px-3 pt-5 pb-3">{`${name}`}</h1>
      <h2 className="bg-white flex justify-center items-center text-center px-3 mb-2 text-base text-gray-600">
        {location?.formatted_address}
      </h2>
      <Map geocodes={geocodes.main} location={location} />
      <h3 className="bg-white flex justify-center  items-center text-center text-xs text-gray-300">{`${geocodes?.main?.latitude},${geocodes?.main?.longitude} `}</h3>
    </div>
  );
};

export default ReqSuccess;
