import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mt-12 mb-8 pb-8 border-b">
      <h2 className="text-[40px] leading-[64px] font-bold">Programming Cafe</h2>
      <img
        src="/images/user.jpg"
        alt="user"
        className="w-[60px] h-[60px] rounded-full"
      />
    </header>
  );
};

export default Header;
