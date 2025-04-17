import express from "express";

const router = express.Router();

import { getTests, createTest } from "../controller/test";

// Define the routes for user operations
router.get("/test", getTests); // Get all Test
router.post("/test", createTest); // Create a new customer

export default router;
