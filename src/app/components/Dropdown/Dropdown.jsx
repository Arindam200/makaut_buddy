"use client";

import React, { useState, useContext } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { stream, subject } from './data';
import DataContext from '@/app/Context/DataContext';
import Toggle from '../Dopdown_components/Toggle/toggle';
import SubjectDropDown from '../Dopdown_components/SubjectDropDown/dropdown';
import Input from '../Dopdown_components/Input/input';
import List from '../Dopdown_components/List/list';

export default function App() {
  const placement = 'outside';
  const getData = useContext(DataContext);
  const [showSubjectsDropDown , setShowSubjectsDropdown ] = useState({show : false  , sem : null});
  const [activeBar, setActiveBar] = useState("filter");
  const [input , setInput] = useState("");

  console.log(input);
  return (
    <div className="w-full flex flex-col sm:gap-6">
      <div className="flex flex-col gap-2">
       <Toggle activeBar={activeBar} setActiveBar={setActiveBar} />
        {activeBar === "filter" ? 
        <>
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
                  onClick={() => {
                    getData.setYear(stream.value)
                    setShowSubjectsDropdown({show : true , sem : stream.sem});
                  }}
                >
                  {stream.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <SubjectDropDown showSubjectsDropDown={showSubjectsDropDown} subject={subject} getData={getData} placement={placement}/>
        </>
    
    : 
    
    <div className="w-full flex flex-col sm:gap-6">
      <Input setInput={setInput}/>
      <List subject={subject} input={input} />
    </div>
    }
      </div>
    </div>
  );
}
