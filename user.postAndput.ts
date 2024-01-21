import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const upsertUser = await prisma.user.upsert({
    where: {
      email: "viola@prisma.io",
    },
    update: {
      name: "Viola the Magnificent",
    },
    create: {
      email: "viola@prisma.io",
      name: "Viola the Magnificent",
    },
  });
}

main();
