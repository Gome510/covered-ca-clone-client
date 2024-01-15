import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";

function OpenEnrollForm() {
  function handleFormSubmit() {
    return;
  }

  return (
    <form
      className="w-full flex flex-col bg-white text-black text-left rounded-lg px-4 py-8 gap-3 "
      onSubmit={handleFormSubmit}
    >
      <div className=" flex flex-col sm:flex-row gap-8">
        <div>
          <label className="font-bold" htmlFor="household-income">
            Household Income
            <InfoIcon className="relative top-[-4px] left-2" fontSize="small" />
          </label>
          <div className="relative">
            <AttachMoneyIcon
              className="absolute top-2 left-2"
              fontSize="small"
            />
            <input
              className="bg-gray-100 border-b-2 border-solid border-black leading-9 pl-10 text-lg "
              id="household-income"
              type="number"
              placeholder="28,000"
            />
          </div>
        </div>
        <div>
          <label className="font-bold" htmlFor="zip-code">
            ZIP Code
          </label>
          <div className="relative">
            <input
              className="bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg "
              id="zip-code"
              type="number"
              placeholder="95834"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
        <div className="">
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
        <div>
          <label className="font-bold" htmlFor="household-coverage">
            How many need coverage?
          </label>
          <div className="relative">
            <select
              className="w-full bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg h-10"
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
        <div className="col-span-2 sm:col-span-1">
          <div className="w-full">
            <label className="font-bold" htmlFor="household-needing-coverage">
              When do you want to start coverage?
            </label>
            <div className="relative">
              <select
                className="w-full bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg h-10"
                name="household-needing-coverage"
                id="household-needing-coverage"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="font-bold" htmlFor="age-coverage">
            Age of People Needing Coverage
            <InfoIcon className="relative top-[-4px] left-2" fontSize="small" />
          </label>
          <div className="relative">
            <input
              className="bg-gray-100 border-b-2 border-solid border-black leading-9 pl-5 text-lg "
              placeholder="45"
              id="age-coverage"
              type="number"
            />
          </div>
        </div>
      </div>
      <button
        className="rounded-full bg-gray-200 py-2 md:w-48 mx-8"
        type="submit"
      >
        Calculate
      </button>
    </form>
  );
}

export default OpenEnrollForm;
