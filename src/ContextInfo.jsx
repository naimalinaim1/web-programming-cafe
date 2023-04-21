import React, { createContext, useState } from "react";
export const InfoContext = createContext(null);

const ContextInfo = ({ children }) => {
  const [readTime, setReadTime] = useState(0);

  const [bookMarked, setBookMarked] = useState([]);

  // read time
  const readTimeCalculate = (time) => {
    setReadTime(readTime + time);
  };

  // book marked
  const addBookMarked = (item) => {
    setBookMarked([...bookMarked, item]);
  };

  const data = {
    readTime,
    readTimeCalculate,
    bookMarked,
    addBookMarked,
  };

  return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>;
};

export default ContextInfo;
