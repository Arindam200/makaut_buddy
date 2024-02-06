import React from "react";
import { Image } from "@nextui-org/react";

const Notes = ({ data }) => {
  return (
    <div>
      {data &&
        data.map(({ key, heading, description, link }) => (
          <div key={key}>
            <a href={link} className="sm:flex gap-5" target="_blank">
              <Image
                isZoomed
                className="sm:h-32 h-full w-full sm:w-52"
                alt="NextUI hero Image"
                src="https://imgs.search.brave.com/u999q1VjI7S3aj_vM7Xn_456FXEU16OBmwMLJOI6XZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjc2NTY4NTU4MzQt/MDIzNWU0MTc3OWZk/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRa/OGZHNXZkR1Y4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA"
              />
              <div className="flex-col sm:w-2/3 mt-3 sm:mt-5">
                <h3 className="text-xl  max-sm:text-center font-semibold">
                  {heading}
                </h3>
                <p className="text-sm w-full max-sm:mt-2">{description}</p>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Notes;
