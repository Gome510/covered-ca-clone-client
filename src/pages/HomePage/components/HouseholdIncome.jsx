import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
function HouseholdIncome() {
  return (
    <div className="p-4 w-full col-span-2 sm:col-span-1 flex flex-col justify-end">
      <label className="font-bold" htmlFor="household-income">
        Household Income
        <InfoIcon className="relative top-[-4px] left-2" fontSize="small" />
      </label>
      <div className="relative">
        <AttachMoneyIcon className="absolute top-2 left-2" fontSize="small" />
        <input
          className="max-w-[160px] bg-gray-100 border-b-2 border-solid border-black leading-9 pl-10 text-lg "
          id="household-income"
          type="number"
          placeholder="28,000"
        />
      </div>
    </div>
  );
}

export default HouseholdIncome;
