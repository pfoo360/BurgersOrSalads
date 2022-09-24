import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <>
      <div className="flex justify-center pt-4 max-w-[1024px] lg:mx-auto">
        <h1 className="text-gray-900 text-9xl lg:text-[256px]">404</h1>
      </div>
      <div className="flex justify-center align-middle mt-4 max-w-[1024px] lg:mx-auto">
        <Link className="text-4xl lg:text-8xl" to="/">
          🏠
        </Link>
      </div>
    </>
  );
};

export default Missing;
