import React from "react";
import { Image } from "@nextui-org/react";

const Pyq = ({ data }) => {
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
                src="https://imgs.search.brave.com/xNsnvEuMuycf-h-LY4FwqNNbsFkclIUyRX19N5nCuUc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODUyODc3/MzAxOTAtY2RkYmNl/ZDQ4MzRmP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRsOGZHNXZk/R1Y4Wlc1OE1IeDhN/SHg4ZkRBPSZ3PTEw/MDAmcT04MA"
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

export default Pyq;
