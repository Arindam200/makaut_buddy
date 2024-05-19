"use client";
import { useState } from "react";
import Search from "../dashboard/searchbar";
import Options from "../dashboard/options";

export default function Tabs() {

  const [activetab, setActivetab] = useState("tab1");
  const handleclick = (tab) => {
    setActivetab(tab);
  };
  const style = "text-black bg-[#D9D9D9] rounded-md basis-1/2 py-2 text-center transition-all duration-500 ease-in-out";

  return (
    <>
      <div className="flex w-full p-2 border-2 border-[#FFFFFF20] rounded-lg">
        <div
          className={
            activetab === "tab1" ? `${style}` : "basis-1/2 py-2 text-center"
          }
          onClick={() => {
            handleclick("tab1");
          }}
        >
          Search manually
        </div>
        <div
          className={
            activetab === "tab2" ? `${style}` : "basis-1/2 py-2 text-center"
          }
          onClick={() => {
            handleclick("tab2");
          }}
        >
          Search by stream
        </div>
      </div>
      <div className={activetab==="tab1"?"visible": "hidden"}>
        <Search/>
      </div>
      <div className={activetab==="tab2"?"visible": "hidden"}>
        <Options/>
      </div>
    </>
  );
}
