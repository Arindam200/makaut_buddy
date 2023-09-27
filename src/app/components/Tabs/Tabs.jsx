"use client";
import React from "react";

import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex flex-col">
      <Tabs
        className="justify-center flex flex-col"
        size="lg"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab className="" key="photos" title="PYQs">
          <Card className="min-h-[450px]">
            <CardBody>
              <div className="flex gap-5">
                <Image
                  isZoomed
                  //   size="md"
                  className="h-32 w-52"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div className="flex-col w-2/3 mt-5">
                  <h3 className="text-xl font-semibold">Heading</h3>
                  <p className="text-sm w-full">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Video Tutorials">
          <Card className="min-h-[450px]">
            <CardBody className="space-y-5">
              <div className="flex gap-5">
                <Image
                  isZoomed
                  //   size="md"
                  className="h-32 w-52"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div className="flex-col w-2/3 mt-5">
                  <h3 className="text-xl font-semibold">Heading</h3>
                  <p className="text-sm w-full">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Notes">
          <Card className="min-h-[450px]">
            <CardBody>
              <div className="flex gap-5">
                <Image
                  isZoomed
                  //   size="md"
                  className="h-32 w-52"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <div className="flex-col w-2/3 mt-5">
                  <h3 className="text-xl font-semibold">Heading</h3>
                  <p className="text-sm w-full">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
