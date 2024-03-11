import React from "react";

function HouseholdCoverage() {
  return (
    <div className="p-4 w-full flex flex-col justify-end">
      <label className="font-bold" htmlFor="household-coverage">
        How many need coverage?
      </label>
      <div className="relative">
        <select
          className="w-full bg-input border-b-2 border-solid border-black leading-9 pl-5 text-lg h-10"
          name="household-coverage"
          id="household-coverage"
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

export default HouseholdCoverage;
