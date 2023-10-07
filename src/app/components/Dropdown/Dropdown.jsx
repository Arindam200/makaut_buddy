import React, { useState, useContext } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { stream, subject } from './data';
import DataContext from '@/app/Context/DataContext';

export default function App() {
  const placement = 'outside';
  const getData = useContext(DataContext);

  return (
    <div className="w-full flex flex-col sm:gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Select
            key={placement}
            labelPlacement={placement}
            placeholder="Choose your stream"
            className="max-w-xs"
          >
            {stream.map((stream) => (
              <SelectItem
                key={stream.value}
                value={stream.value}
                onClick={() => getData.setYear(stream.value)}
              >
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
              <SelectItem
                key={subject.value}
                value={subject.value}
                onClick={() => getData.setSub(subject.value)}
              >
                {subject.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
