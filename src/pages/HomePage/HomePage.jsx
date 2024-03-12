import React from "react";
import Navbar from "../../components/Navbar";
import ApplyNow from "./sections/ApplyNow";
import CoverageEnding from "./sections/CoverageEnding";

export default function HomePage() {
  return (
    <div className=" ">
      <Navbar />
      {/* <section>Navbar Dropdown</section> */}
      <ApplyNow />
      <div className=" bg-primary h-16 shadow-md"></div>

      <CoverageEnding />
    </div>
  );
}
