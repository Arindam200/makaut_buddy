"use client";

import React from "react";
import Tabs from "../components/Tabs/Tabs.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import "../components/Features/index.css";
// import { Tabs, Tab } from "@nextui-org/react";

export default function page() {
  return (
    <>
      <div className="trilarge max-sm:hidden bg-white rotate-180 z-40"></div>
      <div className="tridown sm:hidden bg-white rotate-180 z-40"></div>
      <div className=" flex items-center justify-center sm:justify-between px-10 sm:px-40 gap-16">
        <div className="">
          <div className="sm:flex">
            <div className="sm:w-1/2">
              <h2 className="text-6xl font-grenze max-sm:text-center pb-12 font-bold text-center sm:text-start">
                Dashboard
              </h2>
              <Dropdown />
            </div>
            <div className="sm:w-1/2">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div>
//                 <h3>Select your branch and semester</h3>
//                 <select>
//                   <option value="B.Tech CSE 1st year">B.Tech CSE 1st year</option>
//                 </select>
//               </div>
//               <div>
//               <h3>Select subject</h3>
//                 <select>
//                   <option value="Chemsitry">Chemistry</option>
//                   <option value="Engineering Drawing">Engineering Drawing</option>
//                   <option value="Electrical and Digital Electronics">Electrical and Digital Electronics</option>
//                   <option value="Mathematics">Mathematics</option>
//                 </select>
//               </div>
//               <div></div>
