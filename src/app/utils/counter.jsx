"use client";

import React from "react";
import CountUp from "react-countup";

const Counter = React.memo(({ number, title }) => {
  return (
    <div className="number">
      <CountUp duration={5} className="counter" end={number} start={0} />
      <span>{title}</span>
    </div>
  );
});

Counter.displayName = "Counter";

export default Counter;
