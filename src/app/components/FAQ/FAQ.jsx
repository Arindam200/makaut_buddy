"use client";
import React from "react";
// import { Divider } from "@nextui-org/react";
import "../Features/index.css"
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function FAQ() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  const content1 = "Absolutely!! All the resources available on this platform are from trusted and well-renowned sources and are followed many students all over the country, and are compiled together for you by the toppers.";
  const content2=  "Yes and we all have too!! These are the refined and finest resources that can guarantee you a 9+ CGPA easily if you study them well enough, even one night before the exam.";
  const content3=  "The resources here are completely free and is solely made for you folks with the love and passion of three of us, i.e. Swapnoneel Saha, Arindam Majumder and Samyabrata Maji.";
  const content4=  "Although the resources gathered here are precisely targeted for the students of MAKAUT, but it may be fruitful to other college students too. So, don't hesitate to use them if you are not from MAKAUT, but looking for some good resources.";
  return (
    <>
      <div className=" sm:px-32 border px-10 sm:py-20 py-10 sm:flex space-y-10 bg-gradient-to-b from-blue-500 to-purple-500">
        <div className="sm:w-1/2 flex items-center justify-start">
          <div className="space-y-5 max-sm:px-10 ">
            <h1 className="sm:text-7xl text-5xl max-sm:text-center font-bold">
              FAQ
            </h1>
            <h3 className="font-sans text-[#FFFFFF70] sm:text-xl text-black font-bold text-md max-sm:text-center">
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        <div className="sm:w-1/2 w-full text-black">
          <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <AccordionItem className="text-black " key="1" aria-label="Accordion 1" title="Are the resources reliable?">
              {content1}
            </AccordionItem>
            <AccordionItem className="text-black " key="2" aria-label="Accordion 2" title="Can I get 9+ CGPA with this?">
              {content2}
            </AccordionItem>
            <AccordionItem className="text-black " key="3" aria-label="Accordion 3" title="Is this free or do I need to pay?">
              {content3}
            </AccordionItem>
            <AccordionItem className="text-black " key="4" aria-label="Accordion 4" title="Is this only helpful for MAKAUT students?">
              {content4}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
