// import React, { useContext } from "react";
// import axios from "axios";
// import { useState } from "react";
// import { Input } from "./ui/input";
// import { GeminiContext } from "@/src/contexts/GeminiContext";
// import Loader from "./ui/Loader";

// const InputBox = () => {
//   const [coin, setCoin] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { setExplanation } = useContext(GeminiContext);

//   interface CoinExplanationResponse {
//     geminiResponse?: string;
//     [key: string]: unknown;
//   }

//   interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

//   const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
//     try {
//       e.preventDefault();
//       setLoading(true);
//       const response = await axios.post<CoinExplanationResponse>("/api/coin", {
//         coinName: coin,
//       });

//       const explanation: CoinExplanationResponse = response.data;
//       setExplanation(explanation.geminiResponse || "No response from Gemini");
//       localStorage.setItem("explanation", JSON.stringify(explanation));
//       setLoading(false);
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error:", error.response?.data || error.message);
//       } else {
//         console.error("Unexpected error:", error);
//       }
//     }
//   };
//   return (
//     <>
//       <form
//         className="bg-rd-500 w-52  flex flex-col  items-center gap-y-4"
//         onSubmit={handleSubmit}
//       >
//         <Input
//           onChange={(e) => setCoin(e.target.value)}
//           type="text"
//           placeholder="Bitcoin, Eth, solana"
//           className="w-full h-8 max-w-md text-black bg-slate-50 text-[5px] font-normal  "
//         />
//         {loading ? (
//           <div className=" p-4 w-12 ">
//             <Loader />
//           </div>
//         ) : (
//           <button
//             // onClick={handleSubmit}
//             className="bg-black border-none mb-10 w-fit  px-2 py-1.25 rounded-md text-base font-semibold text-white hover:bg-slate-800 duration-300 cursor-pointer "
//           >
//             Explain
//           </button>
//         )}
//       </form>
//     </>
//   );
// };

// export default InputBox;
//---------------------------------------------------------------------------------------------------------------------
import React, { useContext, useState } from "react"; // Added useState
import axios from "axios";
import { Input } from "./ui/input";
import { GeminiContext } from "@/src/contexts/GeminiContext";
import Loader from "./ui/Loader";

const InputBox = () => {
  const [coin, setCoin] = useState("");
  const [loading, setLoading] = useState(false);

  const { setExplanation } = useContext(GeminiContext);

  interface CoinExplanationResponse {
    geminiResponse?: string;
    [key: string]: unknown;
  }

  // interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {} // Remove this line

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post<CoinExplanationResponse>("/api/coin", {
        coinName: coin,
      });

      const explanation: CoinExplanationResponse = response.data;
      setExplanation(explanation.geminiResponse || "No response from Gemini");
      localStorage.setItem("explanation", JSON.stringify(explanation));
      setLoading(false);
    } catch (error: unknown) {
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
        className=" w-52 flex flex-col items-center gap-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={(e) => setCoin(e.target.value)}
          type="text"
          placeholder="Bitcoin, Eth, solana"
          className="w-full h-8 max-w-md text-black bg-slate-50 md:text-base font-semibold "
        />
        {loading ? (
          <div className="my-2  ">
            <Loader />
          </div>
        ) : (
          <button className="bg-black border-none mb-10 w-fit px-2 py-1.25 rounded-md text-base font-semibold text-white hover:bg-slate-800 duration-300 cursor-pointer ">
            Explain
          </button>
        )}
      </form>
    </>
  );
};

export default InputBox;
