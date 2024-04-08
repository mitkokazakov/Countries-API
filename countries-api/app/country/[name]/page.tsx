import React from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";

type ParamsType = {
    params: {
        name: string
    }
}

const page = ({ params }: ParamsType) => {
    return (
        <div className=' flex flex-col px-8 py-8 bg-[#fafafa] min-h-screen'>

            <div className='flex justify-start'>
                <Link href={'/'} className=' flex justify-center items-center gap-3 w-32 shadow-3xl py-2 outline-none'>
                    <FaArrowLeftLong />
                    Back
                </Link>
            </div>


            <div className='flex flex-col lg:flex-row'>
                <div className='w-full mt-16 md:w-3/4 m-auto'>
                    <img className='w-full' src="https://flagcdn.com/w320/ax.png" alt="Country Image" />
                </div>

                <div className='flex flex-col'>
                    <div className='w-full flex flex-col mt-10 md:flex-row md:justify-evenly md:items-start '>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl font-extrabold pb-4'>{params.name}</h1>

                            <div className='flex flex-col gap-3'>
                                <p className=' font-extralight'><span className=' font-bold'>Native Name: </span>{params.name}</p>
                                <p className=' font-extralight'><span className=' font-bold'>Population:</span> 81,777,234</p>
                                <p className=' font-extralight'><span className=' font-bold'>Region:</span> Europe</p>
                                <p className=' font-extralight'><span className=' font-bold'>Sub Region:</span> Europe</p>
                                <p className=' font-extralight'><span className=' font-bold'>Capital:</span> Berlin</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 mt-8 md:pt-4'>
                            <p className=' font-extralight'><span className=' font-bold'>Top Level Domain:</span> .be</p>
                            <p className=' font-extralight'><span className=' font-bold'>Currencies:</span>Euro</p>
                            <p className=' font-extralight'><span className=' font-bold'>Languages:</span>Dutch, French, German</p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-5 mt-10 md:w-3/4 mx-auto'>
                        <h1 className='text-lg font-bold'>Border Countries:</h1>

                        <div className='flex flex-wrap w-full gap-3'>
                            <Link href={'/'} className='grow min-w-[30%] shadow-3xl py-2 px-2 text-center '>
                                Norway
                            </Link>

                            <Link href={'/'} className=' grow min-w-[30%]  shadow-3xl py-2 px-2 text-center '>
                                Norway
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center '>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center '>
                                Netherlands
                            </Link>

                            <Link href={'/'} className='grow  min-w-[30%]  shadow-3xl py-2 px-2 text-center '>
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