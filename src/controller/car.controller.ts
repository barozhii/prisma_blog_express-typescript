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

export const getCarById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const car = await prisma.car.findUnique({
      where: { id: Number(id) },
    });
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.status(200).json(car);
  } catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

export const updateCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { make, model, year } = req.body;
  try {
    const updatedCar = await prisma.car.update({
      where: { id: Number(id) },
      data: {
        make,
        model,
        year,
      },
    });
    res.status(200).json(updatedCar);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.car.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};
