import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

console.log("API Key:", process.env.OPENROUTER_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: process.env.OPENROUTER_BASE_URL,
});

export default client;