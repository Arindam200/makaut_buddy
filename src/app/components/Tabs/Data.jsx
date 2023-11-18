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
            heading: "Introduction to Matrices 1",
            description:
              " What is matix?, How to calculate Determinants?,Types of Determinants, Minor & Cofactors, and Properties of Determinants",
            link: "https://www.youtube.com/watch?v=b-UZJVdLbXc&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=1",
          },
          {
            key: 2,
            heading: "Introduction to Matrices 2",
            description:
            "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
            link: "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
          },
          {
            key: 3,
            heading: "Properties of Matrices",
            description:
              " What is Adjoint matrix? What is Inverse of a matrix? What are symmetric, skew-symmetric and orthogonal matrices?? ",
            link: "https://www.youtube.com/watch?v=HyaeoGZyX10&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=3",
          },
          {
            key: 4,
            heading: "Rank of a matrix using Elementary Operations",
            description:
              " What is Rank of a matrix ?? How to calculate it ?? Calculation of Rank using Elementary transformation.",
            link: "https://youtu.be/p5rBJj5CKCg?si=pPXTxicqYATGcOGQ",
          },

          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "Rank of a Matrix: Maximum independent rows/columns,Inverse of a Matrix: Multiplicative counterpart, yielding identity matrix when multiplied.",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 6,
            heading: "Unitary Matrix",
            description:
              "Unitary Matrix Basics: Definition and properties, Applications: Quantum mechanics, signal processing, and data compression.",
            link: "https://www.youtube.com/live/3nafrDiN0gU?si=OwRhRtzVqLtxMySv",
          },
          {
            key: 7,
            heading: "Linear Form of Matrix",
            description:
              "Linear Form Basics: Understanding linear transformations and representations, Applications: Computer graphics, physics simulations, and engineering modeling.",
            link: "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
          },
          {
            key: 8,
            heading: "Taylor Series",
            description:
              " What is Taylor Theorem and how To Prove this? What is Taylor Series and how to expand this By Taylor Theorem?",
            link: "https://youtu.be/LEspaisjDFE?si=ygEIeVE__0-bMl1_",
          },
          {
            key: 9,
            heading: "Rank of Matrix Using Normal Form",
            description:
              "Concept of Normal form and its Type, Calculation of Rank Using Normal/Canonical Form along with example.",
            link: "https://www.youtube.com/watch?v=gdMfFdg6RNk",
          },
          {
            key: 10,
            heading: "Consistency of Linear Non-Homogeneous Equations",
            description:
              "Concept of consistency, how to check consistency, condition for unique solution, infinite solution and no solution",
            link: "https://www.youtube.com/watch?v=41Y38WjHbtE",
          },        
          {
            key: 11,
            heading: "Cayley Hamilton Theorem & its application",
            description:
              " Statement of Cayley Hamilton Theorem. Usage of Cayley Hamilton theorem. Solved problems",
            link: "https://youtu.be/H53VgxdohRM?si=RHrsvd26uMn3byRP",
          },
          {
            key: 12,
            heading: "Eigen Value and Eigen Vector",
            description:
              "Concept of Eigen value and Eigen vector. Working rule to find Eigen value and Eigen vector. Examples",
            link: "https://www.youtube.com/watch?v=ZX5YnDMzwbs",
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

          {


            key: 4,
            heading:
              "All about Forward Bias",
            description:
              "In forward bias, the p-type(anode) of the semiconductor is connected to the positive end, and the n-type(cathode) is connected to the negative end of the battery.",
            link: "https://youtu.be/icrAf1us2IQ?si=t1Sm6NJFaQ72t6AA",
          },
          {
            key: 5,
            heading:
              " All about Reverse bias ",
            description:
              "The backward diode is a special form of tunnel diode in which the tunneling phenomenon is only incipient, and the negative resistance region virtually disappears",
            link: "https://youtu.be/u_8b4GAUWCg?si=tVdWEuqno9ddsw5h",
          },
              {
           
            key:6,
            heading:
            " All about Ideal Diode (First Approximation of PN junction Diode) Basic Electronics",
            description:
            "An ideal diode means a perfect diode which has all properties in their perfect sense without any flaws",
          link:
          "https://www.youtube.com/watch?v=W_4rBZdd41Q&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=5",}
          ,
          {
            key:7,
            heading:"Photo Diode (Construction & Working) Special Purpose Diodes (Basic Electronics)",
            description:"A photodiode is a light-sensitive semiconductor diode.It produces current when it absorbs photons.",
            link:"https://www.youtube.com/watch?v=BZLOGi3t740&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=36",
          },
          
          {
            key:8,
            heading:
            " All about Zener Diode",
            description:
            "Zener diodes are semiconductor devices that allow current to flow in both directions but specialize in current flowing in reverse. Also known as breakdown diodes.",
          link:
          "https://youtu.be/qVwEVXf3CBQ?si=Go_1C_oDuR-9z1Z2",},
          { 
            key:9,
            heading:
            " characteristics of PN junction Diode (Diode thory & applications)",
            description:
            "PN junction diode has the ability to rectify electric current. It can create a potential barrier and make use of its capacitance properties. ",
          link:
          "https://youtu.be/7ITiehTTh-o?si=biSt8YIpolzsHOAy",},
          {
            key:10,
            heading:
            "All about half wave rectifier",
            description:
            "A half-wave rectifier converts an AC signal to DC by passing either the negative or positive half-cycle of the waveform and blocking the other. ",
          link:
          "https://youtu.be/gYxH-D9Det8?si=or6doeDfFpivP-CN",},
          {

            key:11,
            heading:
            "All about full wave rectifier",
            description:
            "A full wave rectifier is defined as a rectifier that converts the complete cycle of alternating current into pulsating DC.",
          link:
          "https://youtu.be/8FAaLGxM98U?si=GH-ShzVKBOP_Ks5H",},
          {
            key:12,
            heading:"Introduction to LC Filter",
            description:"a suitable L and C network can effectively filter out the A.C component from the rectified wave.",
            link:"https://youtu.be/DBw2sNphRME?si=v8zXdz1LHlPHMZfe",
          },
          
          {
            key:13,
            heading:
            "Introduction to RC Filter",
            description:
            "The RC filter influences both the RF bandwidth by removing the harmonics as well as the ripple voltage at the output of the rectifier.",
          link:
          "https://youtu.be/97u-Jrab9Ck?si=T1Dz6LnaeDJimmYJ",},
          { 
            key:14,
            heading:
            "Introduction to Transistor",
            description:
            "A transistor is a type of semiconductor device that can be used to conduct and insulate electric current or voltage. ",
          link:
          "https://youtu.be/08jcU8rb9SU?si=h_6l-AoOAL6T6frK",},
          {
            key:15,
            heading:
            "Working of Transistor",
            description:
            "A transistor can act as a switch or gate for electronic signals, opening and closing an electronic gate many times per second",
          link:
          "https://youtu.be/tPE26DO3cDw?si=a9ar5g1s0UOvxu8g",},
   
          {
            key:16,
            heading:
            "CB configuration (Common Base Connection) Bipolar Junction Transistor ",
            description:
            "In Common Base Connection arrangement, input is applied between the emitter and base, and output is taken from the collector and base ",
          link:
          "https://youtu.be/RoN-sXrFXZI?si=tcFFPR27e2uYgC2y",},
          {
            key:17,
            heading:
            "CE configuration (Common Emitter Connection) Bipolar Junction Transistor ",
            description:
            "In electronics, a common-emitter amplifier is one of three basic single-stage bipolar-junction-transistor (BJT) amplifier topologies, typically used as a voltage amplifier ",
          link:
          "https://youtu.be/bUx-9zu4syM?si=dCHQlA2aulyUd3Ww",},
          {
            key:18,
            heading:
            "CC configuration (Common Collector Connection) Bipolar Junction Transistor ",
            description:
            "The configuration in which the collector is common between emitter and base is known as CC configuration",
          link:
          "https://youtu.be/_ayby0owDWg?si=dE4lm0uW0-Zf2T3a",},
          {
            key:19,
            heading:
            "Transistor Characteristics (CE Transistor) Basic Electronics  ",
            description:
            "The variation of collector current(IC) with the base current(IB), keeping Collector-Emitter voltage(VCE) constant.",
          link:
          "https://youtu.be/ouVd3urrQxs?si=_oyfjFOlsr3JUEjv",},
          {
            key:20,
            heading:
            "DC load line | AC load line | Operating point | Q point | BJT | ",
            description:
            "The DC load line is the load line of the DC equivalent circuit, defined by reducing the reactive components to zero",
          link:
          "https://youtu.be/QBbvca5Az_s?si=jAWMytWoQEOS92T0",},
          {
            key:21,
            heading:
            "Fixed Bias , Base Bias , Transistor Biasing",
            description:
            "Fixed bias, base bias, and transistor biasing are techniques in electronic circuits that involve applying a predetermined voltage to the base of a transistor to establish a stable operating point, ensuring proper biasing for optimal transistor performance",
            link: 
            "https://www.youtube.com/watch?v=E-CmyN8nD1Y&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=27",},
            {
            key:22,
            heading:
            "Collector to Base Bias (Transistor Biasing)",
            description:
            "Collector-to-Base Bias, a transistor biasing method, involves connecting a resistor between the collector and base terminals to establish a stable operating point for the transistor and ensure proper biasing in electronic circuits.",
            link: 
            "https://www.youtube.com/watch?v=1YalqxRJUAI&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=28",},
              {
                key:23,
                heading:
                "Voltage Divider Bias , in BJT ",
                description:
                "Voltage Divider Bias in BJT (Bipolar Junction Transistor) involves using a resistor network to create a stable voltage at the base terminal, ensuring proper transistor biasing for reliable and controlled amplification in electronic circuits",
                link: 
                "https://www.youtube.com/watch?v=TysNq8Gww5s&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=30",},
                {
                  key:24,
                  heading:
                  "JFET (Junction Field Effect Transistor) Working & Characteristics",
                  description:
                  "JFET (Junction Field Effect Transistor) operates based on the control of current by voltage at the gate terminal, and its characteristics include high input impedance, low noise, and voltage-controlled amplification in electronic circuits.",
                 link: 
                 "https://www.youtube.com/watch?v=5mimDymf0g0&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=58",},
                 {
                  key:25,
                  heading:
                  "MOSFET , EMOSFET , DMOSFET ",
                  description:
                  "MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) is a type of transistor that includes subcategories such as E-MOSFET (Enhancement MOSFET) and D-MOSFET (Depletion MOSFET), each with distinct characteristics, used for electronic switching and amplification.",
                 link: 
                 "MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) is a type of transistor that includes subcategories such as E-MOSFET (Enhancement MOSFET) and D-MOSFET (Depletion MOSFET), each with distinct characteristics, used for electronic switching and amplification.",},
                
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
          {
            key: 2,
            heading: "heading2",
            description: "des1",
          },
        ],
      },
    getData.sub == "Engineering Drawing" &&
      getData.year == "B.Tech CSE 1st Semester" && {
        video: [
         {
            key: 1,
            heading: "Introduction to Orthographic Projection",
            description:
              "In this video you will get a detailed understanding about orthographic projection",
            link: "https://www.youtube.com/watch?v=SB83cUaAiCM&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=1",
          },
          {
            key: 2,
            heading: "Projection of Point",
            description:
              "What is Projection of Point?",
            link: "https://www.youtube.com/watch?v=aZ3gnOQIFHI&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=2",
          },
          {
            key: 3,
            heading: "Introduction to Projection of Lines Part1",
            description:
              "3D projections of lines",
            link: "https://youtube.com/watch?v=MSg7DpKgaK8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=3",
          },
          {
            key: 4,
            heading: "Introduction to Projection of Lines Part2",
            description:
              "Introduction to Projection of Lines",
            link: "https://www.youtube.com/watch?v=wzxAFXejjw8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=4",
          },
          {
            key: 5,
            heading: "Projection of Point | Problem Series ",
            description:
              "Problems on Projection of point ",
            link: "https://youtube.com/watch?v=MzbxVLFKN9g&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=5",
          },
          {
            key: 6,
            heading: "Projection of Lines | Problem Series | Part 1 ",
            description:
              "Problems on Projection of lines",
            link: "https://www.youtube.com/watch?v=BaaxLHH1d-Q&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=6",
          },
          {
            key: 7,
            heading: "Projection of Lines | Problem Series | Part 2 ",
            description:
              "Projection of Lines | Problem Series | Part 2 ",
            link: "https://www.youtube.com/watch?v=f9e2xq3yKQ0&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=7",
          },
          {
            key: 8,
            heading: "Projection of Lines | Problem Series | Part 3 ",
            description:
              "Projection of Lines | Problem Series | Part 3 ",
            link: "https://www.youtube.com/watch?v=RR6k8Djbvh8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=8",
          },
          {
            key: 9,
            heading: "Plain and Diagonal Scales | Complete Concept & Problems ",
            description:
              "What is Representative fraction, Scale? How to construct a Plain Scale and Diagonal Scale? ",
            link: "https://www.youtube.com/watch?v=yneCL-mXeH8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=9",
          },
          {
            key: 10,
            heading: "Projection of Planes Idea & Standard Procedure",
            description:
              "Projection of Planes Idea & Standard Procedure",
            link: "https://www.youtube.com/watch?v=SNWhs81ho0Q&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=10",
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
            heading: "Introduction to Thermodynamics",
            description:
             "Thermodynamics is the science of the relationship between heat, work, temperature, and energy.",
            link: "https://youtu.be/72JId0JrNKU?si=0dg-9XcP_KkAG3K2",
          },
          {
            key: 2,
            heading: "Thermodynamic Systems",
            description:
             "A thermodynamic system is defined as a quantity of matter or a region in space that is of interest.",
            link: "https://youtu.be/H3dCYqw-Y4o?si=TnwnHGTOdOsgZi-t",
          },
          {
            key: 3,
            heading: "Thermodynamic Properties and Process",
            description:
              "some basic concepts related to thermodynamic properties and thermodynamic processes.",
            link: "https://youtu.be/ke1Qfc5SnnE?si=hjeYNlBX4XNUkjID",
          },
          
          {
            key: 4,
            heading: "Different Types Of Thermodynamic Process",
            description:
              "different types of thermodynamic processes on the basis of pressure, temperature and volume.",
            link: "https://youtu.be/llJd3XcboBo?si=hew8qTo8OXmSzY_N",
          }, 
          {
            key: 5,
            heading: "Quasistatic Process ",
            description:
              "some basic concepts related to quasistatic process.",
            link: "https://youtu.be/GDI2bVji2DU?si=b1zf42vOnFxZB-UV",

          },
          {
            key: 6,
            heading: "Thermodynamic Equilibrium ",
            description:
              "the properties of which do not change with time and that can be changed to another condition only at the expense of effects on other systems",
            link: "https://youtu.be/LH40zR2EPmQ?si=TPNRRm9LZkIZYITA",
          },
          {
            key: 7,
            heading: "Pure Substance And State Postulate.",
            description:
              "the state postulate for a simple, pure substance states that the equilibrium state can be determined by specifying any two independent intensive properties",
            link: "https://youtu.be/eP9Fd2N2Jtc?si=BSo52O_xDmGrA",
          },
          {
            key: 8,
            heading: "Concept Of Continuum",
            description:
              "an area that can keep being divided and divided infinitely; no individual particles",
            link: "https://youtu.be/tlQzJoJfTlA?si=dv5u_LIGcp9wBw94",
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
