"use client";

import Title from "./title";
import { MdModeEdit, MdDelete } from "react-icons/md";
import React, { useContext, useState, useRef, useEffect } from "react";
import { UserSessionContext } from "../Context/UsersessionContext";
import axios from "axios";

const Card = React.memo(
  ({ id, sem, subject, type, title, description, link }) => {
    const { userId, sessionClaims } = useContext(UserSessionContext);
    const [openEditWindow, setOpenEditWindow] = useState(false);
    const isAdmin = sessionClaims?.metadata?.role === "admin";

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [windowLoaded, setWindowLoaded] = useState(false);
    const [showConfirmationWindow, setShowConfirmationWindow] = useState(false);

    const semRef = useRef();
    const subjectRef = useRef();
    const headingRef = useRef();
    const descriptionRef = useRef();
    const linkRef = useRef();

    useEffect(() => {
      semRef.current ? (semRef.current.value = sem) : null;
      subjectRef.current ? (subjectRef.current.value = subject) : null;
      headingRef.current ? (headingRef.current.value = title) : null;
      descriptionRef.current
        ? (descriptionRef.current.value = description)
        : null;
      linkRef.current ? (linkRef.current.value = link) : null;
    }, [openEditWindow]);

    function updateResource(data) {
      axios
        .put(
          `https://makaut-buddy-back-end.iamsagar762.workers.dev/updateResource/${id}`,

          data,
          {
            headers: {
              "access-control-request-method": "PUT",
              Authorization: process.env.NEXT_PUBLIC_API_SECRET,
            },
          },
        )
        .then(function (response) {
          // handle success
          console.log(response.data);
          if (response.status === 200) {
            setSuccessMessage("resource uploaded successfully");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setError("some error occured");
        });
    }

    function deleteResource(id) {
      axios
        .delete(
          `https://makaut-buddy-back-end.iamsagar762.workers.dev/deleteResource/${id}`,
          {
            headers: {
              "access-control-request-method": "PUT",
              Authorization: process.env.NEXT_PUBLIC_API_SECRET,
            },
          },
        )
        .then(function (response) {
          // handle success
          console.log(response.data);
          if (response.status === 200) {
            setSuccessMessage("resource deleted successfully");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setError("some error occured");
        });
    }

    let counter = 0;

    const semesters = new Array(8).fill(0).map(() => {
      counter = counter + 1;
      return (
        <option key={counter} value={counter}>
          Semester {counter}
        </option>
      );
    });

    return (
      <div className="flex flex-col border-2 border-[#FFFFFF20] rounded-lg m-1">
        {openEditWindow ? (
          <section className="h-[70%] w-[60%] absolute z-20 top-[15%] left-[35%]">
            <section className="w-[50%] h-[90%] bg-white rounded-md z-30 ">
              <section className="flex items-center justify-center w-[100%] bg-white text-black ">
                <section className="p-[10px] font-semibold">
                  Edit Resource
                </section>
              </section>
              <section className="text-black flex flex-col items-center gap-4 z-[100] mt-[30px]">
                <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                  <label htmlFor="sem" className="text-[13px] pt-[0px] h-[10%]">
                    Select Semester*{" "}
                  </label>
                  <select
                    name="sem"
                    id="sem"
                    ref={semRef}
                    className="text-black bg-white pt-[10px]  h-[90%]"
                  >
                    {...semesters}
                  </select>
                </section>

                <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                  <label
                    htmlFor="subject"
                    className="text-[13px] pt-[0px] h-[10%]"
                  >
                    Enter Subject*
                  </label>
                  <input
                    type="text"
                    ref={subjectRef}
                    placeholder="subject"
                    id="subject"
                    className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]"
                  />
                </section>

                <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                  <label
                    htmlFor="heading"
                    className="text-[13px] pt-[0px] h-[10%]"
                  >
                    Enter Heading *{" "}
                  </label>
                  <input
                    type="text"
                    ref={headingRef}
                    placeholder="heading"
                    id="heading"
                    className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]"
                  />
                </section>

                <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                  <label
                    htmlFor="description"
                    className="text-[13px] pt-[0px] h-[10%]"
                  >
                    Enter Description *{" "}
                  </label>
                  <input
                    type="text"
                    ref={descriptionRef}
                    placeholder="description"
                    id="description"
                    className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]"
                  />
                </section>
                <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                  <label
                    htmlFor="link"
                    className="text-[13px] pt-[0px] h-[10%]"
                  >
                    Enter Link *{" "}
                  </label>
                  <input
                    type="text"
                    ref={linkRef}
                    placeholder="link"
                    id="link"
                    className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]"
                  />
                </section>
                <section className="flex flex-row gap-4">
                  <button
                    className="bg-[#121212] p-[10px] text-[#e3e4ea] min-w-[200px] max-w-[300px] rounded-md"
                    onClick={() => {
                      let updateData = new Object();

                      if (
                        semRef.current.value &&
                        semRef.current.value !== sem
                      ) {
                        updateData["sem"] = semRef.current.value.trim();
                      } else if (
                        subjectRef.current.value &&
                        subjectRef.current.value.trim() !== subject
                      ) {
                        updateData["subject"] = subjectRef.current.value.trim();
                      } else if (
                        headingRef.current.value &&
                        headingRef.current.value.trim() !== title
                      ) {
                        updateData["heading"] = headingRef.current.value.trim();
                      } else if (
                        descriptionRef.current.value &&
                        descriptionRef.current.value.trim() !== description
                      ) {
                        updateData["description"] =
                          descriptionRef.current.value.trim();
                      } else if (
                        linkRef.current.value &&
                        linkRef.current.value.trim() !== link
                      ) {
                        updatedata["link"] = linkRef.current.value;
                      } else {
                        setError("No changes made !");
                      }

                      if (Object.keys(updateData).length) {
                        updateResource(updateData);
                      }
                    }}
                  >
                    Save
                  </button>

                  <button
                    className="bg-[#121212] p-[10px] text-[#e3e4ea] min-w-[200px] max-w-[300px] rounded-md"
                    onClick={() => {
                      setOpenEditWindow(false);
                    }}
                  >
                    Close
                  </button>
                </section>
                {error ? (
                  <span className=" text-[#ff3b6b] mt-[10px] p-[10px] bg-[white] rounded-md ">
                    ! {error}
                  </span>
                ) : null}

                {successMessage ? (
                  <span className=" text-[#3cd93c] mt-[10px] p-[10px] bg-[white] rounded-md ">
                    {" "}
                    :{`)`} {successMessage}
                  </span>
                ) : null}
              </section>
            </section>
          </section>
        ) : null}

        {showConfirmationWindow ? (
          <section className="h-[70%] w-[60%] absolute z-20 top-[30%] left-[35%]">
            <section className="h-[35%] w-[50%] bg-white text-black ">
              <header className="h-[30%] flex items-center pl-[10%] text-[18px] font-semibold">
                Delete Resource?
              </header>
              <section className="h-[40%] flex items-center text-[15px] p-[40px]">
                Are you sure you want to delete the {title} resource?
              </section>
              <footer className="h-[30%] flex items-center justify-end gap-3">
                <button
                  className="p-[10px] bg-[#D7DBE4] rounded-md "
                  onClick={() => {
                    setShowConfirmationWindow(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="p-[10px] bg-[#F70000] rounded-md text-white mr-[20px]"
                  onClick={() => {
                    deleteResource(id);
                  }}
                >
                  Delete
                </button>
              </footer>
              {error ? (
                <span className=" text-[#ff3b6b] mt-[10px] p-[10px] bg-[white] rounded-md ">
                  ! {error}
                </span>
              ) : null}

              {successMessage ? (
                <span className=" text-[#3cd93c] mt-[10px] p-[10px] bg-[white] rounded-md ">
                  {" "}
                  :{`)`} {successMessage}
                </span>
              ) : null}
            </section>
          </section>
        ) : null}
        <div
          onClick={() => {
            window.open(link);
          }}
          className="basis-9/12"
        >
          <Title title={title} />
        </div>
        <div className="flex justify-between p-4 basis-3/12">
          <div
            className="pr-5"
            onClick={() => {
              window.open(link);
            }}
          >
            <div className="text-[#FFFFFF80] text-xl font-medium pb-1">
              {title}
            </div>
            <div className="text-[#FFFFFF50] text-sm">{description}</div>
          </div>
          {isAdmin && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => {
                  setOpenEditWindow(true);
                }}
                className="bg-[#D9D9D9] p-2 rounded-full"
                id="edit"
                aria-label="Edit"
              >
                <MdModeEdit style={{ color: "black" }} />
              </button>
              <button
                onClick={() => {
                  setShowConfirmationWindow(true);
                }}
                className="bg-[#D9D9D9] p-2 rounded-full"
                id="delete"
                aria-label="Delete"
              >
                <MdDelete style={{ color: "black" }} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
