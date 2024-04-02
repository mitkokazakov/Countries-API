import React from 'react'

const CountryCard = () => {
  return (
    <div className='flex flex-col rounded-lg shadow-xl'>
        <img src="https://flagcdn.com/w320/ax.png" alt="" />

        <div className='flex flex-col justify-between items-center'>
            <h1>Germany</h1>

            <div>
                <p>Population: 81,777,234</p>
                <p>Region: Europe</p>
                <p>Capital: Berlin</p>
            </div>
        </div>
    </div>
  )
}

export default CountryCard