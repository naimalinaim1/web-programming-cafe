import React, { useContext } from "react";
import { InfoContext } from "../ContextInfo";

const Card = ({ blog }) => {
  const {
    author_name,
    blog_title,
    blog_cover_image,
    author_image,
    read_time,
    publish_date,
  } = blog;

  const { readTimeCalculate, addBookMarked } = useContext(InfoContext);

  const handleReadTime = (time) => {
    readTimeCalculate(parseInt(time));
  };

  const handleBookMarked = (title) => {
    addBookMarked(title);
  };

  return (
    <div className="border-b text-gray-500 text-lg pb-9 mb-10">
      <img
        className="w-full h-[420px] rounded"
        src={blog_cover_image}
        alt={blog_title}
      />
      <div className="flex justify-between items-center my-9">
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full w-14 h-14"
            src={author_image}
            alt={author_name}
          />
          <div>
            <p className="text-2xl font-bold text-black">{author_name}</p>
            <p>{publish_date} (4 day ago)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p>{read_time} min read</p>
          <svg
            onClick={() => handleBookMarked(blog_title)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl leading-[50px] text-[#111111] font-bold">
        {blog_title}
      </h2>
      <p className="my-4">#beginners #programming</p>
      <p
        onClick={() => handleReadTime(read_time)}
        className="text-[#6047EC] underline cursor-pointer"
      >
        Mark as read
      </p>
    </div>
  );
};

export default Card;
