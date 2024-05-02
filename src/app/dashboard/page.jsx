import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import React from "react";
import Tabs from "../components/Tabs/Tabs.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import Image from "next/image.js";
import Arrow from "../../../public/Arrow.svg";
import "../components/Features/index.css";
import { auth } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

export default function page() {
  const { userId , sessionClaims } = auth();

  const isAdmin = sessionClaims?.metadata?.role === "admin";


  return (
    
    <>

        <div className="trilarge max-sm:hidden bg-white rotate-180 z-40"></div>
        <div className="tridown sm:hidden bg-white rotate-180 z-40"></div>
        <a href="/">
          <Image
            src={Arrow}
            alt="back-arrow"
            className="relative md:bottom-[6.75rem] md:w-10 lg:h-10 md:left-[15px] w-[1.5rem] h-[0.75rem] bottom-[2.75rem] left-[5px] cursor-pointer"
          />
        </a>
        <div className=" flex items-center justify-center sm:justify-between px-10 sm:px-40 gap-16">
          <div className="w-full">
            <div className="sm:flex">
              <div className="sm:w-1/2">
                <h2 className="text-6xl font-grenze max-sm:text-center pb-12 font-bold text-center sm:text-start">
                  Dashboard
                </h2>
                {/* add the specials buttons below we want to show with admin access */}
                {isAdmin && <><div className=""></div></>} 
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
