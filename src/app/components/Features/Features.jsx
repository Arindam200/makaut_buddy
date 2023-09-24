"use client";

import React from "react";
import logo_s from "../../../../public/logo_shade.svg";

export default function Features() {
  return (
    <>
      <div className="sm:px-32 flex relative px-16">
        <div className="space-y-10 sm:py-20 pt-16">
          <h1 className="text-5xl max-sm:text-center font-bold">Features</h1>
          <div className="flex max-sm:flex-col justify-start gap-10">
            <div className="bg-white  w-64 h-96 text-black space-y-5 pt-10 p-5">
              {/* <div className="bg-blue-500 h-20 w-20 rounded-full"></div> */}
              <h1 className="text-5xl text-start font-bold">1.</h1>
              <p className="text-lg">
              All the previous year questions compiled in a bundle so that practice becomes easy and ever, and chances of getting commons are extremely high.
              </p>
            </div>
            <div className="bg-white w-64 h-96 text-black space-y-5 pt-10 p-5">
              {/* <div className="bg-blue-500 h-20 w-20 rounded-full"></div> */}
              <h1 className="text-5xl text-start font-bold">2.</h1>
              <p className="text-lg">
              The best YouTube tutorials that can help you one-shot each and every concepts with ultimate ease, and make the last-night prep easy af.
              </p>
            </div>
            <div className="bg-white w-64 h-96 text-black space-y-5 pt-10 p-5">
              {/* <div className="bg-blue-500 h-20 w-20 rounded-full"></div> */}
              <h1 className="text-5xl text-start font-bold">3.</h1>
              <p className="text-lg">
              Classified Handwritten notes just for you guys, straight from the toppers which will give you the ultimate edge at the semester exam.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={logo_s.src} />
        </div>
      </div>
    </>
  );
}
