"use client";
import logo from "../../../../public/Logo_sm.svg";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="font-sans w-full overflow-hidden sm:px-20 px-10 text-[#FFFFFF80] py-5 space-y-2 rounded-t-3xl bg-[#0E0E0E]">
        <div className="sm:flex  sm:divide-x-2 max-sm:divide-y-2 divide-[#FFFFFF10] ">
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
                <li className="text-md max-sm:hidden">
                  <a href="https://swapnoneel.vercel.app">Website</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://github.com/Swpn0neel">GitHub</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://swapnoneel.hashnode.dev">Blogs</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://x.com/swapnoneel123">Twitter</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://www.linkedin.com/in/swapnoneel-saha-14a3161b6/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Arindam Majumder
                </h1>
                <li className="text-md max-sm:hidden">
                  <a href="https://arindam-majumder.vercel.app">Website</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://github.com/Arindam200">GitHub</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://arindam1729.hashnode.dev">Blogs</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://x.com/Arindam_1729">Twitter</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://www.linkedin.com/in/arindam-majumder-021bb623b/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Samyabrata Maji
                </h1>
                <li className="text-md max-sm:hidden">
                  <a href="https://sammaji.pages.dev">Website</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://github.com/samyabrata-maji">GitHub</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://sammaji.hashnode.dev">Blogs</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://twitter.com/sammaji15">Twitter</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://www.linkedin.com/in/samyabrata-maji/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-[FFFFFF90] max-sm:text-xs">
          Created with love ❤️ by
          <a className="text-white ml-2" href="https://swapnoneel.vercel.app">
            Swapnoneel Saha
          </a>{" "}
          ,
          <a
            className="text-white ml-2"
            href="https://arindam-majumder.vercel.app"
          >
            Arindam Majumder
          </a>{" "}
          and
          <a className="text-white ml-2" href="https://sammaji.pages.dev">
            Samyabrata Maji
          </a>
        </p>
      </div>
    </>
  );
}
