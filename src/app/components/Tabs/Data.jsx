import { useContext } from 'react';
import DataContext from '@/app/Context/DataContext';

const Data = () => {
  const getData = useContext(DataContext);
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

  return tabs;
};

export default Data;
