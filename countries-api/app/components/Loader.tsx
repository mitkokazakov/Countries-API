import React from 'react'

const Loader = () => {
  return (
    <div className=" min-h-screen w-full grid items-center bg-[#fafafa] font-nunito dark:bg-[#202d36]">
      <div className="spinner">
        <div className="rect1 bg-[#333] dark:bg-[#fafafa]"></div>
        <div className="rect2 bg-[#333] dark:bg-[#fafafa]"></div>
        <div className="rect3 bg-[#333] dark:bg-[#fafafa]"></div>
        <div className="rect4 bg-[#333] dark:bg-[#fafafa]"></div>
        <div className="rect5 bg-[#333] dark:bg-[#fafafa]"></div>
      </div>
    </div>
  )
}

export default Loader
