"use client";

import { useState, createContext } from "react";

export const NotesDataContext = createContext([]);

const NotesDataContextProvider = (props) => {
  const [notesData, setNotesData] = useState([]);

  return (
    <NotesDataContext.Provider value={{ notesData, setNotesData }}>
      {props.children}
    </NotesDataContext.Provider>
  );
};

export default NotesDataContextProvider;
