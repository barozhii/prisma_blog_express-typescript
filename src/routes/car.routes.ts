import express from "express";

const router = express.Router();

import { getCars, createCar, getCarById, updateCar, deleteCar } from "../controller/car.controller";

// Define the routes for car operations
router.get("/car", getCars); // Get all cars
router.get("/car/:id", getCarById); // Get a car by ID
router.post("/car", createCar); // Create a new car
router.put("/car/:id", updateCar); // Update a car by ID
router.delete("/car/:id", deleteCar); // Delete a car by ID

export default router;
