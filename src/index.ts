import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testRoutes from "./routes/test"; // Adjust the path as necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewar
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", testRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
