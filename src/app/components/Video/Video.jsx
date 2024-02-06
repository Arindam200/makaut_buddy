import React from "react";
import { Image } from "@nextui-org/react";

const Video = ({ data }) => {
  return (
    <>
      {data &&
        data.map(({ key, heading, description, link }) => (
          <div className="" key={key}>
            <a href={link} className="sm:flex gap-5" target="_blank">
              <Image
                isZoomed
                className="sm:h-32 h-full w-full sm:w-52"
                alt="NextUI hero Image"
                src="https://imgs.search.brave.com/YHibAj7NfPxh5gPV24mgxERDj9TzoGIPvB6jRVmTCQ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtc3RhdGljLmlu/dmlkZW8uaW8vdXBs/b2Fkcy8yMDIwLzEy/LzEtMy5qcGc"
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
    </>
  );
};

export default Video;
