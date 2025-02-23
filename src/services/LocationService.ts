import {
    createLocation,
    getLocationById,
    updateLocation,
    deleteLocation,
    getLocationsByUserId,
  } from "../repository/LocationRepository";
  import { Location } from "@prisma/client";
  
  export const LocationService = {
    createLocation: async (locationData: Omit<Location, "id">) => {
      return createLocation(locationData);
    },
    getLocationById: async (id: number) => {
      return getLocationById(id);
    },
    updateLocation: async (id: number, locationData: Partial<Location>) => {
      return updateLocation(id, locationData);
    },
    deleteLocation: async (id: number) => {
      await deleteLocation(id);
    },
    getLocationsByUserId: async (userId: number) => {
      return getLocationsByUserId(userId);
    },
  };