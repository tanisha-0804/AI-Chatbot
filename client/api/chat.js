import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    return res.status(500).json({
      reply: "❌ Oops! Something went wrong while connecting to Gemini.",
    });
  }
}