import { Waste } from "@prisma/client";
import prisma from "../providers/prisma/client";

export const createWaste = async (wasteData: Omit<Waste, "id">): Promise<Waste> => {
  return prisma.waste.create({ data: wasteData });
};

export const getWasteById = async (id: number): Promise<Waste | null> => {
  return prisma.waste.findUnique({ where: { id } });
};

export const updateWaste = async (id: number, wasteData: Partial<Waste>): Promise<Waste> => {
  return prisma.waste.update({ where: { id }, data: wasteData });
};

export const deleteWaste = async (id: number): Promise<void> => {
  await prisma.waste.delete({ where: { id } });
};

export const getWastesByUserId = async (userId: number): Promise<Waste[]> => {
  return prisma.waste.findMany({ where: { userId } });
};