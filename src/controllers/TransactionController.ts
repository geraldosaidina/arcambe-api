import { Request, Response } from "express";
import { TransactionService } from "../services/TransactionService";

export const TransactionController = {
  createTransaction: async (req: Request, res: Response) => {
    try {
      const transaction = await TransactionService.createTransaction(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ error: "Failed to create transaction" });
    }
  },
  getTransactionById: async (req: Request, res: Response) => {
    try {
      const transaction = await TransactionService.getTransactionById(Number(req.params.id));
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res.status(404).json({ error: "Transaction not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transaction" });
    }
  },
  updateTransaction: async (req: Request, res: Response) => {
    try {
      const transaction = await TransactionService.updateTransaction(Number(req.params.id), req.body);
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: "Failed to update transaction" });
    }
  },
  deleteTransaction: async (req: Request, res: Response) => {
    try {
      await TransactionService.deleteTransaction(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete transaction" });
    }
  },
  getTransactionsByBuyerId: async (req: Request, res: Response) => {
    try {
      const transactions = await TransactionService.getTransactionsByBuyerId(Number(req.params.buyerId));
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  },
  getTransactionsBySellerId: async (req: Request, res: Response) => {
    try {
      const transactions = await TransactionService.getTransactionsBySellerId(Number(req.params.sellerId));
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  },
};