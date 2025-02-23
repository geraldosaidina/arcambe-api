import {
    createMessage,
    getMessageById,
    updateMessage,
    deleteMessage,
    getMessagesBySenderId,
    getMessagesByReceiverId,
  } from "../repository/MessageRepository";
  import { Message } from "@prisma/client";
  
  export const MessageService = {
    createMessage: async (messageData: Omit<Message, "id">) => {
      return createMessage(messageData);
    },
    getMessageById: async (id: number) => {
      return getMessageById(id);
    },
    updateMessage: async (id: number, messageData: Partial<Message>) => {
      return updateMessage(id, messageData);
    },
    deleteMessage: async (id: number) => {
      await deleteMessage(id);
    },
    getMessagesBySenderId: async (senderId: number) => {
      return getMessagesBySenderId(senderId);
    },
    getMessagesByReceiverId: async (receiverId: number) => {
      return getMessagesByReceiverId(receiverId);
    },
  };