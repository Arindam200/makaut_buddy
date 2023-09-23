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
              <h1 className="text-5xl text-start font-bold">1</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quibusdam, doloribus, voluptatibus
                voluptatum repudiandae quos voluptates quia quod quas.
              </p>
            </div>
            <div className="bg-white w-64 h-96 text-black space-y-5 pt-10 p-5">
              {/* <div className="bg-blue-500 h-20 w-20 rounded-full"></div> */}
              <h1 className="text-5xl text-start font-bold">1</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quibusdam, doloribus, voluptatibus
                voluptatum repudiandae quos voluptates quia quod quas.
              </p>
            </div>
            <div className="bg-white w-64 h-96 text-black space-y-5 pt-10 p-5">
              {/* <div className="bg-blue-500 h-20 w-20 rounded-full"></div> */}
              <h1 className="text-5xl text-start font-bold">1</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quibusdam, doloribus, voluptatibus
                voluptatum repudiandae quos voluptates quia quod quas.
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
