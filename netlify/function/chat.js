import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        error: "Method not allowed",
      }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Message is required",
        }),
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.text,
      }),
    };

  } catch (error) {
    console.error("Gemini Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "AI connection failed",
      }),
    };
  }
}