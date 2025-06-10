import { PrismaClient } from "@prisma/client";

const prismaClientSigleton = () => {
  return new PrismaClient();
};

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

type prismaClientSigleton = ReturnType<typeof prismaClientSigleton>;

const prisma = globalForPrisma.prisma ?? prismaClientSigleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
