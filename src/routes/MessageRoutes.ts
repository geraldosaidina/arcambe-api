import { Router } from "express";
import { MessageController } from "../controllers/MessageController";

const messageRouter = Router();

messageRouter.post("/message", MessageController.createMessage);
messageRouter.get("/message/:id", MessageController.getMessageById);
messageRouter.put("/message/:id", MessageController.updateMessage);
messageRouter.delete("/message/:id", MessageController.deleteMessage);
messageRouter.get("/message/sender/:senderId", MessageController.getMessagesBySenderId);
messageRouter.get("/message/receiver/:receiverId", MessageController.getMessagesByReceiverId);

export default messageRouter;