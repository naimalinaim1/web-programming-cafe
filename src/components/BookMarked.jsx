import React, { useContext } from "react";
import { InfoContext } from "../ContextInfo";

const BookMarked = () => {
  const { bookMarked } = useContext(InfoContext);

  return (
    <div className="bg-[#11111113] text-[#111111] py-7 px-6 rounded">
      <h2 className="text-2xl font-bold mb-6">
        Bookmarked Blogs: {bookMarked.length}
      </h2>
      {bookMarked.map((item, idx) => (
        <h2
          key={idx}
          className="text-xl font-semibold leading-7 bg-white p-4 rounded mb-4"
        >
          {item}
        </h2>
      ))}
    </div>
  );
};

export default BookMarked;
