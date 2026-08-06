import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 AI Bot Server is Running",
    version: "1.0.0"
  });
});

app.use("/api/chat", chatRoutes);

export default app;