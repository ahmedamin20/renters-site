import { GoogleGenerativeAI } from "@google/generative-ai";
const secret = "AIzaSyB_ZnVsOGDChmx59CCOBoUPup_LET57nd4"

const genAI = new GoogleGenerativeAI(secret);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  export async function GoogleAi(prompt) {
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text)
    return  text;
  }