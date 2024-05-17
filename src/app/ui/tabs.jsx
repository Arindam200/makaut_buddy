"use client";
import { useState } from "react";

export default function tabs() {
  const[activetab, setActivetab] = useState("tab1")
  const handleclick=(tab)=>{
    setActivetab(tab)
  }
  const style ="text-black bg-[#D9D9D9] rounded-md basis-1/2 py-2 text-center"
  return (
    <div className="flex w-full p-2 border-2 border-[#FFFFFF20] rounded-lg">
      <div className={activetab==="tab1"?`${style}`:"basis-1/2 py-2 text-center"} onClick={()=>{handleclick("tab1")}}>
        Search manually
      </div>
      <div className={activetab==="tab2"?`${style}`:"basis-1/2 py-2 text-center"} onClick={()=>{handleclick("tab2")}}>
        Search by stream
      </div>
    </div>
  );
}