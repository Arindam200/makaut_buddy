"use client";

import React from "react";
import Tabs from "../components/Tabs/Tabs.jsx";
// import { Tabs, Tab } from "@nextui-org/react";

export default function page() {
  return (
    <>
      <div className="sm:h-full flex items-center justify-center sm:justify-between px-10 sm:px-32 gap-16 sm:min-h-screen">
        <div className="">
          <h2 className="text-5xl pb-10 font-bold text-center sm:text-start">
            Dashboard
          </h2>
          <div className="flex">
            <div className="w-1/2 ">hijibiji</div>
            <div className="w-1/2">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
