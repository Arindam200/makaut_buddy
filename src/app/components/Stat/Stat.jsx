"use client";
import React from "react";

export default function Stat() {
  const stats = [
    { label: "Previous Year Questions", value: "25+" },
    { label: "Quality Video Tutorials", value: "90+" },
    { label: "Handwritten Notes", value: "15+" },
  ];

  //bg-gradient-to-b from-blue-500 to-purple-500
  return (
    <div className=" sm:px-32 bg-black">
      <div className="sm:h-40 h-28 text-white flex p-10 justify-around ">
        {stats.map((stat, index) => (
          <div key={index}>
            <h1 className="sm:text-8xl -mt-7 align-middle items-center self-center font-grenze text-4xl text-center font-bold">
              {stat.value}
            </h1>
            <h3 className="sm:text-xl text-md text-center">{stat.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
