import React from 'react'

const CountryCard = () => {
  return (
    <div className='flex flex-col rounded-lg shadow-md overflow-hidden'>
        <img src="https://flagcdn.com/w320/ax.png" alt="" />

        <div className='flex flex-col justify-between items-start pl-6 pt-8 pb-10 dark:bg-black'>
            <h1 className='text-xl font-extrabold pb-4'>Germany</h1>

            <div className='flex flex-col gap-1'>
                <p><span className=' font-bold'>Population:</span> 81,777,234</p>
                <p><span className=' font-bold'>Region:</span> Europe</p>
                <p><span className=' font-bold'>Capital:</span> Berlin</p>
            </div>
        </div>
    </div>
  )
}

export default CountryCard