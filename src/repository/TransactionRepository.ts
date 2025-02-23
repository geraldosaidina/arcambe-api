import { Transaction } from "@prisma/client";
import prisma from "../providers/prisma/client";

export const createTransaction = async (transactionData: Omit<Transaction, "id">): Promise<Transaction> => {
  return prisma.transaction.create({ data: transactionData });
};

export const getTransactionById = async (id: number): Promise<Transaction | null> => {
  return prisma.transaction.findUnique({ where: { id } });
};

export const updateTransaction = async (id: number, transactionData: Partial<Transaction>): Promise<Transaction> => {
  return prisma.transaction.update({ where: { id }, data: transactionData });
};

export const deleteTransaction = async (id: number): Promise<void> => {
  await prisma.transaction.delete({ where: { id } });
};

export const getTransactionsByBuyerId = async (buyerId: number): Promise<Transaction[]> => {
  return prisma.transaction.findMany({ where: { buyerId } });
};

export const getTransactionsBySellerId = async (sellerId: number): Promise<Transaction[]> => {
  return prisma.transaction.findMany({ where: { sellerId } });
};