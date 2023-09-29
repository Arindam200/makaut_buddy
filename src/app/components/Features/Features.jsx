"use client";

import React from "react";
import logo_s from "../../../../public/logo_shade.svg";
import "./index.css";

export default function Features() {
  return (
    <>
      <div className="sm:px-32 flex relative px-16">
        <div className="space-y-10 sm:py-20 pt-16">
          <h1 className="text-7xl max-sm:text-center font-bold font-grenze">
            Features
          </h1>
          <div className="flex max-sm:flex-col justify-start gap-10">
            <div className=" box w-64 h-96 text-black ">
              <div className="tri"></div>
              <div className="pl-8 pt-1 pr-6 space-y-5 ">
                <h1 className="text-7xl text-start font-grenze font-bold">1.</h1>
                <h3 className="text-lg text-[#171717]">
                  All the previous year questions compiled in a bundle so that
                  practice becomes easy and ever, and chances of getting commons are
                  extremely high.
                </h3>
              </div>
            </div>
            <div className=" box w-64 h-96 text-black ">
              <div className="tri"></div>
              <div className="pl-8 pt-1 pr-6 space-y-5 ">
                <h1 className="text-7xl text-start font-grenze font-bold">2.</h1>
                <h3 className="text-lg text-[#171717]">
                  The best YouTube tutorials that can help you one-shot each and
                  every concepts with ultimate ease, and make the last-night prep
                  easy af.
                </h3>
              </div>
            </div>
            <div className=" box w-64 h-96 text-black ">
              <div className="tri"></div>
              <div className="pl-8 pt-1 pr-6 space-y-5 ">
                <h1 className="text-7xl text-start font-grenze font-bold">3.</h1>
                <h3 className="text-lg text-[#171717]">
                  Classified Handwritten notes just for you guys, straight from
                  the toppers which will give you the ultimate edge at excelling the
                  semester exam.
                </h3>
              </div>
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
