import React from "react";
import InfoIcon from "@mui/icons-material/Info";
function AgeCoverage() {
  return (
    <div className="p-4 w-full flex flex-col justify-end">
      <label className="font-bold" htmlFor="age-coverage">
        Age of People Needing Coverage
        <InfoIcon className="relative top-[-4px] left-2" fontSize="small" />
      </label>
      <div className="relative">
        <input
          className="w-full md:max-w-[160px] bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg "
          placeholder="45"
          id="age-coverage"
          type="number"
        />
      </div>
    </div>
  );
}

export default AgeCoverage;
