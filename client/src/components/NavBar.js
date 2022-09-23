import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const num = Math.random();

  return (
    <nav className="bg-gray-900 w-screen mb-5">
      <div className="h-12 text-lg flex justify-between items-center p-3 max-w-[1024px] lg:h-16 lg:mx-auto lg:text-2xl">
        <Link className="inline-block lg:px-4" to="/">
          {num < 0.5 ? <span>🍔</span> : <span>🥗</span>}
        </Link>
        <div className="hidden lg:flex">
          <Link className="text-white px-4" to="/how">
            How
          </Link>
          <Link className="text-white px-4" to="/about">
            About
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Link className="p-2" to="/how">
            ⚙️
          </Link>
          <Link className="p-2" to="/about">
            🙋‍♂️
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
