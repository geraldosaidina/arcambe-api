import { createUser, getUserById, updateUser, deleteUser } from "../repository/UserRepository";
import { User } from "@prisma/client";

export const UserService = {
  createUser: async (userData: Omit<User, "id">) => {
    try {
      // Validate required fields
      if (!userData.email || !userData.name || !userData.password) {
        throw new Error("Missing required fields: email, name, and password are required");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        throw new Error("Invalid email format");
      }

      return await createUser(userData);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create user: ${error.message}`);
      }
      throw new Error("Failed to create user: Unknown error");
    }
  },

  getUserById: async (id: number) => {
    try {
      if (!id || id <= 0) {
        throw new Error("Invalid user ID");
      }
      return await getUserById(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get user: ${error.message}`);
      }
      throw new Error("Failed to get user: Unknown error");
    }
  },

  updateUser: async (id: number, userData: Partial<User>) => {
    try {
      if (!id || id <= 0) {
        throw new Error("Invalid user ID");
      }

      if (userData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        throw new Error("Invalid email format");
      }

      return await updateUser(id, userData);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update user: ${error.message}`);
      }
      throw new Error("Failed to update user: Unknown error");
    }
  },

  deleteUser: async (id: number) => {
    try {
      if (!id || id <= 0) {
        throw new Error("Invalid user ID");
      }
      await deleteUser(id);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete user: ${error.message}`);
      }
      throw new Error("Failed to delete user: Unknown error");
    }
  },
};