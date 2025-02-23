import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
}
export const getUserById = async (req: Request, res: Response) => {
    try {
      const user = await UserService.getUserById(Number(req.params.id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
      const user = await UserService.updateUser(Number(req.params.id), req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
      await UserService.deleteUser(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
}

