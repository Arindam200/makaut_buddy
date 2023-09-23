"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import logo from "../../../../public/hero.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="sm:flex h-full sm:justify-between px-10 sm:px-32 gap-16 min-h-screen">
        {/* sm:pt-20  */}
        <div className=" w-3/5 max-sm:pt-10 flex flex-col items-start justify-center gap-4 max-sm:w-full ">
          {/* <h2 className="text-6xl max-sm:text-2xl max-sm:text-center font-bold text-white text-start ">
              <span className="sm:text-8xl text-4xl">All</span> the resources
              you want, at your fingertips.
            </h2> */}
          <motion.h1 className="text-7xl leading-snug tracking-normal text bg-gradient-to-r from-white to-[rgba(225,225,225,0.12)] bg-clip-text text-transparent">
            Learning Resources At Your Fingertips.
          </motion.h1>
          <h3 className="text-start text-2xl font-light max-sm:text-sm max-sm:text-center leading-loose text-[rgba(225,225,225,0.96)]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates mollitia ipsa odio fuga quaerat.
          </h3>
          <div className="sm:space-x-5 mt-4 space-x-2 max-sm:flex">
            <Button
              radius="sm"
              size="lg"
              className="bg-white text-black hover:bg-white/90 sm:text-lg text-sm px-4 py-2 rounded-md"
              variant="solid"
            >
              <Link href="/signup">Join Now</Link>
            </Button>
            <Button
              className="sm:text-lg text-sm hover:bg-[rgba(225,225,225,0.12)] px-4 py-2 rounded-md"
              radius="sm"
              size="lg"
              color="white"
              variant="bordered"
            >
              <Link href="/dashboard">Check Out Resources</Link>
            </Button>
          </div>
        </div>
        <div className="sm:w-2/5 sm:mt-12">
          <img src={logo.src}/>
        </div>
      </div>
    </>
  );
}
