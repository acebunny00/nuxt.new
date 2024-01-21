import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const updateUsers = await prisma.user.updateMany({
    where: {
      email: {
        contains: "prisma.io",
      },
    },
    data: {
      role: "ADMIN",
    },
  });
}

main();
