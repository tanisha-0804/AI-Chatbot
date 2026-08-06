import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

console.log("API Key:", process.env.GEMINI_API_KEY); // Log the API key to verify it's being read correctly

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default client;