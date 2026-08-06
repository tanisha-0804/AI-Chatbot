export const sendMessageToAI = async (message) => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server Error: ${response.status}`);
    }

    const data = await response.json();
    return data.reply || data.choices?.[0]?.message?.content;
  } catch (error) {
    console.error("API Service Error:", error);
    throw error; // Passes error to Home.jsx to display in chat
  }
};