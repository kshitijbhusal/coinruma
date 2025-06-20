import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className=" text-white flex justify-between items-center p-2 md:p-0 backdrop-blur-md">
        <Link href="/">
          <Image
            className="bg-re-500 text-white mt-2 h-14 w-24 md:h-24"
            src="/logo.svg"
            alt="bext"
            width={0}
            height={0}
          />
        </Link>
        <nav className="list-none  flex align-center justify-center items-center gap-x-2 md:gap-x-[4rem]  ">
          <Link
            className="px-1 py-0.5  rounded-md hover:bg-gray-300/20 text base md:text-lg "
            href="/"
          >
            HOME
          </Link>
          <Link
            className="px-1 py-0.5 rounded-md hover:bg-gray-300/20 text-base  md:text-lg "
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            target="_blank"
            className="px-1 py-1 rounded-full hover:bg-gray-300/20 md:text-lg"
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
