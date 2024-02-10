import React from "react";

function HouseholdNeedingCoverage() {
  return (
    <div className="p-4 w-full col-span-2 sm:col-span-1 flex flex-col justify-end">
      <div className="w-full">
        <label className="font-bold" htmlFor="household-needing-coverage">
          When do you want to start coverage?
        </label>
        <div className="relative">
          <select
            className="w-full bg-input border-b-2 border-solid border-black leading-9 pl-5 text-lg h-10"
            name="household-needing-coverage"
            id="household-needing-coverage"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HouseholdNeedingCoverage;
