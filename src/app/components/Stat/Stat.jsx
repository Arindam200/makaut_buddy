"use client";
import React from "react";

export default function Stat() {
  const stats = [
    { label: "Previous Year Questions", value: "25+" },
    { label: "Video Tutorials", value: "90+" },
    { label: "Handwritten Notes", value: "15+" },
  ];

  return (
    <div className="font-grenze sm:px-32 bg-[#D9D9D9]">
      <div className="sm:h-40 h-28 text-black flex p-10 justify-around">
        {stats.map((stat, index) => (
          <div key={index}>
            <h1 className="sm:text-6xl text-xl text-center font-bold">
              {stat.value}
            </h1>
            <h3 className="sm:text-2xl text-md text-center">{stat.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
