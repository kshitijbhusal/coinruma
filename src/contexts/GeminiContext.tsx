"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type GeminiContextType = {
  explanation: string;
  setExplanation: Dispatch<SetStateAction<string>>;
};

export const GeminiContext = createContext<GeminiContextType>({
  explanation: "",
  setExplanation: () => {},
});

const GeminiContextProvider = ({ children }: { children: ReactNode }) => {
  const [explanation, setExplanation] = useState("");
  return (
    <GeminiContext.Provider value={{ explanation, setExplanation }}>
      {children}
    </GeminiContext.Provider>
  );
};

export default GeminiContextProvider;
