"use client";

import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";

const subjects = [
  "Engineering Drawing",
  "Mathematics-I",
  "Chemistry-I",
  "Digital Electronics and Electrical",
];

export default function Search() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={subjects}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#FFFFFF80", // text color
          "& fieldset": {
            borderColor: "#FFFFFF20", // border color
            borderWidth: "2px", // thinner border
            borderRadius: "8px", // more rounded border
          },
          "&:hover fieldset": {
            borderColor: "#FFFFFF50", // border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFFFFF50", // border color when focused
          },
          "& .MuiSvgIcon-root": {
            color: "#FFFFFF80", // icon color
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search subjects"
          InputLabelProps={{
            style: { color: "#FFFFFF" }, // hide label
          }}
        />
      )}
    />
  );
}
