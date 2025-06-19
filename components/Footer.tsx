import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Footer = () => {
  return (
    <>
      <div className=" p-4 text-black text-center  w-full">
        <h3 className="text-center text-xs font-bold">
          Made with ❤ by
          <a target="_blank" href="https://x.com/steezcodes">
            <span>
              <ContainerTextFlip />
            </span>
          </a>
        </h3>
      </div>
    </>
  );
};

export default Footer;
