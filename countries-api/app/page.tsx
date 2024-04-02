"use client"

import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";

export default function Home() {

const [clickRegion, setClickRegion] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 px-4 bg-slate-100">

      <div className="w-full shadow-xl rounded-lg relative">
        <IoIosSearch className="absolute left-5 top-[50%] translate-y-[-50%] text-2xl text-slate-400" />
        <input className="w-full py-3 pl-16 pr-4 rounded-lg outline-none" type="text" name="title" placeholder="Search for a country" />
      </div>

      <div className="mt-10 w-full">
        <div className=" w-2/4 text-left">
          <div className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-md">
            <p className="text-[10px] font-medium">Filter By Region</p>
            <MdKeyboardArrowDown className="text-md cursor-pointer" onClick={() => {setClickRegion(!clickRegion)}}/>
          </div>

          <div className={`w-full duration-200 bg-white mt-2 pl-4 py-4 ${clickRegion ? 'opacity-1' : 'opacity-0'}`}>
            <p className="py-1 text-[14px] font-medium">Europe</p>
            <p className="py-1 text-[14px] font-medium">Europe</p>
            <p className="py-1 text-[14px] font-medium">Europe</p>
            <p className="py-1 text-[14px] font-medium">Europe</p>
          </div>
        </div>
      </div>
    </main>
  );
}
