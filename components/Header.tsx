import React from "react";

const Header = () => {
  return (
    <>
      <header className=" text-white   flex justify-between items-center p-5 backdrop-blur-md">
        <h1 className="text-2xl font-bold ">COINRUMA</h1>
        <nav className="list-none text-2xl flex align-center justify-center gap-x-[4rem]  ">
          <li>Home</li>
          <li>About</li>
          <li>Github</li>
        </nav>
      </header>
    </>
  );
};

export default Header;
