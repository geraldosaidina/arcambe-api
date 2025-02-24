import { Request, Response } from "express";
import { PaymentService } from "../services/PaymentService";

export const PaymentController = {
  createPayment: async (req: Request, res: Response) => {
    try {
      const payment = await PaymentService.createPayment(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(500).json({ error: "Failed to create payment" });
    }
  },
  getPaymentById: async (req: Request, res: Response) => {
    try {
      const payment = await PaymentService.getPaymentById(Number(req.params.id));
      if (payment) {
        res.status(200).json(payment);
      } else {
        res.status(404).json({ error: "Payment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payment" });
    }
  },
  updatePayment: async (req: Request, res: Response) => {
    try {
      const payment = await PaymentService.updatePayment(Number(req.params.id), req.body);
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: "Failed to update payment" });
    }
  },
  deletePayment: async (req: Request, res: Response) => {
    try {
      await PaymentService.deletePayment(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete payment" });
    }
  },
  getPaymentsByTransactionId: async (req: Request, res: Response) => {
    try {
      const payments = await PaymentService.getPaymentsByTransactionId(Number(req.params.transactionId));
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payments" });
    }
  },
};