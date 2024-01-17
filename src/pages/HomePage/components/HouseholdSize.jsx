import React from "react";
import InfoIcon from "@mui/icons-material/Info";
function HouseholdSize() {
  return (
    <div className="p-4 w-full flex flex-col justify-end">
      <label className="font-bold" htmlFor="household-size">
        Household Size
        <InfoIcon className="relative top-[-4px] left-2" fontSize="small" />
      </label>
      <div className="relative">
        <select
          className="w-full bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg h-10"
          name="household-size"
          id="household-size"
        >
          {[...Array(8).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default HouseholdSize;
