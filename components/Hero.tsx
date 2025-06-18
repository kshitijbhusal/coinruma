import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-rd-500  mx-auto w-fit text-center">
        <h1 className="text-5xl font-bold py-4 leading-15">
          Understand Any <br />
          <span className="font-extrabold text-black stroke-2 strok-red-500 italic ">
            𝐂𝐑𝐘𝐏𝐓𝐎
          </span>{" "}
          Project Instantly
          <span className="text-black animate-bounce  ">.</span>
        </h1>
        <p className="text-lg mt-2 font-semibold">
          Enter a coin name and get full breakdown powered by AI.
        </p>
      </div>
    </>
  );
};

export default Hero;
