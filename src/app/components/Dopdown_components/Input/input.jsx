import React from "react";
import {Input} from "@nextui-org/react";

export default function App({setInput}) {

  return (
    <div className="w-full flex flex-col gap-4">
        <div key="bordered" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="search" variant="bordered" label="Search For Subjects" className="w-[50%]" onChange={(e) => {setInput(e.target.value)}}/>
        </div>
    </div>  
  );
}

