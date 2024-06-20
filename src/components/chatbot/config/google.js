import { GoogleGenerativeAI } from "@google/generative-ai";

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_SECRET);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  export async function GoogleAi(prompt) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return  text;

  }