"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState, useCallback, useMemo } from "react";

const FAQ = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const handleSelectionChange = useCallback((keys) => {
    setSelectedKeys(keys);
  }, []);

  const content1 = useMemo(
    () =>
      "Absolutely!! All the resources available on this platform are from trusted and well-renowned sources and are followed many students all over the country, and are compiled together for you by the toppers.",
    [],
  );
  const content2 = useMemo(
    () =>
      "Yes and we all have too!! These are the refined and finest resources that can guarantee you a 9+ CGPA easily if you study them well enough, even one night before the exam.",
    [],
  );
  const content3 = useMemo(
    () =>
      "The resources here are completely free and is solely made for you folks with the love and passion of three of us, i.e. Swapnoneel Saha, Arindam Majumder and Samyabrata Maji.",
    [],
  );
  const content4 = useMemo(
    () =>
      "Although the resources gathered here are precisely targeted for the students of MAKAUT, but it may be fruitful to other college students too. So, don't hesitate to use them if you are not from MAKAUT, but looking for some good resources.",
    [],
  );

  return (
    <div
      id="faq"
      className="sm:px-32 px-10 sm:py-20 py-10 sm:flex space-y-10 
      bg-[#000000] text-white"
    >
      <div className="sm:w-1/2 flex items-center justify-start">
        <div className="space-y-5 max-sm:px-10 font-grenze">
          <h1 className="sm:text-7xl text-5xl max-sm:text-center font-bold">
            FAQ
          </h1>
          <h2 className="font-sans text-[#ffffff8c] sm:text-xl text-md max-sm:text-center">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      <div className="sm:w-1/2 w-full text-[#fff]">
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          <AccordionItem
            key="1"
            className="text-[#ffffff8c]"
            aria-label="Accordion 1"
            title="Are the resources reliable?"
          >
            {content1}
          </AccordionItem>
          <AccordionItem
            key="2"
            className="text-[#ffffff8c]"
            aria-label="Accordion 2"
            title="Can I get 9+ CGPA with this?"
          >
            {content2}
          </AccordionItem>
          <AccordionItem
            key="3"
            className="text-[#ffffff8c]"
            aria-label="Accordion 3"
            title="Is this free or do I need to pay?"
          >
            {content3}
          </AccordionItem>
          <AccordionItem
            key="4"
            className="text-[#ffffff8c]"
            aria-label="Accordion 4"
            title="Is this only helpful for MAKAUT students?"
          >
            {content4}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
