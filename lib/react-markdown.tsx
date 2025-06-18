"use client";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

export const MarkdownWrapper = ({ children }: { children: string }) => (
  <div className=" p-8 text-xl text-[#0A0A23] outline-none font-[400] resize-none overflow-hidden leading-[35.2px]   ">
    <Markdown>{children}</Markdown>
  </div>
);
