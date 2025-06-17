"use server";
import { NextRequest, NextResponse } from "next/server";
import { getGeminiExplanation } from "../../../../lib/gemini";

// console.log("Coin API route loaded");

export async function POST(req: NextRequest) {
  console.log("Coin API route GET request received");
  const body = await req.text();
  const coinName = JSON.parse(body).coinName || "";

  console.log(coinName);
  const geminiResponse = await getGeminiExplanation(coinName);
  return NextResponse.json({
    // message: coin ? `${coin}` : "No coin requested",
    geminiResponse: geminiResponse || "No response from Gemini",
  });
}
