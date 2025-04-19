import express from "express";

const router = express.Router();

import { getCars, createCar } from "../controller/car.controller";

// Define the routes for car operations
router.get("/car", getCars); // Get all Cars
router.post("/car", createCar); // Create a new Car

export default router;
