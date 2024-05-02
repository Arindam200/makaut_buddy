"use client"
import {useState} from "react"

export default function Toggle({activeBar , setActiveBar}) {



  const activeStyle = {backgroundColor:"white" , color:"black" , borderRadius:"5px"}

  return (
     <section className="flex flex-row w-[100%] text-[14px] pb-[20px]">
        <section 
        
        onClick={() => {
            setActiveBar("filter");
        }}
        
        className="p-[10px] cursor-pointer" 
        style={activeBar === "filter" ? activeStyle : null}
        
        >
            Filter by Semester
        </section>
        <section
        
        onClick={() => {
            setActiveBar("search");
        }} 
        
        className="p-[10px] cursor-pointer" 
        
        style={activeBar === "search" ? activeStyle : null}
        
        >
            Search for Subjects Directly
        </section>
     </section>
  );
}
