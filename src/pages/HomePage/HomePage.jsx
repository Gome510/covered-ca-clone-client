import React from "react";
import Navbar from "../../components/Navbar";
import ApplyNow from "./sections/ApplyNow";

export default function HomePage() {
  return (
    <div className="text-white ">
      <Navbar />
      {/* <section>Navbar Dropdown</section> */}
      <ApplyNow />
    </div>
  );
}
