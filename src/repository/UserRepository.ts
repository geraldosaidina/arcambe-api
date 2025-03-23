import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  try {
    return await prisma.user.create({
      data: userData
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('A user with this email already exists');
      }
    }
    throw new Error(`Database error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    return await prisma.user.findUnique({
      where: { id }
    });
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    return await prisma.user.findUnique({
      where: { email }
    });
  } catch (error) {
    throw new Error(`Failed to fetch user by email: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
  try {
    return await prisma.user.update({
      where: { id },
      data: userData
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('User not found');
      }
      if (error.code === 'P2002') {
        throw new Error('Email already in use');
      }
    }
    throw new Error(`Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await prisma.user.delete({
      where: { id }
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new Error('User not found');
      }
    }
    throw new Error(`Failed to delete user: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};