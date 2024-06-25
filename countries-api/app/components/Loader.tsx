import React from 'react'

const Loader = () => {
  return (
    <div className=" min-h-screen w-full grid items-center bg-slate-100">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  )
}

export default Loader
