import React, { useContext } from "react";
import { InfoContext } from "../ContextInfo";

const ReadTime = () => {
  const { readTime } = useContext(InfoContext);

  return (
    <div className="border border-violet-500 bg-violet-100 rounded py-5">
      <h2 className="text-xl xl:text-2xl text-[#6047EC] text-center font-bold">
        Spent time on read : <span>{readTime}</span> min
      </h2>
    </div>
  );
};

export default ReadTime;
