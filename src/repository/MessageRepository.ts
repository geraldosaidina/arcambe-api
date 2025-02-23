import { Message } from "@prisma/client";
import prisma from "../providers/prisma/client";


export const createMessage = async (messageData: Omit<Message, "id">): Promise<Message> => {
  return prisma.message.create({ data: messageData });
};

export const getMessageById = async (id: number): Promise<Message | null> => {
  return prisma.message.findUnique({ where: { id } });
};

export const updateMessage = async (id: number, messageData: Partial<Message>): Promise<Message> => {
  return prisma.message.update({ where: { id }, data: messageData });
};

export const deleteMessage = async (id: number): Promise<void> => {
  await prisma.message.delete({ where: { id } });
};

export const getMessagesBySenderId = async (senderId: number): Promise<Message[]> => {
  return prisma.message.findMany({ where: { senderId } });
};

export const getMessagesByReceiverId = async (receiverId: number): Promise<Message[]> => {
  return prisma.message.findMany({ where: { receiverId } });
};