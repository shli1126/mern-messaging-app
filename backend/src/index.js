import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
