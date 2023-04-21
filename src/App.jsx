import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div className="w-[96%] max-w-[1280px] mx-auto">
      <Header />
      <main className="grid grid-cols-[1fr_400px] gap-4">
        <Blogs />
        <div className="bg-gray-500"></div>
      </main>
    </div>
  );
};

export default App;
