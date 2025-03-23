import { Router } from "express";
import { LocationController } from "../controllers/LocationController";

const locationRouter = Router();

locationRouter.post("/location", LocationController.createLocation);
locationRouter.get("/location/:id", LocationController.getLocationById);
locationRouter.put("/location/:id", LocationController.updateLocation);
locationRouter.delete("/location/:id", LocationController.deleteLocation);
locationRouter.get("/location/user/:userId", LocationController.getLocationsByUserId);

export default locationRouter;