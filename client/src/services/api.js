export const sendMessageToAI = async (message) => {
  try {
    // Determine the API endpoint:
    // Uses localhost:5000 when running 'npm run dev' locally,
    // and '/.netlify/functions/chat' when deployed on Netlify.
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const endpoint = isLocal 
      ? "http://localhost:5000/api/chat" 
      : "/.netlify/functions/chat";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server Error: ${response.status}`);
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("API Service Error:", error);
    throw error;
  }
};