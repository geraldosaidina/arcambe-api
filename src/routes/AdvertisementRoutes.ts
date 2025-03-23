import { Router } from "express";
import { AdvertisementController } from "../controllers/AdvertisementController";

const advertisementRouter = Router();

advertisementRouter.post("/advertisement", AdvertisementController.createAdvertisement);
advertisementRouter.get("/advertisement/:id", AdvertisementController.getAnnouncementById);
advertisementRouter.put("/advertisement/:id", AdvertisementController.updateAnnouncement);
advertisementRouter.delete("/advertisement/:id", AdvertisementController.deleteAnnouncement);
advertisementRouter.get("/advertisement/user/:userId", AdvertisementController.getAnnouncementsByUserId);

export default advertisementRouter;