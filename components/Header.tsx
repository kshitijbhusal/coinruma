import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className=" text-white     flex justify-between items-center p-2 backdrop-blur-md">
        <Link href="/">
          <Image
            className="bg-re-500 text-white mt-2"
            src="/logo.svg"
            width={100}
            alt="bext"
          />
        </Link>
        <nav className="list-none text-xl flex align-center justify-center gap-x-[4rem]  ">
          <Link
            className="px-1 py-0.5  rounded-md hover:bg-gray-300/20 text-lg "
            href="/"
          >
            HOME
          </Link>
          <Link
            className="px-1 py-0.5 rounded-md hover:bg-gray-300/20 text-lg "
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            target="_blank"
            className="px-1 py-1 rounded-full hover:bg-gray-300/20 text-lg"
            href="https://github.com/kshitijbhusal/coinruma"
          >
            <Github height={25} width={30} />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
