import React from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";

type ParamsType = {
    params: {
        name: string
    }
}

const page = ({ params }: ParamsType) => {

    let splittedName = params.name.split('%20');

    let finalName = splittedName.join(' ');

    
    return (
        <div className=' flex flex-col px-8 py-8 bg-[#fafafa] dark:bg-[#202d36] min-h-screen'>

            <div className='flex justify-start '>
                <Link href={'/'} className=' flex justify-center items-center gap-3 w-32 shadow-3xl py-2 outline-none dark:text-white dark:bg-[#2b3743]'>
                    <FaArrowLeftLong />
                    Back
                </Link>
            </div>


            <div className='flex flex-col lg:flex-row lg:justify-start lg:gap-20'>
                <div className='w-full mt-16 md:w-3/4 m-auto lg:w-1/2 lg:mx-0'>
                    <img className='w-full' src="https://flagcdn.com/w320/ax.png" alt="Country Image" />
                </div>

                <div className='flex flex-col dark:text-white lg:justify-center lg:w-1/2'>
                    <div className='w-full flex flex-col mt-10 md:flex-row md:justify-evenly md:items-start lg:mt-16 lg:justify-between '>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl font-extrabold pb-4'>{finalName}</h1>

                            <div className='flex flex-col gap-3'>
                                <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Native Name: </span>{finalName}</p>
                                <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Population: </span> 81,777,234</p>
                                <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Region: </span> Europe</p>
                                <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Sub Region: </span> Europe</p>
                                <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Capital: </span> Berlin</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 mt-8 md:pt-4'>
                            <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Top Level Domain: </span> .be</p>
                            <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Currencies: </span>Euro</p>
                            <p className=' font-extralight lg:text-sm'><span className=' font-bold'>Languages: </span>Dutch, French, German</p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-5 mt-10 md:w-3/4 mx-auto lg:mx-0 lg:mt-8  lg:w-full '>
                        <h1 className='text-lg font-bold lg:text-sm'>Border Countries:</h1>

                        <div className='flex flex-wrap w-full gap-3 lg:flex-row '>
                            <Link href={'/'} className='grow min-w-[30%] shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Norway
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Norway
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow min-w-[30%]  shadow-3xl py-2 px-2 text-center dark:bg-[#2b3743] lg:text-sm lg:max-h-8 lg:flex lg:justify-center lg:items-center lg:min-w-[20%] lg:grow-0'>
                                Netherlands
                            </Link>




                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page