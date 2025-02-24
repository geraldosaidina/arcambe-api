import { Request, Response } from "express";
import { AdvertisementService } from "../services/AdvertisementService";

export const AdvertisementController = {
  createAdvertisement: async (req: Request, res: Response) => {
    try {
      const advertisement = await AdvertisementService.createAdvertisement(req.body);
      res.status(201).json(advertisement);
    } catch (error) {
      res.status(500).json({ error: "Failed to create advertisement" });
    }
  },
  getAnnouncementById: async (req: Request, res: Response) => {
    try {
      const advertisement = await AdvertisementService.getAdvertisementById(Number(req.params.id));
      if (advertisement) {
        res.status(200).json(advertisement);
      } else {
        res.status(404).json({ error: "Announcement not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch advertisement" });
    }
  },
  updateAnnouncement: async (req: Request, res: Response) => {
    try {
      const advertisement = await AdvertisementService.updateAdvertisement(Number(req.params.id), req.body);
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json({ error: "Failed to update advertisement" });
    }
  },
  deleteAnnouncement: async (req: Request, res: Response) => {
    try {
      await AdvertisementService.deleteAdvertisement(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete advertisement" });
    }
  },
  getAnnouncementsByUserId: async (req: Request, res: Response) => {
    try {
      const announcements = await AdvertisementService.getAdvertisementsByUserId(Number(req.params.userId));
      res.status(200).json(announcements);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch announcements" });
    }
  },
};