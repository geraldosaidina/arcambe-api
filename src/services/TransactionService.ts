import {
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    getTransactionsByBuyerId,
    getTransactionsBySellerId,
  } from "../repository/TransactionRepository";
  import { Transaction } from "@prisma/client";
  
  export const TransactionService = {
    createTransaction: async (transactionData: Omit<Transaction, "id">) => {
      return createTransaction(transactionData);
    },
    getTransactionById: async (id: number) => {
      return getTransactionById(id);
    },
    updateTransaction: async (id: number, transactionData: Partial<Transaction>) => {
      return updateTransaction(id, transactionData);
    },
    deleteTransaction: async (id: number) => {
      await deleteTransaction(id);
    },
    getTransactionsByBuyerId: async (buyerId: number) => {
      return getTransactionsByBuyerId(buyerId);
    },
    getTransactionsBySellerId: async (sellerId: number) => {
      return getTransactionsBySellerId(sellerId);
    },
  };