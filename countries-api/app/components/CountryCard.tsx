import React from 'react'

import { FormatPopulation } from '../libs/services'

type CountryParams = {
  name: string,
  population: number,
  region: string,
  capital: string,
  flag: string
}

const CountryCard = ({name,population,region,capital,flag}: CountryParams) => {

  let formattedPopulation = FormatPopulation(population);

  return (
    <div className='flex flex-col rounded-lg shadow-md overflow-hidden '>
      <img className='lg:w-full lg:max-h-[160px] lg:min-h-[160px]' src={flag} alt="" />

      <div className='flex flex-col justify-between items-start pl-6 pt-8 pb-10 dark:bg-[#2b3743] dark:text-white'>
        <h1 className='text-xl font-extrabold pb-4'>{name}</h1>

        <div className='flex flex-col gap-1'>
          <p className=' font-extralight'><span className=' font-bold'>Population:</span> {formattedPopulation}</p>
          <p className=' font-extralight'><span className=' font-bold'>Region:</span> {region}</p>
          <p className=' font-extralight'><span className=' font-bold'>Capital:</span> {capital}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard