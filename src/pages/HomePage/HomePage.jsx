import React from "react";
import Navbar from "../../components/Navbar";
import HomePageContent from "./HomePageContent";
export default function HomePage() {
  return (
    <div className="text-white ">
      <Navbar />
      {/* <section>Navbar Dropdown</section> */}
      <HomePageContent />
      <footer>Footer</footer>
    </div>
  );
}
