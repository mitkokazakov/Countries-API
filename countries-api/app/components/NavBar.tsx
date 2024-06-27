"use client";

import React from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  },[]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className=" min-h-20 shadow-lg w-full flex justify-between items-center px-4 py-3 z-20 relative font-nunito dark:bg-[#2b3743]">
      <Link href={"/"}>
        <h1 className="font-bold dark:text-white">Where in the world?</h1>
      </Link>

      <div className="flex justify-center items-center gap-3 dark:text-white">
        {darkMode == false ? (
          <IoMoonOutline
            className="text-xl cursor-pointer dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <IoSunnyOutline
            className="text-xl cursor-pointer dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}

        {darkMode == false ? (
          <p className=" font-medium">Dark Mode</p>
        ) : (
          <p className=" font-medium">Light Mode</p>
        )}
      </div>
    </div>
  );
};

export default NavBar;
