"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className=" sticky top-0 z-20 ">
      <nav className=" flex items-center justify-between px-4 py-2 bg-primary drop-shadow-lg text-white">
        <button
          className="w-36 text-left focus:outline-2 focus:outline rounded-full"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
        <Link href="/">
          <Image
            width={40}
            height={40}
            src="/assets/images/CCA-Logo-mobile.svg"
            alt="Covered California Logo"
            loading="eager"
          />
        </Link>
        <div className="w-36 flex justify-end">
          <Link
            className="flex items-center border border-white rounded-full px-4 py-0.5 font-bold text-sm"
            href={"/login"}
          >
            LOGIN
          </Link>
        </div>
      </nav>
      {showMenu && (
        <div
          id="nav-dropdown"
          className="absolute w-full top-16 bg-white text-lg border-b-2"
        >
          <ul>
            <li>Get Started</li>
            <li>Health</li>
            <li>Dental</li>
            <li>Vision</li>
            <li>Support</li>
            <li>(800) 300-1506</li>
            <li>Shop and Compare</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
