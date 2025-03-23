import { Router } from "express";
import { PaymentController } from "../controllers/PaymentController";

const paymentRouter = Router();

paymentRouter.post("/payment", PaymentController.createPayment);
paymentRouter.get("/payment/:id", PaymentController.getPaymentById);
paymentRouter.put("/payment/:id", PaymentController.updatePayment);
paymentRouter.delete("/payment/:id", PaymentController.deletePayment);
paymentRouter.get("/payment/transaction/:transactionId", PaymentController.getPaymentsByTransactionId);

export default paymentRouter;