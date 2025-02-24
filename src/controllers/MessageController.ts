// src/controllers/MessageController.ts

import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";

export const MessageController = {
  createMessage: async (req: Request, res: Response) => {
    try {
      const message = await MessageService.createMessage(req.body);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to create message" });
    }
  },
  getMessageById: async (req: Request, res: Response) => {
    try {
      const message = await MessageService.getMessageById(Number(req.params.id));
      if (message) {
        res.status(200).json(message);
      } else {
        res.status(404).json({ error: "Message not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch message" });
    }
  },
  updateMessage: async (req: Request, res: Response) => {
    try {
      const message = await MessageService.updateMessage(Number(req.params.id), req.body);
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ error: "Failed to update message" });
    }
  },
  deleteMessage: async (req: Request, res: Response) => {
    try {
      await MessageService.deleteMessage(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete message" });
    }
  },
  getMessagesBySenderId: async (req: Request, res: Response) => {
    try {
      const messages = await MessageService.getMessagesBySenderId(Number(req.params.senderId));
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  },
  getMessagesByReceiverId: async (req: Request, res: Response) => {
    try {
      const messages = await MessageService.getMessagesByReceiverId(Number(req.params.receiverId));
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  },
};