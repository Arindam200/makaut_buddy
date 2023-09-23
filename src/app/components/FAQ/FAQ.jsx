"use client";
import React from "react";
// import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <div className="sm:px-32 px-10 sm:py-20 py-10 sm:flex space-y-10">
        <div className="sm:w-1/2 flex items-center justify-start">
          <div className="space-y-5 max-sm:px-10">
            <h1 className="sm:text-5xl text-3xl max-sm:text-center font-bold">
              FAQ
            </h1>
            <h3 className="sm:text-xl text-sm max-sm:text-center">
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        <div className="sm:w-1/2 w-full text-white">
          <Accordion>
            <AccordionItem
              className="text-white"
              key="1"
              aria-label="Accordion 1"
              title="Accordion 1"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
