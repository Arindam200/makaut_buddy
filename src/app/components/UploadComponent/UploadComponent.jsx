import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
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

export default function UploadComponent({ setStartUpload }) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
  const [secureUrl, setSecureUrl] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const semRef = useRef();
  const subjectRef = useRef();
  const headingRef = useRef();
  const descriptionRef = useRef();
  const linkRef = useRef();
  const urlRef = useRef();

  const [activeTab, setActiveTab] = useState("notes");

  useEffect(() => {
    setError(null);
    setSuccessMessage(null);
  }, [activeTab]);

  useEffect(() => {
    setError(null);
  }, [successMessage]);

  useEffect(() => {
    setSuccessMessage(null);
  }, [error]);

  function uploadResource(sem, sub, heading, desc, link, type) {
    axios
      .post(
        `/api/v1/createResource`,
        JSON.stringify({
          sem: sem,
          subject: sub,
          type: type,
          heading: heading,
          description: desc,
          link: link,
        }),
        {
          headers: {
            "access-control-request-method": "POST",
            Authorization: process.env.NEXT_PUBLIC_API_SECRET,
          },
        },
      )
      .then(function (response) {
        if (response.status === 200) {
          setSuccessMessage("Resource uploaded successfully");
        }
      })
      .catch(function (error) {
        console.log(error);
        setError("An error occurred");
      });
  }

  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      multiple: false,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setSecureUrl(result.info.secure_url);
        setError(null);
      } else if (error) {
        setError(error);
      }
    },
  );

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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-black rounded-lg shadow-lg border border-gray-700">
        <div className="w-full text-white  flex">
          {["video", "notes", "pyq"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 px-4 rounded-md ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-white hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "video"
                ? "Youtube vid"
                : tab === "notes"
                ? "Handwritten Notes"
                : "PYQ"}
            </button>
          ))}
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <FormControl fullWidth sx={formControlStyles}>
              <InputLabel id="sem-selector" sx={{ color: "#FFFFFF" }}>
              Select Semester*
              </InputLabel>
              <Select
                labelId="sem-selector"
                id="sem-selector"
                ref={semRef}
                label="Select Semester"
                sx={selectStyles}
              >
                {...semesters}
              </Select>
            </FormControl>
          </div>

          {["subject", "heading", "description"].map((field) => (
            <div key={field} className="space-y-2">
              
              <TextField
                label={field}
                id={field}
                ref={field === "subject" ? subjectRef : field === "heading" ? headingRef : descriptionRef}
                className="w-full rounded-md bg-black border"
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
                }}
              />
            </div>
          ))}

          {activeTab === "video" && (
            <div className="space-y-2">
              

              <TextField
                label="Link"
                id="link"
                ref={linkRef}
                className="w-full rounded-md bg-black border"
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
                }}
              />
            </div>
          )}

          {(activeTab === "notes" || activeTab === "pyq") && (
            <button
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-md p-2.5 my-4 hover:bg-gray-700"
              onClick={() => {
                if (
                  semRef.current.value &&
                  subjectRef.current.value &&
                  headingRef.current.value &&
                  descriptionRef.current.value
                ) {
                  myWidget.open();
                } else {
                  setError("Please fill in the above fields first");
                }
              }}
            >
              Upload a file
            </button>
          )}

          {secureUrl && (
            <div className="space-y-2">
              <label htmlFor="secureUrl" className="block text-sm font-medium text-gray-300">
                Secure Url*
              </label>
              <input
                type="text"
                id="secureUrl"
                ref={urlRef}
                value={secureUrl}
                readOnly
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2"
              />
            </div>
          )}

          <div className="flex space-x-4">
            <button
              className="flex-1 bg-white text-black p-2 rounded-md hover:bg-blue-700"
              onClick={() => {
                if (
                  semRef.current.value &&
                  subjectRef.current.value &&
                  headingRef.current.value &&
                  descriptionRef.current.value &&
                  (linkRef.current?.value || urlRef.current?.value)
                ) {
                  uploadResource(
                    semRef.current.value,
                    subjectRef.current.value,
                    headingRef.current.value,
                    descriptionRef.current.value,
                    activeTab === "video" ? linkRef.current.value : urlRef.current.value,
                    activeTab,
                  );
                } else {
                  setError("Please fill in all the required fields");
                }
              }}
            >
              Upload Resource
            </button>
            <button
              className="flex-1 bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600"
              onClick={() => setStartUpload(false)}
            >
              Close
            </button>
          </div>

          {error && (
            <p className="text-red-400 bg-gray-800 p-2 rounded-md"> {error}</p>
          )}
          {successMessage && (
            <p className="text-green-400 bg-gray-800 p-2 rounded-md"> {successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}