"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import logo from "../../../../public/hero.svg";

export default function Hero() {
  return (
    <>
      <div className="sm:flex sm:mt-20 sm:justify-between px-10 sm:px-32">
        <div className="sm:pt-20 pt-10 w-3/5 max-sm:w-full space-y-5">
          <h2 className="text-6xl max-sm:text-2xl max-sm:text-center font-bold text-white text-start ">
            <span className="sm:text-8xl text-4xl">All</span> the resources you
            want, at your fingertips.
          </h2>
          <h3 className="text-start text-xl max-sm:text-sm max-sm:text-center text-white">
            MAKAUT Buddy is the one-stop academic solution for every students of
            the University.
          </h3>
          <div className="sm:space-x-5 space-x-2 max-sm:flex">
            <Button
              className="sm:text-lg text-sm"
              radius="sm"
              size="lg"
              color="white"
              variant="bordered"
            >
              Check Out Resources
            </Button>
            <Button
              radius="sm"
              size="lg"
              className="text-black bg-white sm:text-lg text-sm"
              color="red"
              variant="solid"
            >
              Join Now!!
            </Button>
          </div>
        </div>
        <div className="sm:w-2/5">
          <Image src={logo} className="p-10 py-0" alt="Logo" />
        </div>
      </div>
    </>
  );
}
