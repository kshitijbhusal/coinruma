import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Input } from "./ui/input";
import { GeminiContext } from "@/src/contexts/GeminiContext";
import Loader from "./ui/Loader";

const InputBox = () => {
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(false);

  const { setExplanation } = useContext(GeminiContext);

  const handleSubmit = async (e: any): Promise<void> => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post<{ explanation: any }>("/api/coin", {
        coinName: coin, // assuming `coin` is defined in your component state
      });

      const explanation: any = response.data;
      setExplanation(explanation.geminiResponse || "No response from Gemini");
      setLoading(false);
      console.log(explanation.geminiResponse);
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
      <form
        className="bg-rd-500 w-52  flex flex-col  items-center gap-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={(e) => setCoin(e.target.value)}
          type="text"
          placeholder="Bitcoin, Eth, solana"
          className="w-full h-8 max-w-md text-black bg-slate-50 text-[5px] font-normal  "
        />
        {loading ? (
          <div className=" p-4">
            <Loader />
          </div>
        ) : (
          <button
            // onClick={handleSubmit}
            className="bg-black border-none mb-10 w-fit  px-2 py-1.25 rounded-md text-base font-semibold text-white hover:bg-slate-800 duration-300 cursor-pointer "
          >
            Explain
          </button>
        )}
      </form>
    </>
  );
};

export default InputBox;
