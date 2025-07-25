"use client";
import React, { memo } from "react";
import Markdown from "react-markdown";

const MarkdownWrapper = ({ children }: { children: string }) => (
  <div className="p-8 text-base md:text-xl text-[#0A0A23] outline-none font-[400] resize-none overflow-hidden leading-8 md:leading-[35.2px]   ">
    <Markdown>{children}</Markdown>
  </div>
);

export default memo(MarkdownWrapper);
