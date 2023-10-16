import { Prisma, PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  let globalwithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalwithPrisma.prisma) {
    globalwithPrisma.prisma = new PrismaClient();
  }
  prisma = globalwithPrisma.prisma;
}

export default prisma;
