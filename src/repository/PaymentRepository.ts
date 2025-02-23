import { Payment } from "@prisma/client";
import prisma from "../providers/prisma/client";

export const createPayment = async (paymentData: Omit<Payment, "id">): Promise<Payment> => {
  return prisma.payment.create({ data: paymentData });
};

export const getPaymentById = async (id: number): Promise<Payment | null> => {
  return prisma.payment.findUnique({ where: { id } });
};

export const updatePayment = async (id: number, paymentData: Partial<Payment>): Promise<Payment> => {
  return prisma.payment.update({ where: { id }, data: paymentData });
};

export const deletePayment = async (id: number): Promise<void> => {
  await prisma.payment.delete({ where: { id } });
};

export const getPaymentsByTransactionId = async (transactionId: number): Promise<Payment[]> => {
  return prisma.payment.findMany({ where: { transactionId } });
};