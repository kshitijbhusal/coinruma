"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  // State to hold the coin name input
  const [coin, setCoin] = useState("");
  const [explanation, setExplanation] = useState("");

  // Function to handle the coin name change

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await axios.post<{ explanation: any }>("/api/coin", {
        coinName: coin, // assuming `coin` is defined in your component state
      });

      const explanation: any = response.data;
      setExplanation(explanation.geminiResponse || "No response from Gemini");
      // Use this in state/display
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <>
      <div className="h-screen min-h-fit w-screen bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 ">
        <div className="container px-4 mx-auto">
          <header className=" text-white   flex justify-between items-center p-5 backdrop-blur-md">
            <h1 className="text-2xl font-bold ">COINRUMA</h1>
            <nav className="list-none text-2xl flex align-center justify-center gap-x-[4rem]  ">
              <li>Home</li>
              <li>About</li>
              <li>Github</li>
            </nav>
          </header>

          <main className=" text-white bg-gren-500 w-full ">
            <div className="bg-rd-500  mx-auto w-fit text-center">
              <h1 className="text-6xl font-bold py-4 leading-18">
                Understand Any <br />
                Crypto Project Instantly.
              </h1>
              <p className="text-xl mt-4 font-semibold">
                Enter a coin name and get full breakdown powered by AI.
              </p>
            </div>

            <div className="bg-yelow-500 flex justify-center items-center gap-x-2 p-4 mt-6 ">
              <Input
                onChange={(e) => setCoin(e.target.value)}
                type="text"
                placeholder="Search for a crypto project..."
                className="w-full max-w-md bg-white text-black"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-400 border-none px-4 py-2.5 rounded-md text-xl font-semibold text-white hover:bg-blue-500 duration-300"
              >
                Explain
              </button>
            </div>

            <section className="  p-6 h-fit text-white border-1 rounded-md  mt-6">
              {explanation && (
                <textarea
                  defaultValue={explanation}
                  className="w-full h-50  text-xl text-white "
                ></textarea>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
