"use client"

import React from 'react'

import { IoMoonOutline } from "react-icons/io5";

type NavBarProps ={
    handleDarkMode: void
}

const NavBar = () => {
    return (
        <div className=' min-h-20 shadow-lg w-full flex justify-between items-center px-4 py-3 z-20 relative font-nunito'>
            <h1 className='font-bold'>Where in the world?</h1>

            <div className='flex justify-center items-center gap-3'>
                <IoMoonOutline className='text-xl cursor-pointer'/>

                <p className=' font-medium'>Dark Mode</p>
            </div>
        </div>
    )
}

export default NavBar