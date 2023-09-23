"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import logo from "../../../../public/hero.svg";

export default function Hero() {
  return (
    <>
      <div className="sm:flex h-full sm:justify-between px-10 sm:px-32">
        {/* sm:pt-20  */}
        <div className=" w-3/5 max-sm:pt-10 flex items-center justify-center max-sm:w-full ">
          <div className="space-y-5">
            <h2 className="text-6xl max-sm:text-2xl max-sm:text-center font-bold text-white text-start ">
              <span className="sm:text-8xl text-4xl">All</span> the resources
              you want, at your fingertips.
            </h2>
            <h3 className="text-start text-xl max-sm:text-sm max-sm:text-center text-white">
              MAKAUT Buddy is the one-stop academic solution for every students
              of the University.
            </h3>
            <div className="sm:space-x-5 space-x-2 max-sm:flex">
              <Button
                className="sm:text-lg text-sm"
                radius="sm"
                size="lg"
                color="white"
                variant="bordered"
              >
                <Link href="/dashboard">Check Out Resources</Link>
              </Button>
              <Button
                radius="sm"
                size="lg"
                className="text-black bg-white sm:text-lg text-sm"
                // color="red"
                variant="solid"
              >
                <Link href="/signup">Join Now!!</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="sm:w-2/5 sm:mt-12">
          <Image src={logo} className="p-10 py-0" alt="Logo" />
        </div>
      </div>
    </>
  );
}
