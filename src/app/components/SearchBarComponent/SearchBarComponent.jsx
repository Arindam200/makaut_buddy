import { Autocomplete, TextField } from "@mui/material";

export default function SearchBarComponent({setNotesSearch}){
    return (
      <TextField fullWidth id="outlined-search" label="Search field" type="search" 
      onChange={(e) => {
        console.log(e.target.value);
        setNotesSearch(e.target.value);
      }}

      InputLabelProps={{
        style: { color: "#FFFFFF" }, // label color
      }}  
      
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
      }}/>
    )
}