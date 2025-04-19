import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/client";

const prisma = new PrismaClient();

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

export const createCar = async (req: Request, res: Response) => {
  const { make, model, year } = req.body;
  try {
    const newCar = await prisma.car.create({
      data: {
        make,
        model,
        year,
      },
    });
    res.status(201).json(newCar);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};
