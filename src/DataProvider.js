import React, {createContext, useState} from 'react';
export const DataContext = createContext({});

const data = [
  {
    id: 1,
    img: 'https://p.kindpng.com/picc/s/22-223910_circle-user-png-icon-transparent-png.png',
    to: 'John Chen',
    amt: '$150',
    message: 'Big Thanks for your help',
    date: 'Oct 28,2022',
  },
];
const DataProvider = ({children}) => {
  const [state, setState] = useState(data);


  return (
    <DataContext.Provider value={{state,setState}}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
