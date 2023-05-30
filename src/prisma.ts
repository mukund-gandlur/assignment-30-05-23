import { PrismaClient } from "@prisma/client";

export const getPrismaInstance = () => {
  return new PrismaClient();
};