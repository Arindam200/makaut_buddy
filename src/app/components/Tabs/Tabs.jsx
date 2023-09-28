"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = useState("photos");
  const tabs = [
    {
      key: "photos",
      title: "PYQs",
      content: [
        {
          heading: "Heading 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      key: "music",
      title: "Video Tutorials",
      content: [
        {
          heading: "Heading 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          heading: "Heading 3",
          description: "Another description for Video Tutorials.",
        },
      ],
    },
    {
      key: "videos",
      title: "Notes",
      content: [
        {
          heading: "Heading 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <Tabs
        className="justify-center flex flex-col"
        size="lg"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            <Card className="min-h-[450px]">
              <CardBody className="space-y-5">
                {tab.content.map((contentItem, index) => (
                  <div className="flex gap-5" key={index}>
                    <Image
                      isZoomed
                      className="h-32 w-52"
                      alt="NextUI hero Image"
                      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    />
                    <div className="flex-col w-2/3 mt-5">
                      <h3 className="text-xl font-semibold">
                        {contentItem.heading}
                      </h3>
                      <p className="text-sm w-full">
                        {contentItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
