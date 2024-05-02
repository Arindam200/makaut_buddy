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
            link:  "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
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
          {key: 13,
            heading: "Gauss Elimination Method",
            description:
              "Gauss elimination method, a linear algebra technique, efficiently solves systems of linear equations by systematically eliminating variables. It's fundamental in numerical analysis and computational science for solving large systems.",
            link: "https://www.youtube.com/watch?v=Gkit1hUTsX8",
          },
          {key: 14,
            heading: "Gauss Jordan Method",
            description:
              "Gauss-Jordan elimination is a linear algebra method for solving systems of equations by transforming a matrix to reduced row-echelon form, allowing straightforward solution extraction.",
            link: "https://www.youtube.com/watch?v=oPkTasoJngA",},
            {key: 15,
              heading: "Vector Space",
              description:
                "Vector space method is a mathematical framework used in natural language processing, representing words as vectors in multidimensional space to analyze relationships and semantics within textual data.",
              link: "https://www.youtube.com/watch?v=1XlT3Y2oyAU&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am",},
              {key: 16,
                heading: "Linearly Independent Linearly Dependents Vectors",
                description:
                  "Linearly independent vectors form a set where no vector can be expressed as a linear combination of the others. Conversely, linearly dependent vectors allow such expressions.",
                link: "https://www.youtube.com/watch?v=rDrQH9ma82o&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&index=4",},
                {key: 17,
                  heading: "Basis & Dimension",
                  description:
                    "In linear algebra, a basis is a set of vectors that spans a vector space, and the dimension is the number of vectors in that basis.",
                  link: "https://www.youtube.com/watch?v=Pc2dWW3aSrk&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&index=5",},
                  {key: 18,
                    heading: "Linear Transformation",
                    description:
                      "Linear transformations in a vector space preserve addition and scalar multiplication. They map vectors to other vectors while maintaining linearity, crucial for various applications in mathematics.",
                    link: "https://www.youtube.com/watch?v=1fLxcBJB_t8&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&index=6",},
                    {key: 19,
                      heading: "Kernel and Range",
                      description:
                        "In a vector space, the kernel is the set of vectors mapped to zero by a linear transformation, while the range is the span of the transformed vectors.",
                      link: "https://www.youtube.com/watch?v=r7ZsD95gcEE",},
                      {key: 20,
                        heading: "Rank Nullity Theorem",
                        description:
                          "The rank-nullity theorem states that for a linear transformation on a finite-dimensional vector space, the dimension of the kernel plus the dimension of the image equals the dimension of the space.",
                        link: "https://www.youtube.com/watch?v=HnFFuXDi9p8&t=348s",},
                        {key: 21,
                          heading: "Diagonalization of Matrix",
                          description:
                            "Diagonalization in vector spaces transforms a matrix into a diagonal form, simplifying computations. It reveals eigenvalues as diagonal entries and facilitates analysis of linear transformations.",
                          link: "https://www.youtube.com/watch?v=THONvuviGkc&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&index=13",},
                          {key: 22,
                            heading: "Gram-Schmidt Orthogonalisation Process",
                            description:
                              "The Gram-Schmidt orthogonalization process transforms a set of linearly independent vectors into an orthonormal basis, crucial for solving problems in linear algebra, signal processing, and quantum mechanics.",
                            link: "https://www.youtube.com/watch?v=UOZjINOGLog&list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&index=20",},
                            {key: 23,
                              heading: "Inner Product Space",
                              description:
                                "An inner product space is a vector space equipped with an inner product, defining geometric notions like length and angle. It provides a framework for analyzing vectors through scalar products.",
                              link: "https://www.youtube.com/watch?v=2e03K_056t0",},
                              {key: 24,
                                heading: "Evolutes and involutes",
                                description:
                                  "Evolutes and involutes are geometric curves related by their tangents. Evolutes trace the path of a point on a curve's normal, while involutes trace the path of its tangent.",
                                link: "https://www.youtube.com/watch?v=H9xxLXYSrCw",},
                        {key: 25,
                          heading: "Gamma Function",
                          description:
                            "The Gamma function, denoted Γ(z), extends factorials to complex and real numbers. It's integral to diverse fields like number theory, statistics, and quantum mechanics, facilitating computations involving continuous sums.",
                          link: "https://www.youtube.com/watch?v=SduCO-r_TOA",},
                          {key: 26,
                            heading: "Beta function",
                            description:
                              "The Beta function is a special function in mathematics, defined as an integral involving the Gamma function. It has applications in probability theory and statistics.",
                            link: "https://www.youtube.com/watch?v=IaG-24IhULY&t=959s",},
                        {key: 27,
                          heading: "Evaluate surface areas and volumes of revolutions",
                          description:
                            "When evaluating surface areas and volumes of revolutions, integrate along the axis of revolution, accounting for rotation",
                          link: "https://www.youtube.com/watch?v=x4U4n4DaxZ8&t=744s",},
                          {key: 28,
                            heading: "Rolle's Theorem",
                            description:
                              "Rolle's Theorem states that if a function is continuous on a closed interval, differentiable on the open interval, and its endpoints are equal, then there exists a point of tangency.",
                            link: "https://www.youtube.com/watch?v=IFtjDDB8fzo&t=511s",},
                            {key: 29,
                              heading: "Lagrange's Mean Value Theorem",
                              description:
                                "Lagrange's Mean Value Theorem states that for a continuous function on a closed interval, there exists a point where the derivative equals the average rate of change.",
                              link: "https://www.youtube.com/watch?v=_rLizW7giT4&list=PLU6SqdYcYsfJlpLH35MEWnKAQYFJoLCy9&index=3",},
                              {key: 30,
                                heading: "L'Hospital's rule",
                                description:
                                  "L'Hospital's Rule, in calculus, aids in evaluating limits of indeterminate forms by taking derivatives. It's vital for handling ratios of functions that approach zero or infinity.",
                                link: "https://www.youtube.com/watch?v=H-TZUMCWgo8&t=3s" ,},
                                {key: 31,
                                  heading: "Maxima and minima",
                                  description:
                                    "Maxima and minima refer to the highest and lowest points, respectively, in a mathematical function or data set. They represent extremes.",
                                  link: "https://www.youtube.com/watch?v=NpR91wexqHA&t=223s",},
                                  
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
              "DC Circuits (BEE) Inductor (Energy stored and Power Absorbed by Inductor)",
            description:
              "This energy is actually stored in the magnetic field generated by the current flowing through the inductor",
            link: "https://youtu.be/Abgy3ITy2_Q?si=KsalRkGbhQ2pnlkA",
          },
          {
            key: 5,
            heading:
              "SEMICONDUCTOR TYPE | Intrinsic Extrinsic p-Type n-Type |",
            description:
              "P-type semiconductors are created by doping an intrinsic semiconductor with an electron acceptor element during manufacture",
            link: "https://youtu.be/DvYfs6rXKuE?si=26gAJ3Meg3Katg_U",
          },
          {
            key: 6,
            heading:
              "conductor insulator semiconductor",
            description:
              "Levels of conductivity are the main difference between conductors, semiconductors and insulators.",
            link: "https://youtu.be/UVIYqLYgM6k?si=DjC0VyV7nh4iGnBD",
          },

          {


            key: 7,
            heading:
              "All about Forward Bias",
            description:
              "In forward bias, the p-type(anode) of the semiconductor is connected to the positive end, and the n-type(cathode) is connected to the negative end of the battery.",
            link: "https://youtu.be/icrAf1us2IQ?si=t1Sm6NJFaQ72t6AA",
          },
          {
            key: 8,
            heading:
              " All about Reverse bias ",
            description:
              "The backward diode is a special form of tunnel diode in which the tunneling phenomenon is only incipient, and the negative resistance region virtually disappears",
            link: "https://youtu.be/u_8b4GAUWCg?si=tVdWEuqno9ddsw5h",
          },
          {
           
            key:9,
            heading:
            " All about Ideal Diode (First Approximation of PN junction Diode) Basic Electronics",
            description:
            "An ideal diode means a perfect diode which has all properties in their perfect sense without any flaws",
            link:
            "https://www.youtube.com/watch?v=W_4rBZdd41Q&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=5",}
          ,
          {
            key:10,
            heading:"Photo Diode (Construction & Working) Special Purpose Diodes (Basic Electronics)",
            description:"A photodiode is a light-sensitive semiconductor diode.It produces current when it absorbs photons.",
            link:"https://www.youtube.com/watch?v=BZLOGi3t740&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=36",
          },
          
          {
            key:11,
            heading:
            " All about Zener Diode",
            description:
            "Zener diodes are semiconductor devices that allow current to flow in both directions but specialize in current flowing in reverse. Also known as breakdown diodes.",
            link:
           "https://youtu.be/qVwEVXf3CBQ?si=Go_1C_oDuR-9z1Z2",},
          { 
            key:12,
            heading:
            " characteristics of PN junction Diode (Diode thory & applications)",
            description:
            "PN junction diode has the ability to rectify electric current. It can create a potential barrier and make use of its capacitance properties. ",
            link:
            "https://youtu.be/7ITiehTTh-o?si=biSt8YIpolzsHOAy",},
          
          {
            key:13,
            heading:"Introduction to LC Filter",
            description:"a suitable L and C network can effectively filter out the A.C component from the rectified wave.",
            link:"https://youtu.be/DBw2sNphRME?si=v8zXdz1LHlPHMZfe",
          },
          
         
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
            "Working of Transistor (NPN)",
            description:
            "A transistor can act as a switch or gate for electronic signals, opening and closing an electronic gate many times per second",
            link:
            "https://youtu.be/tPE26DO3cDw?si=a9ar5g1s0UOvxu8g",},
            {
              key:16,
              heading:"Operation of PNP Transistor - Bipolar Junction Transistor",
              
              description:
              "In a PNP transistor, the base current which enters into the collector is amplified",
              link:
              "https://youtu.be/Lx3ApgmyQlc?si=-1jDfPCanifda9LN",},

          {
            key:17,
            heading:
            "MOSFET , EMOSFET , DMOSFET ",
            description:
            "MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) is a type of transistor that includes subcategories such as E-MOSFET (Enhancement MOSFET) and D-MOSFET (Depletion MOSFET), each with distinct characteristics, used for electronic switching and amplification.",
            link: 
           "https://youtu.be/X4_8dh-J4ik?si=YYRGX4crLGd-RV0_",},

           {
            key:18,
            heading:
            "Clipper Circuits",
            description:
            "A clipper circuit is an electronic circuit that clips or cuts off a portion of the input waveform, used for limiting voltage levels or shaping waveforms in signal processing applications.",
            link:
            "https://www.youtube.com/watch?v=ZpTQAZbu-44&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=14",
           },
           {
            key:19,
            heading:
            "Clamper Circuits",
            description:
            "Clamper circuits are electronic circuits that shift the DC level of a signal without affecting its shape, useful for tasks like DC restoration in communication systems.",
            link:
            "https://www.youtube.com/watch?v=wfc5PYw-IbM&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=15",
           },
           {
            key:20,
            heading:
            "Half wave rectifier",
            description:
            "A half-wave rectifier is an electronic circuit that converts AC input to pulsating DC output by allowing only one half of the input waveform to pass.",
            link:
            "https://www.youtube.com/watch?v=gYxH-D9Det8&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=8",
           },
           {key:21,
            heading:
            "Full Wave Rectifier",
            description:
            "A full-wave rectifier converts both halves of an alternating current (AC) input signal into direct current (DC), utilizing two diodes to ensure continuous flow in both polarities.",
            link:
            "https://www.youtube.com/watch?v=8FAaLGxM98U&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=9",
           },
          {key:22,
            heading:
            "KCL",
            description:
            "KCL law is used to describe how a charge enters and leaves a wire junction point or node on a wire",
            link:
            "https://youtu.be/TaqJ4OYqv3A?si=ba2vJmVuXYTsGoDG",
           },
          {key:23,
            heading:
            "KVL",
            description:
            "Kirchhoff's Voltage Law (KVL) can be used to calculate the potential drop across a resistance.",
            link:
            "https://youtu.be/aZIizOWnuB8?si=nm3S-UiBDPj_DWxw",
           },
           {key:24,
            heading:
            "Thevenin's Theorem",
            description:
            "Thevenin's theorem is especially useful for analyzing circuits by removing the load resistance from the original circuit and simplifying.",
            link:
            "https://youtu.be/_h62NLQ33DA?si=qIyOP05uzxPZ3h3-",
           },

        
          {
            key:25,
            heading:
            "All about Norton's Theorm",
            description:
            "It states that any complex linear circuit can be simplified to an equivalent simple circuit with a single current source in parallel with a single resistor connected to a load.",
            link: 
           "https://youtu.be/T7MJpfhXGjs?si=gHQnaoByttYH814K",},
           {
            key:26,
            heading:
            "All about superposition theorm",
            description:
            "It states that in any linear, bilateral network where more than one source is present, the response across any element in the circuit is the sum of the responses obtained from each source considered separately.",
            link: 
           "https://youtu.be/1icXtW97tIo?si=OzOYPBIAh85zymP2",},
           {
            key:27,
            heading:
            "All about Maximum Power Transfer Theorm",
            description:
            "It explains that to generate maximum external power through a finite internal resistance (DC network), the resistance of the given load must be equal to the resistance of the available source.",
            link: 
           "https://youtu.be/U85eA3-suiQ?si=MA3dzftJRpr-pquE",},   
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
          {
            key: 11,
            heading: "Projection of Planes | Problem Series | Part 1",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/anG2oGzGgF8?si=gWV64YHaVoPXCT2-",
          },
          {
            key: 12,
            heading: "Projection of Planes | Problem Series | Part 2",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/qQsdiV9PPWI?si=2gB9O9p1eFaE5nYP",
          },
          {
            key: 13,
            heading: "Projection of Planes | Problem Series | Part 3",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/r7O9SU9w_Eg?si=RGnjXus0GNwWbO3R",
          },
          {
            key: 14,
            heading: "Projection of Solids Idea & Standard Procedure",
            description:
              "How solids are classified and learn to draw the projection of solids when it is inclined to HP, VP and even both??",
            link: "https://youtu.be/S3ma-LKVJdI?si=NbtAjiWNTGgSfnpz",
          },
          {
            key: 15,
            heading: "Projection of Solids | Problem Series | Part 1",
            description:
              "Problems of Projection of Solids ",
            link: "https://youtu.be/gb3OCnkr5Ts?si=q29rB0IT7vc21DM6",
          },
          {
            key: 16,
            heading: "Projection of Solids | Problem Series | Part 2",
            description:
              "Problems of Projection of Solids ",
            link: "https://youtu.be/HQa3GwmGfEY?si=RNWN63NFokE03swV",
          },
          {
            key: 17,
            heading: "Section of Solids | Concept & Problem Series | Part 1",
            description:
              "Concepts & Problems of Section of Solids",
            link: "https://youtu.be/tm3Ty2yimbc?si=wDPDqes3yz2vHJB4",
          },
          {
            key: 18,
            heading: "Section of Solids | Concept & Problem Series | Part 2",
            description:
              "Concepts & Problems of Section of Solids",
            link: "https://youtu.be/2HA5eTpO6ec?si=gXBdx-cn0Ut-9Mec",
          },
          {
            key: 19,
            heading: "Development of Surfaces | Part 1",
            description:
              "Devlopment of surfaces of Prism and Pyramid",
            link: "https://youtu.be/8qpTtaTSdBA?si=THJdUA088KiEUl0L",
          },
          {
            key: 20,
            heading: "Development of Surfaces | Part 2",
            description:
              "Devlopment of surfaces of Cone and Cylinder",
            link: "https://youtu.be/8yWsVAeeB78?si=WsFnVxY1TKpx-vXv",
          },
          {
            key: 21,
            heading: "Conic Sections | Part 1 | Introduction and Concept",
            description:
              "Introduction and Concept of Conic Sections",
            link: "https://youtu.be/3V_k9u3Uny8?si=soqM3Q4yHAF7ieVz",
          },{
            key: 22,
            heading: "Conic Sections | Part 2 | Ellipse in General Method",
            description:
              "Construction of Ellipse in general method ",
            link: "https://youtu.be/OM6FB3DWFTI?si=COmeg_Ke0z-5groH",
          },{
            key: 23,
            heading: "Conic Sections | Part 3 | Ellipse in Oblong Method",
            description:
              "Construction of Ellipse in oblong method ",
            link: "https://youtu.be/t5szsD_4kG4?si=J1Tj3mroLTsKipbr",
          },
          {
            key: 24,
            heading: "Conic Sections | Part 4 | Ellipse in Concentric Circles Method",
            description:
              "Construction of Ellipse in Concentric Circles Method",
            link: "https://youtu.be/UFpKFyLt8Iw?si=A51C_fxZFEvQOUHS",
          },
          {
            key: 25,
            heading: "Conic Sections | Part 5 | Ellipse in Arcs of Circles Method",
            description:
              "Construction of Ellipse in Arcs of Circles Method",
            link: "https://youtu.be/f2itGi4u3nE?si=KRPi7FF2qHrZ3959",
          },
          {
            key: 26,
            heading: "Conic Sections | Part 6 | Best Problems on Ellipse",
            description:
              "Problems and solutions on Construction of Ellipse",
            link: "https://youtu.be/Y-bR4ChEslY?si=TRmGouS7vU4ZU_rR",
          },
          {
            key: 27,
            heading: "Conic Sections | Part 7 | Parabola in General Method",
            description:
              "Construction of Parabola in General Method",
            link: "https://youtu.be/EEAjjP-Phe4?si=_ps9ap2SYZO4tlKN",
          },
          {
            key: 28,
            heading: "Conic Sections | Part 8 | Problem 1 on Parabola in Rectangle Method",
            description:
              "Problem 1 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/XqB4MEzFkJ4?si=V3IwAR5kDjaLNJEc",
          },
          {
            key: 29,
            heading: "Conic Sections | Part 9 | Problem 2 on Parabola in Rectangle Method",
            description:
              "Problem 2 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/O7ZcrsioRBE?si=A8fk46dqQnHNPdFy",
          },
          {
            key: 30,
            heading: "Conic Sections | Part 10 | Problem 3 on Parabola in Rectangle Method",
            description:
              "Problem 3 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/g9YnfkMrR-w?si=uG3seShoeVsQRB4V",
          },
          {
            key: 31,
            heading: "Conic Sections | Part 11 | Problem 4 on Parabola in Tangent Method",
            description:
              "Problem 4 on Construction of Parabola in Tangent Method",
            link: "https://youtu.be/FMClHjnXk7Y?si=YhlWv13NWLHbMt1G",
          },
          {
            key: 32,
            heading: "Conic Sections | Part 12 | Hyperbola in General Method",
            description:
              "Construction of Hyperbola in General Method",
            link: "https://youtu.be/fWOJIxpTVa8?si=gOfm4MyC0Fo5i5t4",
          },
          {
            key: 33,
            heading: "Conic Sections | Part 14 | Problems on Hyperbola ",
            description:
              "Problems and Solutions on Construction of Hyperbola",
            link: "https://youtu.be/V5qsFot9dMQ?si=OTIzp3gd1KsjZtsE",
          },
          {
            key: 34,
            heading: "Conic Sections | Part 15 | Hyperbola in Arcs of Circles Method ",
            description:
              "Construction of Hyperbola in Arcs of Circles Method ",
            link: "https://youtu.be/_CeQjBs5AT8?si=omlj6HEwRo0ErUIv",
          },
          {
            key: 35,
            heading: "Conic Sections | Part 16 | Tangent and Normal to Different Conic Sections ",
            description:
              "Construction of Tangent to Ellipse, Parabola, Hyperbola ",
            link: "https://youtu.be/OnXeBDJbEe8?si=znpXlBnYd6GrsWZi",
          },
          {
            key: 36,
            heading: "Isometric Projection | Part 1 |",
            description:
              "Iso-view and Iso-Projection",
            link: "https://youtu.be/9aFDVSIcdvI?si=A-y3pE1ba56mvRxt",
          },
          {
            key: 37,
            heading: "Isometric Projection | Part 2 |",
            description:
              "Orthographic Projection and Isometric View",
            link: "https://youtu.be/tLFjCS3h9MY?si=k8_eGi2WdN2_eyem",
          },
          {
            key: 38,
            heading: "Isometric Projection | Part 5 |",
            description:
              "Problem 4 on Isometric View",
            link: "https://youtu.be/TqrID4SeFTo?si=cX0QE-aicjyM_lLA",
          },
          {
            key: 39,
            heading: "Isometric Projection | Part 6 |",
            description:
              "Problem 5 on Isometric View",
            link: "https://youtu.be/ilWFZOfmvI8?si=OVwRHWSkwdoDqC15",
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
          {
            key: 9,
            heading: "Atomic and Molecular Structure|Dalton's and Rutherford Atomic Model",
            description:
              "Dalton hypothesized that atoms were solid spheres. Rutherford's nuclear model showed atoms with a nuclear center and other particles randomly orbiting at a distance.",
            link: "https://youtu.be/NMN1zm_X9bk?si=8kktSlGexUsW6eJA",
          },
          {
            key: 10,
            heading: "Atomic and Molecular Structure|BOHR'S Atomic Model",
            description: 
              "The Bohr model postulates that electrons orbit the nucleus at fixed energy levels.",
            link: "https://youtu.be/ULarF8oaBYc?si=nLzFlhoKFV52LVX1",
          },
          {
            key: 11,
            heading: "Atomic and Molecular Structure|QUANTUM MECHANICAL MODEL",
            description:
              "The Quantum Mechanical Model of the Atom views electrons within an atom as waves, not as particles as previously believed.",
            link: "https://youtu.be/Jo2OjH7DF6A?si=OYcwixVquoyv603G",
          },
          {
            key: 12,
            heading:"Atomic and Molecular Structure|Shape of Orbitals and Hydrogen Energy",
            description:
              "The orbital energies obtained for hydrogen using quantum mechanics are exactly the same as the allowed energies calculated by Bohr.",
            link: "https://youtu.be/0eHCtql4QVc?si=V4Xki6BTW9zXNr3O",
          },
          {
            key: 13,
            heading: "Atomic and Molecular Structure|Electronic Configuration",
            description: 
              "Electron configurations describe where electrons are located around the nucleus of an atom.",
            link: "https://youtu.be/QvznEhd-8Ts?si=4-3ui46QkBsWYpE4",
          },
          {
            key: 14,
            heading: "Atomic and Molecular Structure|Molecular Orbital Theory",
            description:
              " The molecular orbital theory states that each atom tends to combine together and form molecular orbitals.",
            link: "https://youtu.be/e0hyIUS7PfA?si=cNBDwB_geXZv7elg",
          },
          {
            key: 15,
            heading: "Atomic and Molecular Structure|Sigma Bond & Pi Bond",
            description:
              "Sigma bonds are formed by the axial overlap of half- filled atomic orbitals. Pi bonds are formed through the lateral overlap of the half - filled atomic orbitals.",
            link: "https://youtu.be/YvUs43mTSnY?si=z7R0H7lKnA5e9ZRV",
          },
          {
            key: 16,
            heading: "Atomic and Molecular Structure|Molecular Orbital Energy Level For Homonuclear Diatomic Molecules",
            description:
              "Homonuclear diatomic molecules are made up of two chemically bonded atoms of the same element.",
            link: "https://youtu.be/bT-1hiZAWJM?si=31kyFu_kdRidAY69",
          },
          {
            key: 17,
            heading: "Atomic and Molecular Structure|Molecular Orbital Energy Level For Heteronuclear Diatomic Molecules",
            description:
              "Diatomic molecules with two different atoms are called heteronuclear diatomic molecules.",
            link: "https://youtu.be/QKKGvnf6cv8?si=hvw-ofC9a1lO9Gsl",
          },
          {
            key: 18,
            heading: "Spectroscopy Introduction",
            description:
              "Basic introduction of spectroscopy",
            link: "https://youtu.be/B2tPeoKgDKQ?si=uKOMHa6aOHkKirt8",
          },
          {
            key: 19,
            heading: "UV visible Spectroscopy",
            description:
              "Describing the secrets of molecules with UV-Visible Spectroscopy",
            link: "https://youtu.be/KkrTrTdfiBM?si=cMXMXmao5YxhqhBW",
          },
          {
            key: 20,
            heading: "Instrumentation and application of UV visible spectroscopy",
            description:
              "Instrumentation and practical applications of UV-Visible Spectroscopy",
            link: "https://youtu.be/-w0GytWMvms?si=cDTUEiDtCOp7juZj",
          },
          {
            key: 21,
            heading: "Principle of IR spectroscopy",
            description:
              "Exploring the fundamental principles behind infrared spectroscopy",
            link: "https://youtu.be/gqzR8-Vlmgc?si=g581viVAYi7C97zk",
          },
          {
            key: 22,
            heading: "Instrumentation & application of IR spectroscopy",
            description:
              "Exploring the fundamentals and diverse applications of Infrared Spectroscopy",
            link: "https://youtu.be/DhDhVbTT9sQ?si=2eruMZ2zsiocytZH",
          },
          {
            key: 23,
            heading: " periodic properties (effective nuclear charge)",
            description:
             "The occurrence of the elements with similar properties after certain regular intervals when they are arranged in increasing order of atomic number",
            link: "https://youtu.be/uhRs0REbDhA?si=hY5St_OPrlcE7t03",
          },  
          {
            key: 24,
            heading: "periodic properties (variation in s p d f orbitals energies)",
            description:
            "The basic law governing modern periodic table states that the properties of elements are periodic functions of their atomic number",
            link: "https://youtu.be/VSTqzzTM51M?si=DElFO0t89dve_eH9",
          }, 
          {
            key: 25,
            heading: "Electronic configuration",
            description:
              "Exploring the arrangement of electrons in an atom",
            link: "https://youtu.be/e7ei-gAkH_8?si=T4qMTmd16Awo7K0I",
          },
          {
            key: 26,
            heading: "Atomic and ionic sizes",
            description:
              "Exploring the fundamental concepts behind the sizes of atoms and ions",
            link: "https://youtu.be/PNSGx3OLIlk?si=3dQTdAMMoNH74KyH",
          },
          {
            key: 27,
            heading: "Periodic Properties-Electron affinity",
            description:
              "Demystifying Electron Affinity: Understanding the Attraction of Atoms",
            link: "https://youtu.be/IkjA0xs11Sk?si=MLg2Y2nv0h_SzL6u",
          },
          {
            key: 28,
            heading: "Periodic Properties-Electronegativity",
            description:
              "Decoding Electronegativity: The Power Struggle of Atoms",
            link: "https://youtu.be/IkjA0xs11Sk?si=XXZdW3AsTbn9aI8k",
          },
          {
            key: 29,
            heading: "Periodic Properties-Polarizability and Polarising Power",
            description:
              "The ability of a cation to distort an anion is known as its polarization power and the tendency of the anion to become polarized by the cation is known as its polarizability.",
            link: "https://youtu.be/M33GzJSQMYQ?si=vVISrEICgo29F4e4",
          },
          {
            key: 30,
            heading: " periodic properties-Oxidation State and oxidation number",
            description: 
              "The oxidation number or state of an atom/ion is the number of electrons an atom/ion that the molecule has either gained or lost compared to the neutral atom.",
            link: "https://youtu.be/VVs66CwHFuc?si=WSdM1GddDiSgA2B9",
          },
          {
            key: 31,
            heading: "Stereochemistry-Introduction",
            description:
              "basic introduvtion on Isomerism and Isomers",
            link: "https://youtu.be/2Ou5cPT58MA?si=cPYroBtA_xfEIxZv",
          },
          {
            key: 32,
            heading: "Stereochemistry-Terms used in Optical Activity, Optically Active Compound, Enantiomers",
            description:
              "the ability of a chiral molecule to rotate the plane of plane-polairsed light, measured using a polarimeter",
            link: "https://youtu.be/yVhL3pK4vmc?si=fN-S9ET0IMFIcF86",
          },
          {
            key: 33,
            heading: "Stereochemistry-Diastereomers, Racemic",
            description:
              "stereoisomers that are not related as object and mirror image and are not enantiomers",
            link: "https://youtu.be/k6Ym6XRp0gY?si=8oRKDCJjuPcHCSR9",
          },
          {
            key: 34,
            heading: "Stereochemistry-Without, With Chiral C-Atom, Biphenyl, Allenes",
            description:
              "about Optically Active compounds without or with Chiral Carbon atom",
            link: "https://youtu.be/mYDwwNosIOU?si=P-x79lLhpXaVmnqX",
          },
          {
            key: 35,
            heading: "Stereochemistry-R S Nomenclature, CIP Rule",
            description:
              "Tricks to find R/S Nomenclature of chiral molecule with example",
            link: "https://youtu.be/pYefUVk6OWU?si=e3QEXSWGNBZB1xFq",
          },
          {
            key: 36,
            heading: "Stereochemistry-Geometrical, Cis-Trans",
            description:
              "exhibit a type of stereoisomerism where the atoms have different spatial arrangements in three-dimensional space",
            link: "https://youtu.be/WFQwwTr5SVs?si=rfVtioe8G84BdWHX",
          },
          {
            key: 37,
            heading: "Stereochemistry-E Z, Nomenclature Of Geometrical Isomers ",
            description:
              "the orientation of a functional group in a compound",
            link: "https://youtu.be/DftQyhm_FA4?si=NAuQDHpEFhuaBSPt",
          },
          {
            key: 38,
            heading: "Stereochemistry-chiral drugs  ",
            description:
              "importance of chiral drugs",
            link: "https://youtu.be/l1IIftU0BmU?si=AgrjKExNEmqiFzUo",
          },
          { 
            key: 39,
            heading: " organic reactions",
            description:
             "chemical reactions involving organic compounds",
            link: "https://youtu.be/61jaFrlLT0M?si=AjCa4Odz7S1Rw_ZN",
          },
          {
            key: 40,
            heading: "Nucleophilic Substitution Reaction ",
            description:
              "a class of organic reactions where one nucleophile replaces another",
            link: "https://youtu.be/2U1xKSEMNkY?si=NFfzztoCppLfASvi",
          },
          {
            key: 41,
            heading: "substitution reaction",
            description:
              "a chemical reaction during which one functional group is replaced by another functional group in a chemical compound",
            link: "https://youtu.be/h8D3KxHkEyI?si=AQmwpuSjqvrTafZd",
          },
          {
            key: 42,
            heading: "Addition Reaction",
            description: 
             " In the simplest of terms of organic chemistry, we can say that an addition reaction is a chemical reaction wherein two or more reactants come together to form a larger single product",
            link: "https://youtu.be/GvrM-0gN_Co?si=RHIvcyaeZi3Pnq5D",
          },
          {
            key: 43,
            heading: "Free Radical Addition Reaction",
            description: 
             "a chemical reaction wherein two or more reactants come together to form a larger single product",
            link: "https://youtu.be/flO_UsDd0yY?si=xRQTr0OyNwYyGZjF",
          },
          {
            key: 44,
            heading: "Elimination Reaction",
            description: 
             "a type of reaction that is mainly used to transform saturated compounds to unsaturated compounds",
            link: "https://youtu.be/Gv4ri_3Oyak?si=FRU0phVCgx4qTgcN",
          },
          {
            key: 45,
            heading: "Oxidation and Reduction",
            description: 
             "a process which involves the addition of oxygen or any electronegative element or the removal of hydrogen or any electropositive element",
            link: "https://youtu.be/OT8EdHHqpnM?si=tTu6ONcS24IcYwiV",
          },
          {
            key: 46,
            heading: "cyclization",
            description:
              "is the formation of a ring in a chemical compound, such as cyclize. It is a noun and a verb with the same meaning",
            link: "https://youtu.be/Z5G94J0-FBk?si=OnV2uRnFCTY7LyWA",
          },
          {
            key: 47,
            heading: "Ring Opening Reaction",
            description: 
             "important transformations that afford a 1,2-halohydrin system with two successive chiral carbon centers",
            link: "https://youtu.be/nQxwkIPDYzg?si=bWKWPWl9iw6MQdjo",
          },
          {
              key: 48,
            heading: "Synthesis ",
            description:
              "the composition or combination of parts or elements so as to form a whole ",
            link:  "https://youtu.be/8oQkJpuCsIQ?si=lcMerrsFWO-6ZsXM ",
          },
          {
            key: 49,
            heading: "Aromaticity",
            description:
               "a property of the conjugated cycloalkenes which enhances the stability of a molecule due to the delocalization of electrons present in the π-π orbitals",
            link: "https://youtu.be/bq1PZcKY50o?si=0OgJu2lakHRPy6Jw",
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