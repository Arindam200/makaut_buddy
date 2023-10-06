'use client';
import React from 'react';
import { Image } from '@nextui-org/react';

const Video = ({ data }) => {
  return (
    <div>
      {data &&
        data.map(({ key, heading, description, link }) => (
          <div className="sm:flex gap-5" key={key}>
            <a href={link} target="_blank">
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

export default Video;
{
  /* <div>
{console.log(data)}
<Tabs
  className="justify-center flex flex-col"
  size="lg"
  aria-label="Options"
  // selectedKey={selected}
  // onSelectionChange={setSelected}
>
  <Tab>
    <Card className="sm:min-h-[450px]">
      <CardBody className="space-y-5">
        {data &&
          data.map( => (
            <div className="sm:flex gap-5" key={key}>
              
                <Image
                  isZoomed
                  className="sm:h-32 h-full w-full sm:w-52"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div className="flex-col sm:w-2/3 mt-3 sm:mt-5">
                  <h3 className="text-xl  max-sm:text-center font-semibold">
                    
                  </h3>
                  <p className="text-sm w-full max-sm:mt-2">
                    
                  </p>
                </div>
              </a>
            </div>
          ))}
      </CardBody>
    </Card>
  </Tab>
</Tabs> */
}
