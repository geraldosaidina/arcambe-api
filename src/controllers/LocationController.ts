// src/controllers/LocationController.ts

import { Request, Response } from "express";
import { LocationService } from "../services/LocationService";

export const LocationController = {
  createLocation: async (req: Request, res: Response) => {
    try {
      const location = await LocationService.createLocation(req.body);
      res.status(201).json(location);
    } catch (error) {
      res.status(500).json({ error: "Failed to create location" });
    }
  },
  getLocationById: async (req: Request, res: Response) => {
    try {
      const location = await LocationService.getLocationById(Number(req.params.id));
      if (location) {
        res.status(200).json(location);
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch location" });
    }
  },
  updateLocation: async (req: Request, res: Response) => {
    try {
      const location = await LocationService.updateLocation(Number(req.params.id), req.body);
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ error: "Failed to update location" });
    }
  },
  deleteLocation: async (req: Request, res: Response) => {
    try {
      await LocationService.deleteLocation(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete location" });
    }
  },
  getLocationsByUserId: async (req: Request, res: Response) => {
    try {
      const locations = await LocationService.getLocationsByUserId(Number(req.params.userId));
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch locations" });
    }
  },
};