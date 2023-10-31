import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Data = () => {
  const getData = useContext(DataContext);
  const tabs = [
    getData.sub == "Mathematics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Unitary Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/3nafrDiN0gU?si=OwRhRtzVqLtxMySv",
          },
          {
            key: 3,
            heading: "Linear Form of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
          },
          {
            key: 4,
            heading: "Taylor Series",
            description:
              " What is Taylor Theorem and how To Prove this? What is Taylor Series and how to expand this By Taylor Theorem?",
            link: "https://youtu.be/LEspaisjDFE?si=ygEIeVE__0-bMl1_",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "Mathematics-I 2021",
            description:
              "Mathematics-I 2021 question paper of MAKAUT in-house batch",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "Matrix Practice Problems",
            description:
              "Matrix Problems involving unitary matrix, rank of a matrix, orthogonal matrix, Trace of a matrix, etc.",
          },
        ],
      },
    getData.sub == "Electrical & Digital Electronics" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading:
              "Understand and analyze basic electric and magnetic circuits",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/watch?v=UdaDs-zKfsA",
          },
          {
            key: 2,
            heading:
              "Study the working principles of electrical machines and power converters.",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/j_4jvMwIla0?si=ue3tTdmOsEZrd1ai",
          },
          {
            key: 3,
            heading:
              "Introduce the components of low voltage electrical installations",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://youtu.be/2_deQIpxNkQ?si=qfU5fReEKM5_Etjb",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Engineering Drawing" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 3,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 4,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Chemistry" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
          {
            key: 1,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 2,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 3,
            heading: "Thermodynamic Properties and Process",
            description:
              "some basic concepts related to thermodynamic properties and thermodynamic processes",
            link: "https://youtu.be/ke1Qfc5SnnE?si=ykhgrV2mZq01uVlO",
          },
          {
            key: 4,
            heading: "Different Types Of Thermodynamic Process",
            description:
              " different types of thermodynamic processes on the basis of pressure, temperature and volume.",
            link: "https://youtu.be/llJd3XcboBo?si=VuMuCeww1ky1kPKW",
          },
          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
  ];

  return tabs;
};

export default Data;
