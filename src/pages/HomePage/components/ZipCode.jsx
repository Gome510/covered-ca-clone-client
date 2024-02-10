import React from "react";
import InfoIcon from "@mui/icons-material/Info";
function ZipCode() {
  return (
    <div className="p-4 w-full col-span-2 md:col-span-1 flex flex-col justify-end">
      <label className="font-bold" htmlFor="zip-code">
        ZIP Code
      </label>
      <div className="relative">
        <input
          className="w-full md:max-w-[160px] bg-input border-b-2 border-solid border-black leading-9 pl-5 text-lg "
          id="zip-code"
          type="number"
          placeholder="95834"
        />
      </div>
    </div>
  );
}

export default ZipCode;
