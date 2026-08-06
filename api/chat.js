import OpenAI from "openai";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {

    const { message } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
    });


    const response = await openai.chat.completions.create({

      model: process.env.MODEL,

      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant."
        },
        {
          role: "user",
          content: message
        }
      ],

      temperature: 0.7
    });


    res.status(200).json({
      success: true,
      reply: response.choices[0].message.content
    });


  } catch(error) {

    console.log(error);

    res.status(500).json({
      success:false,
      message:"AI server error"
    });

  }
}