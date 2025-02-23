import {
    createAdvertisement,
    getAdvertisementById,
    updateAdvertisement,
    deleteAdvertisement,
    getAdvertisementsByUserId,
  } from "../repository/AdvertisementRepository";
  import { Advertisement } from "@prisma/client";
  
  export const AdvertisementService = {
    createAdvertisement: async (advertisementData: Omit<Advertisement, "id">) => {
      return createAdvertisement(advertisementData);
    },
    getAdvertisementById: async (id: number) => {
      return getAdvertisementById(id);
    },
    updateAdvertisement: async (id: number, advertisementData: Partial<Advertisement>) => {
      return updateAdvertisement(id, advertisementData);
    },
    deleteAdvertisement: async (id: number) => {
      await deleteAdvertisement(id);
    },
    getAdvertisementsByUserId: async (userId: number) => {
      return getAdvertisementsByUserId(userId);
    },
  };