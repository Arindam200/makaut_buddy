"use client";

import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={5} className="counter" end={number} start={0} />
      <span>{title}</span>
    </div>
  );
}