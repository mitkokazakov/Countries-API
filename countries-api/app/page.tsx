"use client";

import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState, useEffect, ChangeEvent, Suspense } from "react";

import CountryCard from "./components/CountryCard";

import Link from "next/link";

import jsonData from "./libs/data.json";
import Loader from "./components/Loader";

type CountryFromAPI = {
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
  };
  capital: string;
};

type Country = {
  name: string;
  region: string;
  population: number;
  flags: {
    png: string;
  };
  capital: string;
};

export default function Home() {
  //await new Promise((resolve) => setTimeout(resolve, 50000));

  const [clickRegion, setClickRegion] = useState(false);
  const [regionName, setRegionName] = useState("");
  const [title, setTitle] = useState("");
  const [countries, setAllCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [filterByRegionCountries, setFilterByRegionCountries] = useState([]);

  useEffect(() => {
    async function FetchData() {
      if (title == "" || title == null) {
        // const response = await fetch(`https://restcountries.com/v3.1/all`);

        // const data = await response.json();

        const data: any = jsonData;

        setAllCountries(data);
        setFilterCountries(data);
        setFilterByRegionCountries(data);
      }
    }

    FetchData();
  },[]);

  async function OnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;

    setTitle(input);

    // let filtered = countries?.filter((country: Country) =>
    //   country.name.common.toLowerCase().includes(input.toLowerCase())
    // );

    let filtered: never[] = [];

    if (regionName != "") {
      filtered = countries?.filter(
        (country: Country) =>
          country.name.toLowerCase().includes(input.toLowerCase()) &&
          country.region.toLowerCase() == regionName.toLowerCase()
      );
    } else {
      filtered = countries?.filter((country: Country) =>
        country.name.toLowerCase().includes(input.toLowerCase())
      );
    }

    setFilterCountries(filtered);
    setFilterByRegionCountries(filtered);
    //setAllCountries(filtered);
  }

  function OnClickRegion(name: string) {
    setRegionName(name);

    if (filterCountries.length > 0) {
      // let regionFilter = countries?.filter((country: Country) =>
      //   country.region.toLowerCase().includes(name.toLowerCase())
      // );

      let regionFilter = filterCountries?.filter((country: Country) =>
        country.region.toLowerCase().includes(name.toLowerCase())
      );

      if (title != "") {
        regionFilter = filterCountries?.filter(
          (country: Country) =>
            country.region.toLowerCase().includes(name.toLowerCase()) &&
            country.name.toLowerCase().includes(title.toLowerCase())
        );
      }

      setFilterByRegionCountries(regionFilter);
      //setFilterCountries(regionFilter);
    } else {
      let filtered = countries?.filter((country: Country) =>
        country.region.toLowerCase().includes(name.toLowerCase())
      );

      if (title != "") {
        filtered = countries?.filter(
          (country: Country) =>
            country.region.toLowerCase().includes(name.toLowerCase()) &&
            country.name.toLowerCase().includes(title.toLowerCase())
        );
      }

      setFilterByRegionCountries(filtered);
      //setFilterCountries(filtered);
    }

    setClickRegion(!clickRegion);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-10 px-4 bg-[#fafafa] font-nunito dark:bg-[#202d36] lg:px-10">
      <div className="flex flex-col w-full lg:flex-row lg:justify-between lg:items-center">
        <div className="w-full shadow-md rounded-lg relative lg:w-2/5">
          <IoIosSearch className="absolute left-5 top-[50%] translate-y-[-50%] text-2xl text-slate-400" />
          <input
            className="w-full py-3 pl-16 pr-4 rounded-lg outline-none text-xs lg:text-base dark:text-white dark:bg-[#2b3743]"
            type="text"
            name="title"
            placeholder="Search for a country..."
            onChange={OnChangeInput}
          />
        </div>

        <div className="mt-10 w-full lg:mt-0 lg:w-1/4">
          <div className=" w-2/4 relative lg:w-full">
            <div
              className="w-full flex justify-between items-center pl-6 pr-4 py-3 bg-white rounded-md shadow-md dark:bg-[#2b3743] cursor-pointer"
              onClick={() => {
                setClickRegion(!clickRegion);
              }}
            >
              <p className="text-[10px] font-medium tracking-widest lg:text-base dark:text-white">
                {regionName == "" ? "Filter By Region" : `${regionName}`}
              </p>
              <MdKeyboardArrowDown className="text-md cursor-pointer dark:text-white" />
            </div>

            <div
              className={`w-full duration-200 bg-white dark:bg-[#2b3743] mt-2 absolute shadow-md ${
                clickRegion
                  ? "h-auto opacity-1 pl-6 py-4 pointer-events-auto"
                  : "h-0 opacity-0 p-0 pointer-events-none"
              }`}
            >
              <p
                className="py-1 text-[14px] font-medium dark:text-white cursor-pointer"
                onClick={() => OnClickRegion("Africa")}
              >
                Africa
              </p>
              <p
                className="py-1 text-[14px] font-medium  dark:text-white cursor-pointer"
                onClick={() => OnClickRegion("Americas")}
              >
                Americas
              </p>
              <p
                className="py-1 text-[14px] font-medium  dark:text-white cursor-pointer"
                onClick={() => OnClickRegion("Asia")}
              >
                Asia
              </p>
              <p
                className="py-1 text-[14px] font-medium  dark:text-white cursor-pointer"
                onClick={() => OnClickRegion("Europe")}
              >
                Europe
              </p>
              <p
                className="py-1 text-[14px] font-medium  dark:text-white cursor-pointer"
                onClick={() => OnClickRegion("Oceania")}
              >
                Oceania
              </p>
            </div>
          </div>
        </div>
      </div>


      <Suspense fallback={<Loader />}>
        <div className="grid gap-8 px-8 mt-10 lg:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filterByRegionCountries.length != 0
            ? filterByRegionCountries.map(async (c: Country, index) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                return (
                  
                    <Link href={`/country/${c.name}`} key={index}>
                      <CountryCard
                        name={c.name}
                        population={c.population}
                        region={c.region}
                        capital={c.capital}
                        flag={c.flags.png}
                      />
                    </Link>
                  
                );
              })
            : null}
        </div>
      </Suspense>
    </main>
  );
}
