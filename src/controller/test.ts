import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/client";

const prisma = new PrismaClient();

export const getTests = async (req: Request, res: Response) => {
  try {
    const tests = await prisma.test.findMany();
    res.status(200).json(tests);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};

export const createTest = async (req: Request, res: Response) => {
  const { name, age } = req.body;
  try {
    const newTest = await prisma.test.create({
      data: {
        name,
        age,
      },
    });
    res.status(201).json(newTest);
  } catch (error) {
    console.error("Error creating test:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
};
