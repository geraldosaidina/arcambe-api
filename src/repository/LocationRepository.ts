import { Location } from "@prisma/client";
import prisma from "../providers/prisma/client";

export const createLocation = async (locationData: Omit<Location, "id">): Promise<Location> => {
  return prisma.location.create({ data: locationData });
};

export const getLocationById = async (id: number): Promise<Location | null> => {
  return prisma.location.findUnique({ where: { id } });
};

export const updateLocation = async (id: number, locationData: Partial<Location>): Promise<Location> => {
  return prisma.location.update({ where: { id }, data: locationData });
};

export const deleteLocation = async (id: number): Promise<void> => {
  await prisma.location.delete({ where: { id } });
};

export const getLocationsByUserId = async (userId: number): Promise<Location[]> => {
  return prisma.location.findMany({ where: { userId } });
};