import React from "react";
import HouseholdIncome from "../components/HouseholdIncome";
import ZipCode from "../components/ZipCode";
import HouseholdCoverage from "../components/HouseholdCoverage";
import HouseholdNeedingCoverage from "../components/HouseholdNeedingCoverage";
import AgeCoverage from "../components/AgeCoverage";
import HouseholdSize from "../components/HouseholdSize";

function OpenEnrollForm() {
  function handleFormSubmit() {
    return;
  }

  return (
    <form
      className="w-full flex flex-col bg-white text-black text-left rounded-lg py-8 gap-3 "
      onSubmit={handleFormSubmit}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <HouseholdIncome />
        <ZipCode />
        <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
        <HouseholdSize />
        <HouseholdCoverage />
        <HouseholdNeedingCoverage />
      </div>
      <AgeCoverage />
      <div className="flex justify-center px-4">
        <button
          className="rounded-full bg-light-denim text-white py-2 w-full md:w-48 m-auto "
          type="submit"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}

export default OpenEnrollForm;
