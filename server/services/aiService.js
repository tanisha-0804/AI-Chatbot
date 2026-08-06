import client from "../config/ai.js";

export const generateResponse = async (message) => {
  const completion = await client.chat.completions.create({
    model: process.env.MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are AI Bot, a helpful, friendly and intelligent AI assistant.",
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  return completion.choices[0].message.content;
};