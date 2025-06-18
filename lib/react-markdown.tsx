"use client";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

const markdown = "# Hi, *Pluto*!";

// Render the Markdown content to the document body
// createRoot(document.body).render(<Markdown>{markdown}</Markdown>);
export const MarkdownWrapper = ({ children }: { children: string }) => (
  <div className=" w-full p-8 text-xl text-slate-700 outline-none font-mediium resize-none overflow-hidden leading-8  tracking-wide">
    <Markdown>{children}</Markdown>
  </div>
);
