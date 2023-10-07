'use client';

import DataContext from './DataContext';
import { useState } from 'react';

const DataState = (props) => {
  const [year, setYear] = useState();
  const [sub, setSub] = useState();

  const passValue = {
    year,
    sub,
    setYear,
    setSub,
  };
  return (
    <DataContext.Provider value={passValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
