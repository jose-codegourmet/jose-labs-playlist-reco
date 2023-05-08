import { Prisma, User } from "@prisma/client";
import { db } from "../utils/db.server";

export type UserOrderBy = {
  [key: string]: "asc" | "desc";
};

export const listUsers = async (orderBy?: UserOrderBy[]): Promise<User[]> => {
  return db.user
    .findMany({
      orderBy,
      select: {
        id: true,
        email: true,
        name: true,
        age: true,
      },
    })
    .finally(async () => {
      await db.$disconnect();
    });
};

export const getUser = async (id: number): Promise<User | null> => {
  return db.user
    .findUnique({
      where: {
        id,
      },
    })
    .finally(async () => {
      await db.$disconnect();
    });
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const { email, name, age } = user;
  return db.user.create({
    data: {
      email,
      name,
      age,
    },
    select: {
      id: true,
      email: true,
      name: true,
      age: true,
    },
  });
};

export const updateUser = async (
  user: Omit<User, "id">,
  id: number
): Promise<User> => {
  const { name, email, age } = user;
  return db.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      age,
    },
    select: {
      id: true,
      email: true,
      name: true,
      age: true,
    },
  });
};

export const deleteUser = async (id: number): Promise<void> => {
  await db.user.delete({
    where: {
      id,
    },
  });
};
