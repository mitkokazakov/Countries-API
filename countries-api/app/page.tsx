"use client"

import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";
import CountryCard from "./components/CountryCard";

export default function Home() {

const [clickRegion, setClickRegion] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 px-4 bg-[#fafafa] font-nunito">

      <div className="w-full shadow-md rounded-lg relative">
        <IoIosSearch className="absolute left-5 top-[50%] translate-y-[-50%] text-2xl text-slate-400" />
        <input className="w-full py-3 pl-16 pr-4 rounded-lg outline-none text-xs" type="text" name="title" placeholder="Search for a country..." />
      </div>

      <div className="mt-10 w-full">
        <div className=" w-2/4 relative">
          <div className="w-full flex justify-between items-center pl-6 pr-4 py-3 bg-white rounded-md shadow-md">
            <p className="text-[10px] font-medium">Filter By Region</p>
            <MdKeyboardArrowDown className="text-md cursor-pointer" onClick={() => {setClickRegion(!clickRegion)}}/>
          </div>

          <div className={`w-full duration-200 bg-white mt-2 absolute shadow-md ${clickRegion ? 'h-auto opacity-1 pl-6 py-4' : 'h-0 opacity-0 p-0'}`}>
            <p className="py-1 text-[14px] font-medium">Africa</p>
            <p className="py-1 text-[14px] font-medium">America</p>
            <p className="py-1 text-[14px] font-medium">Asia</p>
            <p className="py-1 text-[14px] font-medium">Europe</p>
            <p className="py-1 text-[14px] font-medium">Oceania</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-8 mt-10">
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </main>
  );
}
