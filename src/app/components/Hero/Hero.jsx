"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import ImgLeftLogo from "../../../../public/logo_components/left.png";
import ImgRightLogo from "../../../../public/logo_components/right.png";
import { useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const revRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <>
      <div className="font-grenze sm:flex sm:h-[calc(100vh-40px)] sm:justify-between px-10 sm:px-32 gap-16 sm:min-h-[calc(100vh-40px)]">
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
            MAKAUT Buddy is the one-stop academic solution for every students of the University.
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
        <div className="sm:w-2/5 sm:mt-12 flex items-center justify-center">
          <div className="grid grid-cols-2 justify-center items-end">
            <div>
              <motion.img
                initial={{ translateX: "25%", opacity: 0.5 }}
                style={{ rotate, scale, opacity }}
                className="relative justify-end"
                src={ImgLeftLogo.src}
              />
            </div>
            <div>
              <motion.img
                initial={{ translateX: "-25%" }}
                style={{ rotate: revRotate, scale, opacity }}
                className="relative justify-start items-end"
                src={ImgRightLogo.src}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
