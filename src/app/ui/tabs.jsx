"use client";
import { useState } from "react";

export default function tabs() {
  const[activetab, setActivetab] = useState("active")
  const handleclick=(tab)=>{
    setActivetab(tab)
  }
  const style ="text-black bg-[#D9D9D9] rounded-md basis-1/2 py-2 text-center"
  return (
    <div className="flex w-full p-2 border-2 border-[#FFFFFF20] rounded-lg">
      <div className={`${activetab==="active"?`${style}`:"basis-1/2 py-2 text-center"}`} onClick={()=>{handleclick("active")}}>
        Search manually
      </div>
      <div className={`${activetab==="inactive"?`${style}`:"basis-1/2 py-2 text-center"}`} onClick={()=>{handleclick("inactive")}}>
        Search by stream
      </div>
    </div>
  );
}