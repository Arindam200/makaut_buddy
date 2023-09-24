import React from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";

export default function App() {
  const placements = ["outside"];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {/* <h3 className="text-default-500 text-small">Without placeholder</h3> */}
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Select
              key={placement}
              labelPlacement={placement}
              // label="Favorite Animal"
              className="max-w-xs"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* <h3 className="text-default-500 text-small">With placeholder</h3> */}
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Select
              key={placement}
              labelPlacement={placement}
              // label="Favorite Animal"
              placeholder="Select an animal"
              className="max-w-xs"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          ))}
        </div>
      </div>
    </div>
  );
}
