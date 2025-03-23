import { Router } from "express";
import { TransactionController } from "../controllers/TransactionController";

const transactionRouter = Router();

transactionRouter.post("/transaction", TransactionController.createTransaction);
transactionRouter.get("/transaction/:id", TransactionController.getTransactionById);
transactionRouter.put("/transaction/:id", TransactionController.updateTransaction);
transactionRouter.delete("/transaction/:id", TransactionController.deleteTransaction);
transactionRouter.get("/transaction/buyer/:buyerId", TransactionController.getTransactionsByBuyerId);
transactionRouter.get("/transaction/seller/:sellerId", TransactionController.getTransactionsBySellerId);

export default transactionRouter;