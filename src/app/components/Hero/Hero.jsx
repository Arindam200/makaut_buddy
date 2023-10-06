"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "../../../../public/Logo_Hero.png";

export default function Hero() {
  return (
    <>
      <div
        id="home"
        className="font-grenze sm:flex sm:h-[calc(100vh-40px)] sm:justify-between px-10 sm:px-32 gap-16 sm:min-h-[calc(100vh-40px)]"
      >
        {/* sm:pt-20  */}
        <div className="w-3/5 max-sm:pt-10 flex flex-col items-start justify-center gap-4 max-sm:w-full">
          {/* <h2 className="text-6xl max-sm:text-2xl max-sm:text-center font-bold text-white text-start ">
              <span className="sm:text-8xl text-4xl">All </span> the resources
              you want, at your fingertips.
            </h2> */}
          <motion.h1 className="text-7xl max-sm:text-2xl max-sm:text-center font-semibold leading-snug tracking-normal text bg-gradient-to-r from-white to-[rgba(225,225,225,0.12)] bg-clip-text text-transparent">
            <span className="sm:text-9xl font-bold text-4xl">All </span>the
            resources you want, at your fingertips.
          </motion.h1>
          <h3 className="font-sans text-start text-2xl font-light max-sm:text-sm max-sm:text-center leading-loose text bg bg-gradient-to-r from-[rgba(225,225,225,0.80)] to-[rgba(225,225,225,0.40)] bg-clip-text text-transparent">
            MAKAUT Buddy is the one-stop academic solution for every students of
            the University.
          </h3>
          <div className="font-sans sm:space-x-5 mt-4 space-x-2 max-sm:flex">
            <Button
              radius="sm"
              size="lg"
              className="bg-white text-black hover:bg-white/90 sm:text-lg text-sm px-4 py-2 rounded-md"
              variant="solid"
            >
              <Link href="/join">Join Now</Link>
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
        <div className="sm:w-2/5 sm:mt-[63px]">
          <img
            alt="makaut buddy company logo"
            src={logo.src}
            className="2xl:mt-[120px] "
          />
        </div>
      </div>
    </>
  );
}
