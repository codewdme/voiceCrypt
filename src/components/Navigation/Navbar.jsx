import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex p-6 px-16 justify-between w-full">
      {/* Capsule Logo and Menu */}
      <div className="flex gap-6">
        <div>VoiceCrpyt</div>
        <div className="hidden">
          <Menu />
        </div>
      </div>

      {/* Download Button */}
      <div>Download</div>
    </div>
  );
};

export default Navbar;
