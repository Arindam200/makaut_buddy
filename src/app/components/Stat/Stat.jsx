import React from "react";

export default function Stat() {
  return (
    <>
      <div className="sm:px-32 bg-[#D9D9D9]">
        <div className="sm:h-40 h-28 text-black  flex p-10 justify-around">
          <div className="">
            <h1 className="sm:text-6xl text-xl text-center font-bold">25+</h1>
            <h3 className="sm:text-2xl text-md text-center">Previous Year Questions</h3>
          </div>
          <div className="">
            <h1 className="sm:text-6xl text-xl text-center font-bold">90+</h1>
            <h3 className="sm:text-2xl text-md text-center">Video Tutorials</h3>
          </div>
          <div className="">
            <h1 className="sm:text-6xl text-xl text-center font-bold">15+</h1>
            <h3 className="sm:text-2xl text-md text-center">Handwritten Notes</h3>
          </div>
        </div>
      </div>
    </>
  );
}
