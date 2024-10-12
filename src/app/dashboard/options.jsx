"use client";
import * as React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { subject } from "@/app/utils/subjectStreamData";
import { NotesDataContext } from "../Context/NotesDataContext";

const formControlStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF80",
    "& fieldset": {
      borderColor: "#FFFFFF20",
      borderWidth: "2px",
      borderRadius: "8px",
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF50",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF50",
    },
    "& .MuiSvgIcon-root": {
      color: "#FFFFFF80",
    },
  },
};

const selectStyles = {
  color: "#FFFFFF",
  ".MuiSelect-icon": { color: "#FFFFFF" },
  ".MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
  "& .MuiSelect-select": { color: "#FFFFFF80" },
};

export default function SelectLabels() {
  const [stream, setStream] = React.useState("");
  const [showSubjects, setShowSubjects] = useState(false);
  const [listOfSubjects, setListofSubjects] = useState([]);
  const [sub, setSubject] = React.useState("");
  const { notesData, setNotesData } = useContext(NotesDataContext);

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `/api/v1/getResource?sub=${sub}`,
        {
          headers: {
            "access-control-request-method": "GET",
            Authorization: process.env.NEXT_PUBLIC_API_SECRET,
          },
        },
      )
      .then(function (response) {
        // handle success
        setNotesData(response.data.documents);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [sub]);

  useEffect(() => {
    if (stream) {
      setShowSubjects(true);
      setListofSubjects(() => {
        // if user selects BTECH sem 1 then the value of stream is 1 and it will strip all the subjects that have sem != 1
        return subject
          .filter((sub) => sub.sem === stream)
          .map((sub) => {
            return (
              <MenuItem key={sub.value} value={sub.value}>
                {sub.label}
              </MenuItem>
            );
          });
      });
    }

    return () => {
      setShowSubjects(false);
    };
  }, [stream]);

  let counter = 0;

  const semester = new Array(8).fill(0).map(() => {
    counter += 1;
    return (
      <MenuItem key={counter} value={counter}>
        B.Tech CSE Semester {counter}
      </MenuItem>
    );
  });

  return (
    <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-4 ">
      <div style={showSubjects ? { flexBasis: "50%" } : { flexBasis: "100%" }}>
        <FormControl fullWidth sx={formControlStyles}>
          <InputLabel id="stream-selector" sx={{ color: "#FFFFFF" }}>
            Select stream
          </InputLabel>
          <Select
            labelId="stream-selector"
            id="stream-selector"
            value={stream}
            label="Select stream"
            onChange={handleStreamChange}
            sx={selectStyles}
          >
            {...semester}
          </Select>
        </FormControl>
      </div>

      {showSubjects ? (
        <div className="basis-1/2">
          <FormControl fullWidth sx={formControlStyles}>
            <InputLabel id="subject-selector" sx={{ color: "#FFFFFF" }}>
              Select subject
            </InputLabel>
            <Select
              labelId="subject-selector"
              id="subject-selector"
              value={sub}
              label="Select subject"
              onChange={handleSubjectChange}
              sx={selectStyles}
            >
              {...listOfSubjects}
            </Select>
          </FormControl>
        </div>
      ) : null}
    </div>
  );
}
