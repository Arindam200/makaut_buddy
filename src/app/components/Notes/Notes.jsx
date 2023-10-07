'use client';
import React from 'react';
import { Image } from '@nextui-org/react';

const Notes = ({ data }) => {
  return (
    <div>
      {data &&
        data.map(({ key, heading, description, link }) => (
          <div  key={key}>
            <a href={link} className="sm:flex gap-5" target="_blank">
              <Image
                isZoomed
                className="sm:h-32 h-full w-full sm:w-52"
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
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
