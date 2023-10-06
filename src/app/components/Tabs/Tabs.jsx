'use client';
import React, { useState, useContext } from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import Videos from '../Video/Video';
import PYQ from '../PYQ/Pyq';
import Notes from '../Notes/Notes';
import DataContext from '@/app/Context/DataContext';

export default function App() {
  const getData = useContext(DataContext);
  const [selected, setSelected] = useState('photos');
  // const tabs = [
  //   {
  //     key: 'photos',
  //     title: 'PYQs',
  //     content: [
  //       {
  //         heading: 'Heading 1',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //       },
  //     ],
  //   },
  //   {
  //     key: 'music',
  //     title: 'Video Tutorials',
  //     content: [
  //       {
  //         heading: 'Heading 2',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //       },
  //       {
  //         heading: 'Heading 3',
  //         description: 'Another description for Video Tutorials.',
  //       },
  //     ],
  //   },
  //   {
  //     key: 'videos',
  //     title: 'Notes',
  //     content: [
  //       {
  //         heading: 'Heading 4',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //       },
  //     ],
  //   },
  // ];
  const tabss = [
    { key: 'photos', title: 'PYQs' },
    { key: 'music', title: 'Video Tutorials' },
    { key: 'videos', title: 'Notes' },
  ];

  const tabs = [
    getData.sub == 'Mathematics' &&
      getData.year == 'B.Tech CSE 1st Semester' && {
        video: [
          {
            key: 1,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 2,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 3,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 4,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 5,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
        ],
        pyq: [
          {
            key: 1,
            heading: 'heading1',
            description: 'des1',
          },
        ],
        notes: [],
      },
    getData.sub == 'Chemistry' &&
      getData.year == 'B.Tech CSE 2nd Semester' && {
        video: [
          {
            key: 1,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 2,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 3,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 4,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
          {
            key: 5,
            heading: 'heading1',
            description: 'des1',
            link: 'https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa',
          },
        ],
        pyq: [
          {
            key: 1,
            heading: 'heading1',
            description: 'des1',
          },
        ],
        notes: [],
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
        {tabss.map(({ key, title }) => (
          <Tab key={key} title={title}>
            <Card className="sm:min-h-[450px]">
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
