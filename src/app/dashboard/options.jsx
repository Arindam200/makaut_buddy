"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [val1, setVal1] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const handleChange1 = (event) => {
    setVal1(event.target.value);
  };
  const handleChange2 = (event) => {
    setVal2(event.target.value);
  };

  return (
    <div className="flex w-full gap-4">
      <div className="basis-1/2">
        <FormControl
          fullWidth
          sx={{
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
          }}
        >
          <InputLabel id="subject-selector" sx={{ color: "#FFFFFF" }}>
            Select stream
          </InputLabel>
          <Select
            labelId="stream-selector"
            id="demo-stream-selector-helper"
            value={val1}
            label="Select stream"
            onChange={handleChange1}
            sx={{
              color: "#FFFFFF",
              ".MuiSelect-icon": { color: "#FFFFFF" },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
              },
              "& .MuiSelect-select": {
                color: "#FFFFFF80",
              },
            }}
          >
            <MenuItem value="B.Tech CSE 1st Semester">
              B.Tech CSE 1st Semester
            </MenuItem>
            <MenuItem value="B.Tech CSE 2nd Semester">
              B.Tech CSE 2nd Semester
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="basis-1/2">
        <FormControl
          fullWidth
          sx={{
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
          }}
        >
          <InputLabel id="subject-selector" sx={{ color: "#FFFFFF" }}>
            Select subject
          </InputLabel>
          <Select
            labelId="subject-selector"
            id="demo-subject-selector-helper"
            value={val2}
            label="Select subject"
            onChange={handleChange2}
            sx={{
              color: "#FFFFFF",
              ".MuiSelect-icon": { color: "#FFFFFF" },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
              },
              "& .MuiSelect-select": {
                color: "#FFFFFF80",
              },
            }}
          >
            <MenuItem value="Engineering Drawing">Engineering Drawing</MenuItem>
            <MenuItem value="Mathematics - I">Mathematics - I</MenuItem>
            <MenuItem value="Chemistry - I">Chemistry - I</MenuItem>
            <MenuItem value="Digital Electronics & Electrical">
              Digital Electronics & Electrical
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
