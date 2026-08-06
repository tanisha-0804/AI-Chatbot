import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateResponse = async (message) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "llama-3.3-70b-versatile", // Generous free usage limits
    });

    return completion.choices[0]?.message?.content || "No response standard";
  } catch (error) {
    console.error("GROQ API ERROR:", error);
    throw error;
  }
};