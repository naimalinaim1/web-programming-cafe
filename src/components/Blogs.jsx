import React, { useEffect, useState } from "react";
import Card from "./Card";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  //   load blogs data
  useEffect(() => {
    try {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
