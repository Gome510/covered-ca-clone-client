import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function MobileStartOver() {
  return (
    <div className="md:hidden rounded-b-lg bg-gradient-to-r from-pacific-blue to-white text-black ">
      Start Over
      <button className="rounded-full shadow-sm shadow-black/50 p-2 ml-1">
        <KeyboardArrowUpIcon fontSize="medium" />
      </button>
    </div>
  );
}

export default MobileStartOver;
