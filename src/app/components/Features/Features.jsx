import React from "react";
import Image from "next/image";
import logo_s from "./feature-image.png";
import "./index.css";

const FeatureBox = ({ number, text }) => (
  <div
    className="box w-64 h-96 text-black"
    role="region"
    aria-labelledby={`feature-${number}`}
    tabIndex="0"
  >
    <div className="tri"></div>
    <div className="pl-8 pt-1 pr-6 space-y-5">
      <h1
        id={`feature-${number}`}
        className="text-7xl text-start font-grenze font-bold"
      >
        {number}.
      </h1>
      <h2 className="text-lg text-[#171717]">{text}</h2>
    </div>
  </div>
);

const Features = () => {
  const featureData = [
    {
      number: 1,
      text: "All the previous year questions compiled in a bundle so that practice becomes easy and ever, and chances of getting commons are extremely high.",
    },
    {
      number: 2,
      text: "The best YouTube tutorials that can help you one-shot each and every concept with ultimate ease, and make the last-night prep easy af.",
    },
    {
      number: 3,
      text: "Classified Handwritten notes just for you guys, straight from the toppers which will give you the ultimate edge at excelling the semester exam.",
    },
  ];

  return (
    <div
      id="features"
      className="sm:px-32 flex relative px-16 bg-[#000000] text-white"
    >
      <div className="space-y-10 sm:py-20 pt-16">
        <h1 className="text-7xl max-sm:text-center font-bold font-grenze">
          Features
        </h1>
        <div className="flex max-sm:flex-col justify-start gap-10">
          {featureData.map((feature, index) => (
            <FeatureBox
              key={index}
              number={feature.number}
              text={feature.text}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:block relative mr-5">
        <Image
          src={logo_s}
          className="-z-50 w-[490px] 2xl:ml-[105px]"
          width={500}
          height={500}
          alt="Makaut Buddy Hero Image"
        />
      </div>
    </div>
  );
};

export default Features;
