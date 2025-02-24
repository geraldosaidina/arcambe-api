import { Request, Response } from "express";
import { WasteService } from "../services/WasteService";

export const wasteController = {
  createwaste: async (req: Request, res: Response) => {
    try {
      const waste = await WasteService.createWaste(req.body);
      res.status(201).json(waste);
    } catch (error) {
      res.status(500).json({ error: "Failed to create waste" });
    }
  },
  getwasteById: async (req: Request, res: Response) => {
    try {
      const waste = await WasteService.getWasteById(Number(req.params.id));
      if (waste) {
        res.status(200).json(waste);
      } else {
        res.status(404).json({ error: "waste not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch waste" });
    }
  },
  updatewaste: async (req: Request, res: Response) => {
    try {
      const waste = await WasteService.updateWaste(Number(req.params.id), req.body);
      res.status(200).json(waste);
    } catch (error) {
      res.status(500).json({ error: "Failed to update waste" });
    }
  },
  deletewaste: async (req: Request, res: Response) => {
    try {
      await WasteService.deleteWaste(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete waste" });
    }
  },
  getwastesByUserId: async (req: Request, res: Response) => {
    try {
      const wastes = await WasteService.getWastesByUserId(Number(req.params.userId));
      res.status(200).json(wastes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch wastes" });
    }
  },
};