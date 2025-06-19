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
        <p className="text-lg mt-2 font-semibold text-white ">
          Enter a coin name and get full breakdown{" "}
          <span className="text-black/90 hover:underline animate-3s ">
            powered by AI.
          </span>
        </p>
      </div>
    </>
  );
};

export default Hero;
