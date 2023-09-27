"use client";
import logo from "../../../../public/Logo_sm.svg";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="font-grenze w-full overflow-hidden sm:px-20 px-10 text-[#FFFFFF80] py-5 space-y-2 rounded-t-3xl bg-[#0E0E0E]">
        <div className="sm:flex  sm:divide-x-2 max-sm:divide-y-2 divide-[#FFFFFF80] ">
          <div className="logo sm:pr-10">
            <Image
              src={logo}
              className="sm:px-10 h-72 max-sm:pb-5 sm:w-80 sm:h-80 "
              alt="Logo"
            />
          </div>
          <div className="sm:px-20 hidden max-sm:text-center sm:pt-16 pt-10 sm:flex sm:space-x-40">
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Swapnoneel Saha
                </h1>
                <li className="text-md max-sm:hidden">Website</li>
                <li className="text-md max-sm:hidden">Github</li>
                <li className="text-md max-sm:hidden">Blog</li>
                <li className="text-md max-sm:hidden">Twitter</li>
                <li className="text-md max-sm:hidden">LinkedIn</li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Arindam Majumder
                </h1>
                <li className="text-md max-sm:hidden">Website</li>
                <li className="text-md max-sm:hidden">Github</li>
                <li className="text-md max-sm:hidden">Blog</li>
                <li className="text-md max-sm:hidden">Twitter</li>
                <li className="text-md max-sm:hidden">LinkedIn</li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Samyabrata Maji
                </h1>
                <li className="text-md max-sm:hidden">Website</li>
                <li className="text-md max-sm:hidden">Github</li>
                <li className="text-md max-sm:hidden">Blog</li>
                <li className="text-md max-sm:hidden">Twitter</li>
                <li className="text-md max-sm:hidden">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center max-sm:text-xs">
          Created with love ❣ by Swapnoneel Saha, Arindam Majumder and
          Samyabrata Maji
        </p>
      </div>
    </>
  );
}
