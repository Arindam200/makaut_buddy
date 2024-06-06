"use client";
import { useState, useEffect } from "react";
import Search from "../dashboard/searchbar";
import Options from "../dashboard/options";

export default function Tabs() {
  
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent the default browser action
      setActiveTab((prevTab) => (prevTab === "tab1" ? "tab2" : "tab1"));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const style = "text-black bg-[#D9D9D9] rounded-md basis-1/2 py-2 text-center transition-all duration-500 ease-in-out";

  return (
    <>
      <div className="flex w-full p-2 border-2 border-[#FFFFFF20] rounded-lg">
        <div
          className={activeTab === "tab1" ? style : "basis-1/2 py-2 text-center"}
          onClick={() => handleClick("tab1")}
          role="button"
          tabIndex={0}
        >
          Search manually
        </div>
        <div
          className={activeTab === "tab2" ? style : "basis-1/2 py-2 text-center"}
          onClick={() => handleClick("tab2")}
          role="button"
          tabIndex={0}
        >
          Search by stream
        </div>
      </div>
      <div className={activeTab === "tab1" ? "visible" : "hidden"}>
        <Search />
      </div>
      <div className={activeTab === "tab2" ? "visible" : "hidden"}>
        <Options />
      </div>
    </>
  );
}
