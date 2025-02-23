import { Advertisement } from "@prisma/client";
import prisma from "../providers/prisma/client";

export const createAdvertisement = async (advertisementData: Omit<Advertisement, "id">): Promise<Advertisement> => {
  return prisma.advertisement.create({ data: advertisementData });
};

export const getAdvertisementById = async (id: number): Promise<Advertisement | null> => {
  return prisma.advertisement.findUnique({ where: { id } });
};

export const updateAdvertisement = async (id: number, advertisementData: Partial<Advertisement>): Promise<Advertisement> => {
  return prisma.advertisement.update({ where: { id }, data: advertisementData });
};

export const deleteAdvertisement = async (id: number): Promise<void> => {
  await prisma.advertisement.delete({ where: { id } });
};

export const getAdvertisementsByUserId = async (userId: number): Promise<Advertisement[]> => {
  return prisma.advertisement.findMany({ where: { userId } });
};