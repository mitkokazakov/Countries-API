import React from "react";

const loading = () => {
  return (
    <div className=" min-h-screen grid items-center bg-slate-100">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
};

export default loading;
