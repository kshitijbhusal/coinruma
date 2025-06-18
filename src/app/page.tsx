"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { MarkdownWrapper } from "@/lib/react-markdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  if (textareaRef.current) {
    textareaRef.current.style.height = "auto"; // Set initial height
    textareaRef.current.style.height = textareaRef.current?.scrollHeight + "px"; // Adjust height based on content
  }

  console.log(textareaRef.current?.scrollHeight);

  return (
    <>
      <div className="h-screen min-h-fit w-screen bg-linear-to-t from-fuchsia-200 via-blue-500 to-sky-800 ">
        <div className="container px-4 mx-auto">
          <Header />

          <main className=" text-white bg-gren-500 w-full ">
            <Hero />

            <div className="bg-yelow-500 flex justify-center items-center gap-x-2 p-4 mt-6 ">
              <Input
                onChange={(e) => setCoin(e.target.value)}
                type="text"
                placeholder="Search for a crypto project..."
                className="w-full max-w-md bg-white text-black uppercase"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-400 border-none px-4 py-2.5 rounded-md text-xl font-semibold text-white hover:bg-blue-500 duration-300"
              >
                Explain
              </button>
            </div>

            {explanation && (
              <section className="drop-shadow-lg  text-2xl border-2 border-gray-600 p-6  text-white border-1 rounded-md bg-gray-200 backdrop-blur-md mt-6">
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

// <MarkdownWrapper>

//   <textarea
//     style={{ height: "200px" }}
//     ref={textareaRef}
//     readOnly
//     defaultValue={explanation}
//     className="w-full  text-xl text-black outline-none text-base font-mediium resize-none overflow-hidden  "
//   ></textarea>
// </MarkdownWrapper>
