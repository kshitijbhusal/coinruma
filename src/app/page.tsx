"use client";
import { useContext, useEffect, useState } from "react";

import MarkdownWrapper from "@/lib/react-markdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InputBox from "@/components/InputBox";
import { GeminiContext } from "../contexts/GeminiContext";
export default function Home() {
  const { explanation } = useContext(GeminiContext);

  return (
    <>
      <div className="h-screen min-h-fit w-[100vw] bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 flex flex-col justify-between ">
        <div className="container px-4 mx-auto ">
          <Header />

          <main className=" text-white bg-gren-500 w-full ">
            <Hero />

            <div className="bg-yelow-500 flex justify-center items-center gap-x-2 p-4 mt-10 ">
              <InputBox />
            </div>

            {explanation && (
              <section className="drop-shadow-lg border-gray-600   py-6 px-10 border-1  rounded-md bg-gray-200 backdrop-blur-md mt-6">
                {explanation && (
                  <MarkdownWrapper>{explanation}</MarkdownWrapper>
                )}
              </section>
            )}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
