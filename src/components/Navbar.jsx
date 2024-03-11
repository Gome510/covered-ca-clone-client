import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <nav className=" flex items-center justify-between px-4 py-2 bg-primary drop-shadow-lg ">
      <button className="w-36 text-left focus:outline-2 focus:outline rounded-full">
        <MenuIcon />
      </button>
      <div className="">
        <img
          width={40}
          src="https://enrollca.com/wp-content/uploads/2021/05/CCA-Logo.png"
          alt="Covered California Logo"
        />
      </div>
      <div className="w-36 flex justify-end">
        <button className="flex items-center border border-white rounded-full px-4 py-0.5 font-bold text-sm">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
