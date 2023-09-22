"use client";
import logo from "../../../../public/Logo_sm.svg";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full px-20 text-[#FFFFFF80] py-5 space-y-2 rounded-t-3xl bg-[#1e1e1e]">
        <div className="flex divide-x-2 divide-white ">
          <div className="logo pr-10">
            <Image src={logo} className="px-10  w-80 h-80 " alt="Logo" />
          </div>
          <div className="px-32 pt-16 flex space-x-40">
            <div className="">
              <ul className=" space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Swapnoneel Saha
                </h1>
                <li className="text-md">Website</li>
                <li className="text-md">Github</li>
                <li className="text-md">Blog</li>
                <li className="text-md">Twitter</li>
                <li className="text-md">LinkedIn</li>
              </ul>
            </div>
            <div className="">
              <ul className=" space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Arindam Majumder
                </h1>
                <li className="text-md">Website</li>
                <li className="text-md">Github</li>
                <li className="text-md">Blog</li>
                <li className="text-md">Twitter</li>
                <li className="text-md">LinkedIn</li>
              </ul>
            </div>
            <div className="">
              <ul className=" space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Samyabrata Majhi
                </h1>
                <li className="text-md">Website</li>
                <li className="text-md">Github</li>
                <li className="text-md">Blog</li>
                <li className="text-md">Twitter</li>
                <li className="text-md">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center ">
          Created with love ❣ by Swapnoneel Saha, Arindam Majumder and
          Samyabrata Maji
        </p>
      </div>
    </>
  );
}
