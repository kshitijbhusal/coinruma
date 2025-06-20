"use client";

import MarkdownWrapper from "@/lib/react-markdown";
import { useContext, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InputBox from "@/components/InputBox";
import { GeminiContext } from "../contexts/GeminiContext";
export default function Home() {
  const { explanation } = useContext(GeminiContext);

  useEffect(() => {
    console.log("useeffect running");
    if (explanation) {
      window.scrollBy({
        top: 200,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [explanation]);

  return (
    <>
      <div className=" h-screen  bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 flex flex-col justify-between ">
        <div className=" container px-4 mx-auto ">
          <Header />

          <main className=" text-white bg-gren-500 w-full mt-10 md:mt- ">
            <Hero />

            <div className="bg-yelow-500 flex justify-center items-center gap-x-2 p-4 mt-10 ">
              <InputBox />
            </div>
          </main>
        </div>
      </div>
      <div className=" bg-linear-to-t from-sky-100 via-blue-100 to-fuchsia-200 px-2 md:px-10  ">
        {explanation && (
          <section className="px-1 drop-shadow-lg border-gray-600 md:px-10 border-1  rounded-md bg-gray-200 backdrop-blur-md ">
            {explanation && <MarkdownWrapper>{explanation}</MarkdownWrapper>}
          </section>
        )}
        <Footer />
      </div>
    </>
  );
}
