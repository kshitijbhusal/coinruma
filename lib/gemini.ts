"use server";
import axios from "axios";
import { header } from "motion/react-client";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function getGeminiExplanation(coinName: string): Promise<string> {
  const prompt = `
    Explain in simple terms:
    1. What does the ${coinName} project do?
    2. What is the technology behind it (e.g., Layer 1, Layer 0)?
    3. Its main competitors
    4. What makes it unique in the market
    5. Its future potential
  `;

  const res = await fetch(
    `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  // const res = await axios.post(
  //   `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
  //   {
  //     contents: [{ parts: [{ text: prompt }] }],
  //   },
  //   {
  //     headers: { "Content-Type": "application/json" },
  //   }
  // );

  const data = await res.json();

  if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
    return data.candidates[0].content.parts[0].text;
  }

  throw new Error("Failed to get response from Gemini");
}
