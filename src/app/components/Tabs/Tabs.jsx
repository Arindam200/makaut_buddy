'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import Videos from '../Video/Video';
import PYQ from '../PYQ/Pyq';
import Notes from '../Notes/Notes';
import Data from './Data';

export default function App() {
  const [selected, setSelected] = useState('photos');
  const tabss = [
    { key: 'photos', title: 'PYQs' },
    { key: 'music', title: 'Video Tutorials' },
    { key: 'videos', title: 'Notes' },
  ];
  const tabs = Data();
  return (
    <div className="flex flex-col gap-2 ">
      <Tabs
        className="justify-center flex flex-col"
        size="lg"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        {tabss.map(({ key, title }) => (
          <Tab key={key} title={title}>
            <Card className="sm:h-[450px] overflow-hidden">
              <CardBody className="space-y-5">
                {selected === 'music'
                  ? tabs.map((tab) => <Videos key={tab} data={tab.video} />)
                  : selected === 'photos'
                  ? tabs.map((tab) => <PYQ key={tab} data={tab.pyq} />)
                  : tabs.map((tab) => <Notes key={tab} data={tab.notes} />)}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
