import { createUser, getUserById, updateUser, deleteUser } from "../repository/UserRepository";
import { User } from "@prisma/client";

export const UserService = {
  createUser: async (userData: Omit<User, "id">) => {
    return createUser(userData);
  },
  getUserById: async (id: number) => {
    return getUserById(id);
  },
  updateUser: async (id: number, userData: Partial<User>) => {
    return updateUser(id, userData);
  },
  deleteUser: async (id: number) => {
    await deleteUser(id);
  },
};