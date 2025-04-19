import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import carRoutes from "./routes/car.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middlewar
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", carRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
