import React, { useState, useEffect, useContext } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
//importing stream and subject data from /utils/subjects/subjctStreamData
import { stream, subject } from "@/app/utils/subjectStreamData";
import { NotesDataContext } from "../Context/NotesDataContext";

const subjects = subject.map((data) => data.value);

const Search = React.memo(() => {
  const [subjectValue, setSubjectValue] = useState(subjects[0]);

  const { notesData, setNotesData } = useContext(NotesDataContext);

  useEffect(() => {
    axios
      .get(
        `https://makaut-buddy-back-end.iamsagar762.workers.dev/getResource?sub=${subjectValue}`,
        {
          headers: {
            "access-control-request-method": "GET",
            Authorization: process.env.NEXT_PUBLIC_API_SECRET,
          },
        },
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setNotesData(response.data.documents);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [subjectValue]);

  return (
    <Autocomplete
      value={subjectValue}
      onChange={(event, newValue) => {
        setSubjectValue(newValue);
      }}
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
            style: { color: "#FFFFFF" }, // label color
          }}
        />
      )}
    />
  );
});

Search.displayName = "Search";

export default Search;
