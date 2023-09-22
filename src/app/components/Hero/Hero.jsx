"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import logo from "../../../../public/hero.svg";

export default function Hero() {
  return (
    <>
      <div className="flex mt-20 justify-between px-32">
        <div className="pt-10 w-3/5 space-y-5">
          <h2 className="text-6xl  font-bold text-white text-start ">
            All the resources you want, at your fingertips.
          </h2>
          <h3 className="text-start text-xl text-white">
            MAKAUT Buddy is the one-stop academic solution for every students of
            the University.
          </h3>
          <div className="btn space-x-5">
            <Button
              className="text-lg"
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
              className="text-black bg-white text-lg"
              color="red"
              variant="solid"
            >
              Join Now!!
            </Button>
          </div>
        </div>
        <div className="w-2/5">
          <Image src={logo} className="p-10 py-0" alt="Logo" />
        </div>
      </div>
    </>
  );
}
