import React from "react";
import CheckIcon from "@mui/icons-material/Check";

function QuickQuote() {
  return (
    <div className="bg-light-denim flex flex-col items-center text-white gap-4">
      <h3 className="font-bold text-xl mt-8">Quick Quote</h3>

      <div className="rounded-full w-40 h-40 border-pacific-blue border-8 flex justify-center items-center relative">
        <div className="absolute w-6 h-6 top-[-15px] rounded-full bg-pacific-blue">
          <CheckIcon fontSize="small" />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-4xl">$63</span>
          <span>per month</span>
        </div>
      </div>

      <div className="font-bold text-xl">
        <p>for a Silver plan.</p>
        <p>Bronze plans as low as $0</p>
      </div>
      <p>
        After financial help from: <strong>Covered California</strong>
      </p>
      <hr />
      <div></div>
    </div>
  );
}

export default QuickQuote;
