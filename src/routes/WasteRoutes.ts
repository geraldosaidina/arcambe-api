import { Router } from "express";
import { wasteController } from "../controllers/WasteController";

const wasteRouter = Router();

wasteRouter.post("/waste", wasteController.createwaste);
wasteRouter.get("/waste/:id", wasteController.getwasteById);
wasteRouter.put("/waste/:id", wasteController.updatewaste);
wasteRouter.delete("/waste/:id", wasteController.deletewaste);
wasteRouter.get("/waste/user/:userId", wasteController.getwastesByUserId);

export default wasteRouter;