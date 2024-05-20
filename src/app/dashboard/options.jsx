"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  const [subject, setSubject] = React.useState("");

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-4 ">
      <div className="basis-1/2">
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
            <MenuItem value="B.Tech CSE 1st Semester">B.Tech CSE 1st Semester</MenuItem>
            <MenuItem value="B.Tech CSE 2nd Semester">B.Tech CSE 2nd Semester</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="basis-1/2">
        <FormControl fullWidth sx={formControlStyles}>
          <InputLabel id="subject-selector" sx={{ color: "#FFFFFF" }}>
            Select subject
          </InputLabel>
          <Select
            labelId="subject-selector"
            id="subject-selector"
            value={subject}
            label="Select subject"
            onChange={handleSubjectChange}
            sx={selectStyles}
          >
            <MenuItem value="Engineering Drawing">Engineering Drawing</MenuItem>
            <MenuItem value="Mathematics - I">Mathematics - I</MenuItem>
            <MenuItem value="Chemistry - I">Chemistry - I</MenuItem>
            <MenuItem value="Digital Electronics & Electrical">Digital Electronics & Electrical</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
