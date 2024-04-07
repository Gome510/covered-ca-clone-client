import React from "react";
import ApplyNow from "./ui/Home/ApplyNow";
import CoverageEnding from "./ui/Home/CoverageEnding";
import CoverageOptions from "./ui/Home/CoverageOptions";
export default function HomePage() {
  return (
    <>
      <ApplyNow />
      <div className=" bg-primary h-16 shadow-md"></div>

      <CoverageEnding />
      <CoverageOptions />
    </>
  );
}
