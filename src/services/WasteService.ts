import {
    createWaste,
    getWasteById,
    updateWaste,
    deleteWaste,
    getWastesByUserId,
  } from "../repository/WasteRepository";
  import { Waste } from "@prisma/client";
  
  export const WasteService = {
    createWaste: async (wasteData: Omit<Waste, "id">) => {
      return createWaste(wasteData);
    },
    getWasteById: async (id: number) => {
      return getWasteById(id);
    },
    updateWaste: async (id: number, wasteData: Partial<Waste>) => {
      return updateWaste(id, wasteData);
    },
    deleteWaste: async (id: number) => {
      await deleteWaste(id);
    },
    getWastesByUserId: async (userId: number) => {
      return getWastesByUserId(userId);
    },
  };