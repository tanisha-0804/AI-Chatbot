import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Fallback check to ensure key exists
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("⚠️ GEMINI_API_KEY is missing in your server/.env file!");
}

const client = new GoogleGenAI({ apiKey });

export default client;