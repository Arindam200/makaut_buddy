"use client";

import { useContext, useState, useEffect } from "react";
import Tabs from "../ui/tabs";
import Card from "../ui/card";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { UserSessionContext } from "../Context/UsersessionContext";
import { NotesDataContext } from "../Context/NotesDataContext";
import UploadComponent from "../components/UploadComponent/UploadComponent";
import SearchBarComponent from "../components/SearchBarComponent/SearchBarComponent";
import Image from 'next/image';

export default function Page() {
  const { userId, sessionClaims } = useContext(UserSessionContext);
  const [startUpload, setStartUpload] = useState(false);
  const [isAdmin, setAdmin] = useState(null);
  // const isAdmin = sessionClaims?.metadata?.role === "admin";
  const [filter, setFilter] = useState("video");

  const [notesSearch, setNotesSearch] = useState("");
  const { notesData, setNotesData } = useContext(NotesDataContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    if (userId && sessionClaims) {
      setAdmin(sessionClaims?.metadata.role === "admin");
    }
  }, [userId, sessionClaims]);

  if (!userId || !sessionClaims) {
    console.error("User authentication data is missing");
    // return null;
  }

  const NoResourcesAvailable = () => (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
      <Image
        src="/empty-box.png"
        alt="No resources available"
        width={150}
        height={150}
        className="mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">No Resources Available</h2>
      <p className="text-gray-400 text-center max-w-md text-sm">
        It looks like there are no resources available at the moment. Check back later or try adjusting your filters.
      </p>
    </div>
  );

  return (
    <>
      {startUpload ? (
        <section className="h-[70%] w-[60%] absolute z-20 top-[15%] left-[35%]">
          <UploadComponent setStartUpload={setStartUpload} />
        </section>
      ) : null}
      <div className="h-full flex max-lg:flex-col">
        <div className="lg:h-screen justify-between lg:basis-1/12 py-3 lg:pt-14 bg-[#FFFFFF05] lg:border-r-2 border-[#FFFFFF20]">
          <Link href="/" className="hidden lg:flex justify-center">
            <ArrowBackIosNewRoundedIcon sx={{ fontSize: 50, color: "white" }} />
          </Link>
          <div className="flex justify-center items-center lg:hidden">
            <Link
              href="/"
              className="flex items-center justify-start px-4 w-1/2"
            >
              <ArrowBackIosNewRoundedIcon
                sx={{ fontSize: 40, color: "white" }}
              />
            </Link>
            <div className="flex justify-end w-1/2 px-4">
              <SignedIn>
                <UserButton
                  appearance={{
                    layout: { shimmer: true },
                    variables: {
                      borderRadius: "0.5",
                      colorBackground: "#d9d9d9",
                      colorInputBackground: "#d9d9d9",
                      colorPrimary: "#171717",
                    },
                    elements: {
                      avatarBox: "h-12 w-12 ",
                      userButtonPopoverFooter: "hidden",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
        <div className="lg:basis-11/12 flex flex-col px-4 lg:px-12 pt-6 lg:pt-14 pb-5 gap-2">
          <div className="flex items-center justify-between pb-2">
            <div className="text-3xl lg:text-5xl text-[#D9D9D9] font-medium">
              Dashboard
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <SignedIn>
                <UserButton
                  appearance={{
                    layout: { shimmer: true },
                    variables: {
                      borderRadius: "0.5",
                      colorBackground: "#d9d9d9",
                      colorInputBackground: "#d9d9d9",
                      colorPrimary: "#171717",
                    },
                    elements: {
                      avatarBox: "h-14 w-14 ",
                      userButtonPopoverFooter: "hidden",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
          <Tabs />
          <div className="h-full flex max-lg:flex-col border-2 border-[#FFFFFF20] rounded-lg my-4">
            <div className="flex flex-col lg:basis-1/3 justify-between py-4 border-r border-[#FFFFFF20]">
              <div>
                <div className="px-4 mb-2 max-lg:px-2">
                  <SearchBarComponent setNotesSearch={setNotesSearch} />
                </div>
         
                        {/* See Global.css rules for className radioButton */}

                <FormControl className="radioButton ">
                  <RadioGroup
                    aria-labelledby="filter notes by"
                    defaultValue="video"
                    name="notes-filter"
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="video"
                      control={
                        <Radio
                          sx={{
                            color: "#FFFFFF80",
                            "&.Mui-checked": {
                              color: "#D9D9D9",
                            },
                          }}
                        />
                      }
                      label="Video Tutorials"
                    />

                    <FormControlLabel
                      value="notes"
                      control={
                        <Radio
                          sx={{
                            color: "#FFFFFF80",
                            "&.Mui-checked": {
                              color: "#D9D9D9",
                            },
                          }}
                        />
                      }
                      label="Handwritten Notes"
                    />

                    <FormControlLabel
                      value="pyq"
                      control={
                        <Radio
                          sx={{
                            color: "#FFFFFF80",
                            "&.Mui-checked": {
                              color: "#D9D9D9",
                            },
                          }}
                        />
                      }
                      label="Previous Year Questions"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="lg:mt-[4rem] pl-4 lg:pl-10">
                {isAdmin && (
                  <div
                    className="flex items-center gap-3 mt-4 lg:mt-0 hover:cursor-pointer "
                    onClick={() => {
                      setStartUpload((val) => !val);
                    }}
                  >
                    <div className="bg-white hover:bg-[#CCCCCC] min-w-[200px] p-[10px] rounded-md text-black flex flex-row justify-evenly items-center">
                      <div>Add Resources</div>
                      <div className="p-[3px] border border-[black] rounded-full h-[20px] w-[20px] flex items-center justify-center">
                        <AddIcon
                          sx={{
                            color: "black",
                            fontSize: 15,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <section className="w-full lg:flex-grow flex justify-end items-start p-4 pt-8">
              {notesData.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                  {notesData
                    ?.filter((note) => {
                      if (filter.length === 0) {
                        return note;
                      } else {
                        return note.type === filter;
                      }
                    })
                    .filter((note) => {
                      if (notesSearch) {
                        return (
                          note.heading
                            .toLowerCase()
                            .includes(notesSearch.toLowerCase()) ||
                          note.description
                            .toLowerCase()
                            .includes(notesSearch.toLowerCase())
                        );
                      } else {
                        return note;
                      }
                    })
                    .map((note) => (
                      <Card
                        key={note.id}
                        id={note.id}
                        sem={note.sem}
                        subject={note.subject}
                        type={note.type}
                        title={note.heading}
                        description={note.description}
                        link={note.link}
                      />
                    ))}
                </div>
              ) : (
                <div className="w-full h-full flex justify-center">
                  <div className="max-w-xs md:max-w-sm">
                    <NoResourcesAvailable />
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}