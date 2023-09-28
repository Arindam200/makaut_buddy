import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { stream, subject } from "./data";

export default function App() {
  const placement = "outside"; // Since there's only one placement value

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            key={placement}
            labelPlacement={placement}
            placeholder="Choose your stream"
            className="max-w-xs"
          >
            {stream.map((stream) => (
              <SelectItem key={stream.value} value={stream.value}>
                {stream.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            key={placement}
            labelPlacement={placement}
            placeholder="Choose your subject"
            className="max-w-xs"
          >
            {subject.map((subject) => (
              <SelectItem key={subject.value} value={subject.value}>
                {subject.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
