import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
function Navbar() {
  return (
    <nav className=" sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-primary drop-shadow-lg text-white">
      <button
        className="w-36 text-left focus:outline-2 focus:outline rounded-full"
        aria-label="Toggle Navigation"
      >
        <MenuIcon />
      </button>
      <div className="">
        <Image
          width={40}
          height={40}
          src="/assets/images/CCA-Logo-mobile.svg"
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
