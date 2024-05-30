"use client";
import React from "react";
import Counter from "@/app/utils/counter";
import { useTheme } from "../../Context/ThemeContext";

const Stat = React.memo(() => {
  const stats = [
    { label: "Previous Year Questions", value: "25" },
    { label: "Quality Video Tutorials", value: "90" },
    { label: "Handwritten Notes", value: "15" },
  ];
  const { theme } = useTheme();

  return (
    <div
      className={`sm:px-32 ${
        theme === "default" ? "bg-[#D9D9D9]" : "bg-[#ffffff]"
      }`}
    >
      <div className="sm:h-40 h-28 text-[#171717] flex p-10 justify-around">
        {stats.map((stat, index) => (
          <div key={index}>
            <h1 className="sm:text-8xl -mt-7 align-middle items-center self-center font-grenze text-4xl text-center font-bold">
              <Counter number={parseInt(stat.value)} title="" />
            </h1>
            <h2 className="sm:text-xl text-md text-center">{stat.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
});

Stat.displayName = "Stat";

export default Stat;
