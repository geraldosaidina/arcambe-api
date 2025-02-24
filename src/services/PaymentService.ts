// src/services/PaymentService.ts

import {
    createPayment,
    getPaymentById,
    updatePayment,
    deletePayment,
    getPaymentsByTransactionId,
  } from "../repository/PaymentRepository";
  import { Payment } from "@prisma/client";
  
  export const PaymentService = {
    createPayment: async (paymentData: Omit<Payment, "id">) => {
      return createPayment(paymentData);
    },
    getPaymentById: async (id: number) => {
      return getPaymentById(id);
    },
    updatePayment: async (id: number, paymentData: Partial<Payment>) => {
      return updatePayment(id, paymentData);
    },
    deletePayment: async (id: number) => {
      await deletePayment(id);
    },
    getPaymentsByTransactionId: async (transactionId: number) => {
      return getPaymentsByTransactionId(transactionId);
    },
  };