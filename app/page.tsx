import React from "react";
import ApplyNow from "./ui/ApplyNow";
import CoverageEnding from "./ui/CoverageEnding";
export default function HomePage() {
  return (
    <>
      <ApplyNow />
      <div className=" bg-primary h-16 shadow-md"></div>

      <CoverageEnding />
    </>
  );
}
