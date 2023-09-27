import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-black cursor-pointer border-2 border-white flex p-10 items-center justify-between text-sm text-white font-medium">
      {/* logo */}
      <div>Hello
        <svg></svg>
      </div>
      {/* PLayground Learn options */}
      <div className="flex gap-4">
        <div className="hover:scale-105 transition hover:ease-in-out">Playground</div>
        <div className="hover:scale-105 transition hover:ease-in-out">Learn</div>
      </div>
      {/* Profile / Sign in option */}
      {/* Logic for showing whether to show profile image or sign in Image */}
      <Link to="/signin">
        <button className="p-2 px-4 rounded-xl border-1 border-white"> Sign In</button>
      </Link>
      <Link  className="hidden" to="/signin">
        <button className="p-2 px-4 rounded-xl border-1 border-white"> Sign In</button>
      </Link>
    </div>
  );
};

export default Navbar;
